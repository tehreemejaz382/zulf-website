import React from 'react';
import Link from 'next/link';

export default function OrderConfirmationPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 pt-16 pb-24 text-center">
      
      <div className="gold-line mx-auto mb-8" />
      
      <h1 className="text-5xl tracking-[-1.5px] font-serif mb-4">
        Your Crown Is On Its Way.
      </h1>
      
      <p className="text-lg text-white/70 mb-10">
        Thank you for beginning your ritual with ZULF.
      </p>

      {/* Order Details */}
      <div className="bg-[#111] border border-white/10 rounded-xl p-8 text-left mb-10">
        <h3 className="font-medium tracking-widest text-sm mb-6">ORDER DETAILS</h3>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-white/60">Order Number</span>
            <span>#ZULF-28471</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/60">Product</span>
            <span>ZULF Hair Elixir (100ml)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/60">Quantity</span>
            <span>1</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/60">Total Paid</span>
            <span>Rs. 2,249</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-white/10">
            <span className="text-white/60">Expected Delivery</span>
            <span>2–4 business days</span>
          </div>
        </div>
      </div>

      {/* Brand Message */}
      <div className="mb-10">
        <p className="text-white/80">
          We dispatch within 24 hours. You will receive an update via WhatsApp and email.
        </p>
      </div>

      {/* WhatsApp Support */}
      <div className="mb-10">
        <p className="text-sm text-white/60 mb-2">Questions about your order?</p>
        <a 
          href="https://wa.me/923104622755" 
          target="_blank"
          className="text-[#C5A46E] tracking-widest hover:underline"
        >
          Chat with us on WhatsApp →
        </a>
      </div>

      {/* Next Step */}
      <div>
        <Link 
          href="/ritual" 
          className="text-sm tracking-[2px] text-white/70 hover:text-white underline-offset-4 hover:underline"
        >
          WHILE YOU WAIT, READ THE ZULF RITUAL →
        </Link>
      </div>

    </div>
  );
}