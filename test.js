const fetch = require('node-fetch');

async function test() {
  const data = {
    action: "newOrder",
    customerName: "Test User",
    phone: "03001234567",
    email: "test@example.com",
    city: "Karachi",
    address: "Test Address",
    product: "Zulf Hair Elixir",
    quantity: 1,
    unitPrice: 1999,
    shippingCharges: 300,
    orderSource: "Website",
    customerNotes: "Test"
  };

  const response = await fetch("http://localhost:3000/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const text = await response.text();
  console.log("Status:", response.status);
  console.log("Response:", text);
}

test();
