'use client';

import React, { useState } from 'react';

const images = [
  { src: '/images/product/front.webp', alt: 'ZULF Hair Elixir — Front' },
  { src: '/images/product/back.webp', alt: 'ZULF Hair Elixir — Back Label' },
  { src: '/images/product/oil-bottle-onion.webp', alt: 'ZULF Hair Elixir — With Onion' },
  { src: '/images/product/oil-drop-macro.webp', alt: 'ZULF Hair Elixir — Oil Drop' },
  { src: '/images/product/bottle-black-marble.webp', alt: 'ZULF Hair Elixir — On Marble' },
];

export default function ProductPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const price = 1999;

  const openLightbox = () => setLightboxOpen(true);
  const closeLightbox = () => setLightboxOpen(false);

  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setActiveIndex((i) => (i + 1) % images.length);

  return (
    <div className="max-w-7xl mx-auto px-6 pt-10 pb-20">
      <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">

        {/* Image Gallery */}
        <div className="space-y-4">

          {/* Main Image */}
          <div
            className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/10 cursor-zoom-in group"
            onClick={openLightbox}
          >
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-4 right-4 bg-black/60 border border-white/20 rounded-lg px-3 py-2 text-xs tracking-[2px] text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              CLICK TO ZOOM
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-5 gap-2">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`relative aspect-square overflow-hidden rounded-lg border cursor-pointer transition-all duration-300 ${
                  activeIndex === i
                    ? 'border-[#C5A46E] opacity-100'
                    : 'border-white/10 opacity-50 hover:opacity-80'
                }`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
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

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl leading-none z-10 transition-colors"
          >
            ✕
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-6 text-white/60 hover:text-white text-3xl z-10 transition-colors px-4 py-2"
          >
            ‹
          </button>

          {/* Image */}
          <div
            className="relative max-w-3xl max-h-[90vh] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-xl"
            />
            <div className="text-center mt-4 text-xs tracking-[3px] text-white/40">
              {activeIndex + 1} / {images.length}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-6 text-white/60 hover:text-white text-3xl z-10 transition-colors px-4 py-2"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
