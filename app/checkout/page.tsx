'use client';

import React, { useState } from 'react';

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order placed successfully! (This is a demo)');
  };

  return (
    <div className="max-w-6xl mx-auto px-6 pt-10 pb-20">
      <h1 className="text-4xl tracking-[-1px] font-serif mb-10">Checkout</h1>

      <div className="grid lg:grid-cols-5 gap-x-12">
        
        {/* Checkout Form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm tracking-widest mb-2">FIRST NAME</label>
                <input 
                  type="text" 
                  name="firstName" 
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 focus:outline-none focus:border-[#C5A46E]" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm tracking-widest mb-2">LAST NAME</label>
                <input 
                  type="text" 
                  name="lastName" 
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 focus:outline-none focus:border-[#C5A46E]" 
                  required 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm tracking-widest mb-2">EMAIL ADDRESS</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/20 px-4 py-3 focus:outline-none focus:border-[#C5A46E]" 
                required 
              />
            </div>

            <div>
              <label className="block text-sm tracking-widest mb-2">PHONE NUMBER</label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/20 px-4 py-3 focus:outline-none focus:border-[#C5A46E]" 
                required 
              />
            </div>

            <div>
              <label className="block text-sm tracking-widest mb-2">DELIVERY ADDRESS</label>
              <input 
                type="text" 
                name="address" 
                value={formData.address}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/20 px-4 py-3 focus:outline-none focus:border-[#C5A46E]" 
                required 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm tracking-widest mb-2">CITY</label>
                <input 
                  type="text" 
                  name="city" 
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 focus:outline-none focus:border-[#C5A46E]" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm tracking-widest mb-2">PROVINCE</label>
                <select 
                  name="province" 
                  value={formData.province}
                  onChange={handleChange}
                  className="w-full bg-[#0A0A0A] border border-white/20 px-4 py-3 focus:outline-none focus:border-[#C5A46E]" 
                  required
                >
                  <option value="">Select Province</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Sindh">Sindh</option>
                  <option value="KPK">Khyber Pakhtunkhwa</option>
                  <option value="Balochistan">Balochistan</option>
                  <option value="Islamabad">Islamabad</option>
                </select>
              </div>
            </div>

            {/* Payment Method */}
            <div className="pt-6">
              <label className="block text-sm tracking-widest mb-3">PAYMENT METHOD</label>
              <div className="border border-white/20 p-4 rounded">
                <label className="flex items-center gap-3">
                  <input type="radio" name="payment" defaultChecked />
                  <span>Cash on Delivery (COD)</span>
                </label>
                <p className="text-xs text-white/50 mt-2 ml-6">Pay when your order is delivered.</p>
              </div>
            </div>

            <button 
              type="submit"
              className="btn-gold w-full py-4 mt-6 tracking-[2px] text-base"
            >
              PLACE ORDER
            </button>
          </form>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-2 mt-12 lg:mt-0">
          <div className="bg-[#111] p-6 rounded-xl border border-white/10 sticky top-24">
            <h4 className="font-medium tracking-widest text-sm mb-6">ORDER SUMMARY</h4>
            
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span>ZULF Hair Elixir × 1</span>
                <span>Rs. 1,999</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Rs. 300</span>
              </div>
              <div className="border-t border-white/10 pt-4 flex justify-between font-medium text-lg">
                <span>Total</span>
                <span>Rs. 2,249</span>
              </div>
            </div>

            <div className="mt-8 text-xs text-white/60 tracking-widest">
              <p>✓ Secure Checkout</p>
              <p>✓ 100% Halal</p>
              <p>✓ 30-Day Return Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}