export async function onRequestPost(context) {
  try {
    const data = await context.request.json();
    
    // Read Brevo API key from Cloudflare Pages environment variable (secure, never in code)
    const BREVO_API_KEY = context.env.BREVO_API_KEY || "";
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwlPCRUvQUVFsE2eG_w6Cm495KmgAJWrM0NvFTw0zjop9tI4Vf9Zy__y75QmeiXgy4E/exec";
    
    const realEmail = data.email || '';
    const name = data.customerName || 'Customer';
    const product = data.product || 'Zulf Hair Elixir';
    const quantity = data.quantity || '1';
    const unitPrice = data.unitPrice || 1999;
    const shippingCharges = data.shippingCharges || 0;
    const discount = data.discount || 0;
    const total = (unitPrice * parseInt(quantity)) + shippingCharges - discount;
    const address = data.address || '';
    const city = data.city || '';
    const phone = data.phone || '';

    // 1. Remove email before sending to Google Apps Script
    //    This prevents Google Apps Script from sending its own duplicate email
    const gsData = { ...data };
    if (realEmail) {
      delete gsData.email;
      gsData.customerNotes = (gsData.customerNotes ? gsData.customerNotes + " | " : "") + "Email: " + realEmail;
    }

    // 2. Save to Google Sheets FIRST so we get the Order ID
    const googleResponse = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(gsData)
    });

    const googleResult = await googleResponse.json();
    const orderId = googleResult.orderId || "Pending";

    // 3. Send the Premium Customer Email via Brevo with the REAL Order ID
    if (realEmail && BREVO_API_KEY) {
      const htmlBody = `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; padding: 40px; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #C5A46E; font-size: 28px; letter-spacing: 4px; margin: 0;">ZULF</h1>
            <p style="color: #C5A46E; font-size: 12px; letter-spacing: 2px; margin-top: 4px;">FEED YOUR ROOTS. OWN YOUR CROWN.</p>
          </div>
          
          <div style="background: #1a1a1a; border-radius: 8px; padding: 30px; margin-bottom: 20px;">
            <h2 style="color: #C5A46E; margin-top: 0;">Thank You For Your Order! ✅</h2>
            <p style="color: #cccccc;">Your order has been confirmed and is being processed.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr style="border-bottom: 1px solid #333;">
                <td style="padding: 12px 0; color: #999;">Order ID</td>
                <td style="padding: 12px 0; text-align: right; font-weight: bold; color: #C5A46E;">${orderId}</td>
              </tr>
              <tr style="border-bottom: 1px solid #333;">
                <td style="padding: 12px 0; color: #999;">Product</td>
                <td style="padding: 12px 0; text-align: right; color: #fff;">${product}</td>
              </tr>
              <tr style="border-bottom: 1px solid #333;">
                <td style="padding: 12px 0; color: #999;">Price</td>
                <td style="padding: 12px 0; text-align: right; color: #fff;">Rs. ${unitPrice.toLocaleString()}</td>
              </tr>
              <tr style="border-bottom: 1px solid #333;">
                <td style="padding: 12px 0; color: #999;">Quantity</td>
                <td style="padding: 12px 0; text-align: right; color: #fff;">${quantity}</td>
              </tr>
              <tr style="border-bottom: 1px solid #333;">
                <td style="padding: 12px 0; color: #999;">Shipping</td>
                <td style="padding: 12px 0; text-align: right; color: #fff;">${shippingCharges === 0 ? 'Free' : `Rs. ${shippingCharges}`}</td>
              </tr>
              <tr style="border-bottom: 1px solid #333;">
                <td style="padding: 12px 0; color: #999;">Payment</td>
                <td style="padding: 12px 0; text-align: right; color: #fff;">Cash on Delivery</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #999; font-size: 18px;">Total</td>
                <td style="padding: 12px 0; text-align: right; font-size: 18px; font-weight: bold; color: #C5A46E;">Rs. ${total.toLocaleString()}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: #1a1a1a; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #C5A46E; margin-top: 0;">Delivery Details</h3>
            <p style="color: #cccccc; margin: 4px 0;">${name}</p>
            <p style="color: #cccccc; margin: 4px 0;">${phone}</p>
            <p style="color: #cccccc; margin: 4px 0;">${address}, ${city}</p>
          </div>
          
          <div style="text-align: center; padding: 20px;">
            <p style="color: #999; font-size: 14px;">Questions about your order?</p>
            <a href="https://wa.me/923104622755" style="display: inline-block; background: #C5A46E; color: #0a0a0a; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; letter-spacing: 1px;">CHAT ON WHATSAPP</a>
          </div>
          
          <div style="text-align: center; margin-top: 30px; border-top: 1px solid #333; padding-top: 20px;">
            <p style="color: #666; font-size: 12px; letter-spacing: 1px;">© ${new Date().getFullYear()} ZULF HAIR. All rights reserved.</p>
            <p style="color: #666; font-size: 12px;">
              <a href="https://zulfhair.com" style="color: #C5A46E; text-decoration: none;">zulfhair.com</a>
            </p>
          </div>
        </div>
      `;

      const payload = {
        sender: { name: "Zulf", email: "order@zulfhair.com" },
        to: [{ email: realEmail, name: name }],
        subject: `Order Confirmed ✅ ${orderId} — Zulf`,
        htmlContent: htmlBody
      };

      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "api-key": BREVO_API_KEY,
          "content-type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const text = await response.text();
        console.error("Brevo Error:", text);
      }
    }

    return Response.json(googleResult);
  } catch (error) {
    console.error("Checkout error:", error);
    return Response.json({ success: false, message: error.message }, { status: 500 });
  }
}
