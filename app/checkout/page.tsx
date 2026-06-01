"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const API_URL = "https://script.google.com/macros/s/AKfycbxkM9FUYrjYUa02ByRkIsrPe0Va_C_u2XkcSgGR5oHOqSeinJn_w33xwojYEZPIjE8/exec";

export default function CheckoutPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);
  const pricePerBottle = 1500;
  const deliveryCharges = 200; // Rs. 200 delivery charge for Pakistan

  const totalAmount = (quantity * pricePerBottle) + deliveryCharges;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      action: "newOrder",
      customerName: formData.get("fullName"),
      phone: formData.get("phone"),
      email: formData.get("email") || "",
      city: formData.get("city"),
      address: formData.get("address"),
      product: "Zulf Hair Elixir",
      quantity: quantity,
      unitPrice: pricePerBottle,
      shippingCharges: deliveryCharges,
      orderSource: "Website",
      customerNotes: formData.get("notes") || "",
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // Google Apps Script responds with redirect sometimes, but standard fetch follows it
      let result;
      if (response.redirected) {
        const redirectedResponse = await fetch(response.url);
        result = await redirectedResponse.json();
      } else {
        result = await response.json();
      }

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
        <h1 className="text-3xl md:text-4xl font-serif text-[#C5A46E] mb-8 text-center uppercase tracking-widest">
          Secure Checkout
        </h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Section */}
          <div className="flex-1 bg-zinc-900/50 p-6 md:p-8 rounded-xl border border-zinc-800">
            <h2 className="text-xl text-[#C5A46E] mb-6 font-semibold uppercase tracking-wider border-b border-zinc-800 pb-4">
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
                    className="w-full bg-zinc-950 border border-zinc-800 p-3 rounded-md focus:border-[#C5A46E] focus:outline-none transition-colors"
                    placeholder="03XXXXXXXXX"
                  />
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
              <h2 className="text-xl text-[#C5A46E] mb-6 font-semibold uppercase tracking-wider border-b border-zinc-800 pb-4">
                Order Summary
              </h2>

              <div className="flex gap-4 mb-6">
                <div className="w-20 h-20 bg-zinc-950 border border-zinc-800 rounded-md overflow-hidden relative">
                  {/* Ideally, we'd use next/image here, but fallback to simple div if no image */}
                  <div className="absolute inset-0 flex items-center justify-center text-[#C5A46E] font-serif font-bold">
                    ZULF
                  </div>
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