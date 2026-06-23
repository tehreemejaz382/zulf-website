"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { trackFbEvent } from "../components/TrackingScripts";


export default function CheckoutPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [phoneError, setPhoneError] = useState("");
  const pricePerBottle = 1499;
  const deliveryCharges = 299; // Rs. 299 delivery charge for Pakistan

  const totalAmount = (quantity * pricePerBottle) + deliveryCharges;

  useEffect(() => {
    trackFbEvent('InitiateCheckout');
  }, []);

  const validatePhone = (phone: string): string => {
    // Remove spaces, dashes, and dots
    const cleaned = phone.replace(/[\s\-\.]/g, "");
    if (!cleaned) return "Phone number is required";
    if (!/^\d+$/.test(cleaned)) return "Phone number must contain only digits";
    if (cleaned.length < 10) return "Phone number is too short";
    if (cleaned.length > 12) return "Phone number is too long";
    if (cleaned.startsWith("0") && cleaned.length !== 11) return "Pakistani numbers must be 11 digits (e.g. 03001234567)";
    if (cleaned.startsWith("0") && !cleaned.startsWith("03")) return "Mobile number must start with 03";
    if (cleaned === "0" || cleaned === "00" || /^0+$/.test(cleaned)) return "Please enter a valid phone number";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setPhoneError("");

    const formData = new FormData(e.currentTarget);
    const phone = (formData.get("phone") as string || "").trim();

    // Validate phone number
    const phoneValidation = validatePhone(phone);
    if (phoneValidation) {
      setPhoneError(phoneValidation);
      return;
    }

    setLoading(true);

    const utmSource = typeof window !== "undefined" ? localStorage.getItem("utm_source") : null;
    const orderSource = utmSource ? `Website (${utmSource})` : "Website";

    const data = {
      action: "newOrder",
      customerName: formData.get("fullName"),
      phone: phone,
      email: formData.get("email") || "",
      city: formData.get("city"),
      address: formData.get("address"),
      product: "Zulf Hair Elixir",
      quantity: quantity,
      unitPrice: pricePerBottle,
      shippingCharges: deliveryCharges,
      orderSource: orderSource,
      customerNotes: formData.get("notes") || "",
    };

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        // Redirect to confirmation page with orderId
        router.push(`/checkout/confirmation?orderId=${result.orderId}`);
      } else {
        setError(result.error || "Failed to place order. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl md:text-4xl text-[#C5A46E] mb-8 text-center uppercase tracking-widest" style={{ fontFamily: "var(--font-playfair, serif)" }}>
          Secure Checkout
        </h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Section */}
          <div className="flex-1 bg-zinc-900/50 p-6 md:p-8 rounded-xl border border-zinc-800">
            <h2 className="text-xl text-[#C5A46E] mb-6 uppercase tracking-wider border-b border-zinc-800 pb-4" style={{ fontFamily: "var(--font-playfair, serif)" }}>
              Delivery Details
            </h2>

            {error && (
              <div className="bg-red-900/50 border border-red-500 text-red-200 p-4 rounded-md mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Full Name *</label>
                  <input
                    required
                    name="fullName"
                    type="text"
                    className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded-md focus:border-[#C5A46E] focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Phone Number *</label>
                  <input
                    required
                    name="phone"
                    type="tel"
                    maxLength={11}
                    pattern="03[0-9]{9}"
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^\d]/g, "");
                      e.target.value = val;
                      if (phoneError) setPhoneError("");
                    }}
                    className={`w-full bg-zinc-950 border ${phoneError ? 'border-red-500' : 'border-zinc-800'} p-3 rounded-md focus:border-[#C5A46E] focus:outline-none transition-colors`}
                    placeholder="03001234567"
                  />
                  {phoneError && (
                    <p className="text-red-400 text-xs mt-1">{phoneError}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm text-zinc-400 mb-2">Email Address (Optional)</label>
                <input
                  name="email"
                  type="email"
                  className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded-md focus:border-[#C5A46E] focus:outline-none transition-colors"
                  placeholder="For order confirmation email"
                />
              </div>

              <div>
                <label className="block text-sm text-zinc-400 mb-2">City *</label>
                <select
                  required
                  name="city"
                  className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded-md focus:border-[#C5A46E] focus:outline-none transition-colors appearance-none"
                >
                  <option value="">Select your city</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                  <option value="Faisalabad">Faisalabad</option>
                  <option value="Multan">Multan</option>
                  <option value="Peshawar">Peshawar</option>
                  <option value="Quetta">Quetta</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-zinc-400 mb-2">Complete Address *</label>
                <textarea
                  required
                  name="address"
                  rows={3}
                  className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded-md focus:border-[#C5A46E] focus:outline-none transition-colors"
                  placeholder="House/Apartment no, Street, Area"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm text-zinc-400 mb-2">Special Instructions (Optional)</label>
                <input
                  name="notes"
                  type="text"
                  className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded-md focus:border-[#C5A46E] focus:outline-none transition-colors"
                  placeholder="E.g., Please call before delivery"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C5A46E] text-black font-bold py-4 px-8 rounded-full hover:bg-white transition-colors duration-300 uppercase tracking-widest text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Processing..." : "Place Order (Cash on Delivery)"}
                </button>
                <p className="text-zinc-500 text-xs text-center mt-4">
                  By placing this order, you agree to pay cash upon delivery.
                </p>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:w-[400px]">
            <div className="bg-zinc-900/50 p-6 md:p-8 rounded-xl border border-zinc-800 sticky top-24">
              <h2 className="text-xl text-[#C5A46E] mb-6 uppercase tracking-wider border-b border-zinc-800 pb-4" style={{ fontFamily: "var(--font-playfair, serif)" }}>
                Order Summary
              </h2>

              <div className="flex gap-4 mb-6">
                <div className="w-20 h-20 shrink-0 bg-zinc-950 border border-zinc-800 rounded-md overflow-hidden relative">
                  <img 
                    src="/images/product/1.webp" 
                    alt="ZULF Hair Elixir" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">Zulf Hair Elixir</h3>
                  <p className="text-zinc-400 text-sm">Premium Hair Oil</p>
                  <p className="text-[#C5A46E] font-medium mt-1">Rs. {pricePerBottle.toLocaleString()}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-8 pb-8 border-b border-zinc-800">
                <span className="text-zinc-400">Quantity</span>
                <div className="flex items-center gap-4 bg-zinc-950 rounded-full border border-zinc-800 px-4 py-1">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-2xl text-zinc-500 hover:text-white pb-1"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-medium">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.min(5, quantity + 1))}
                    className="text-2xl text-zinc-500 hover:text-white pb-1"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Subtotal ({quantity} items)</span>
                  <span>Rs. {(quantity * pricePerBottle).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Delivery Charges</span>
                  <span>Rs. {deliveryCharges}</span>
                </div>
                <div className="flex justify-between pt-4 border-t border-zinc-800 font-bold text-lg text-[#C5A46E]">
                  <span>Total</span>
                  <span>Rs. {totalAmount.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-8 bg-zinc-950 p-4 rounded-md border border-zinc-800 flex items-center gap-3">
                <svg className="w-6 h-6 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p className="text-sm text-zinc-300">
                  <span className="font-bold">Cash on Delivery</span> available. You will only pay when you receive the product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}