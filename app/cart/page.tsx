'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const [quantity, setQuantity] = useState(1);

  const price = 1999;
  const shipping = 299;
  const total = price * quantity + shipping;

  return (
    <div className="max-w-4xl mx-auto px-6 pt-12 pb-20">
      <h1 className="text-4xl tracking-[-1px] font-serif mb-10">Your Cart</h1>

      <div className="grid md:grid-cols-3 gap-x-12">
        
        {/* Cart Items */}
        <div className="md:col-span-2">
          <div className="flex gap-6 border-b border-white/10 pb-8">
            
            {/* Product Image */}
            <div className="relative w-28 h-28 flex-shrink-0 overflow-hidden rounded-lg border border-white/10">
              <Image 
                src="/images/product/front.webp" 
                alt="ZULF Hair Elixir" 
                fill 
                className="object-cover" 
              />
            </div>

            {/* Product Details */}
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium">ZULF Hair Elixir</h3>
                  <p className="text-sm text-white/60">100ml • Wood-Pressed</p>
                </div>
                <div className="text-right">
                  <p>Rs. {price}</p>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 mt-4">
                <span className="text-sm text-white/60">Quantity:</span>
                <div className="flex items-center border border-white/20 rounded">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 hover:bg-white/5"
                  >
                    −
                  </button>
                  <span className="px-4">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 hover:bg-white/5"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="mt-8 text-sm text-white/70">
            <p>Free delivery on orders above Rs. 3,900</p>
            <p className="mt-1">Estimated delivery: 2–4 business days</p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="mt-10 md:mt-0">
          <div className="bg-[#111] p-6 rounded-xl border border-white/10">
            <h4 className="font-medium tracking-widest text-sm mb-6">ORDER SUMMARY</h4>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs. {price * quantity}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Rs. {shipping}</span>
              </div>
              <div className="border-t border-white/10 pt-3 flex justify-between font-medium">
                <span>Total</span>
                <span>Rs. {total}</span>
              </div>
            </div>

            <Link 
              href="/checkout" 
              className="btn-gold w-full mt-8 py-4 text-center block tracking-[2px]"
            >
              PROCEED TO CHECKOUT
            </Link>

            <div className="mt-6 text-xs text-center text-white/50 tracking-widest">
              Secure checkout • 100% Halal • 14-day returns
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}