'use client';

import React, { useState } from 'react';

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const price = 1999;
  const shipping = 250;
  const total = price * quantity + shipping;

  return (
    <div className="max-w-7xl mx-auto px-6 pt-10 pb-20">
      <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
        
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/10">
            <img src="/images/product/front.png" alt="ZULF Hair Elixir" className="w-full h-full object-cover" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square overflow-hidden rounded-lg border border-white/10">
              <img src="/images/product/back.png" alt="Back Label" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border border-white/10">
              <img src="/images/product/oil-bottle-onion.png" alt="Bottle with Onion" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border border-white/10">
              <img src="/images/product/oil-drop-macro.png" alt="Oil Drop" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border border-white/10">
              <img src="/images/product/bottle-black-marble.png" alt="Bottle on Marble" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-5xl tracking-[-1.5px] font-serif mb-2">ZULF Hair Elixir</h1>
          <p className="text-[#C5A46E] tracking-[2px] text-sm mb-6">100ml • Wood-Pressed • Handcrafted in Pakistan</p>

          <div className="text-3xl font-medium mb-6">Rs. {price}</div>

          <button className="w-full btn-gold py-4 text-base tracking-[2px] mb-4">
            ADD TO CART — Rs. {price}
          </button>

          <p className="text-xs text-white/60 tracking-widest mb-8">
            Dispatched within 24 hours • 15-day returns
          </p>

          <div className="mb-8">
            <h3 className="text-[#C5A46E] tracking-[2px] text-sm mb-3">DESCRIPTION</h3>
            <p className="text-white/80 leading-relaxed">
              A concentrated botanical elixir formulated to address the root causes of hair fall.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-[#C5A46E] tracking-[2px] text-sm mb-3">KEY INGREDIENTS</h3>
            <div className="space-y-1 text-white/80">
              <p>• Wood-Pressed Mustard Oil</p>
              <p>• Fenugreek (Methi)</p>
              <p>• Onion (Pyaaz)</p>
              <p>• Rosemary</p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-widest text-white/70">
              <span>100% HALAL</span>
              <span>NO PARABENS</span>
              <span>NO SULPHATES</span>
              <span>WOOD-PRESSED</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}