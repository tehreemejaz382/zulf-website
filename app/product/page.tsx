'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { trackFbEvent } from '../components/TrackingScripts';

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
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-5xl tracking-[-1.5px] font-serif mb-2">Hair Elixir by ZULF</h1>
          <p className="text-[#C5A46E] tracking-[2px] text-sm mb-6">100ml • Organic • Handcrafted in Pakistan</p>

          <div className="text-3xl font-medium mb-6">
            Rs. {price} <span className="text-sm font-normal text-white/60 ml-2">+ Rs. 299 delivery</span>
          </div>

          <Link 
            href="/checkout" 
            className="block w-full text-center btn-gold py-4 text-base tracking-[2px] mb-4"
            onClick={() => trackFbEvent('AddToCart')}
          >
            BUY NOW — Rs. {price}
          </Link>

          <p className="text-xs text-white/60 tracking-widest mb-4 text-center">
            Dispatched within 24 hours • 14-day returns
          </p>
          
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-[#C5A46E]/10 text-[#C5A46E] text-xs tracking-widest rounded border border-[#C5A46E]/20">
              Handcrafted in small batches — limited stock
            </span>
          </div>

          {/* Deep Copy Section */}
          <div className="space-y-8 md:space-y-10 text-white/80 leading-relaxed text-[15px] md:text-base">
            
            {/* The Hook */}
            <div>
              <h3 className="text-[#C5A46E] tracking-[2px] text-sm mb-4 font-sans">YOUR CROWN DESERVES A RITUAL</h3>
              <p>
                <strong>Hair Elixir by ZULF</strong> is a 100% organic oil made to protect your hair. By mixing four of South Asia's most trusted natural ingredients, this oil stops hair fall, delays early white hair, and brings your hair back to life.
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-[#C5A46E] tracking-[2px] text-sm mb-4 font-sans">HOW HAIR ELIXIR TRANSFORMS YOUR HAIR</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A46E] mt-1">✓</span>
                  <span><strong className="text-white">Hard Water Defense:</strong> Creates a protective layer that blocks harsh water minerals from drying out and breaking your hair.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A46E] mt-1">✓</span>
                  <span><strong className="text-white">Stops Hairfall:</strong> Strengthens your hair roots to visibly stop shedding within weeks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A46E] mt-1">✓</span>
                  <span><strong className="text-white">Delays Greying:</strong> Natural antioxidants nourish your scalp to help delay early white hair.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A46E] mt-1">✓</span>
                  <span><strong className="text-white">Clears Dandruff:</strong> Cleans the scalp, clears stubborn dandruff, and stops itching immediately.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A46E] mt-1">✓</span>
                  <span><strong className="text-white">Smooths Frizz:</strong> Deeply hydrates rough hair, turning it into smooth, manageable silk.</span>
                </li>
              </ul>
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="text-[#C5A46E] tracking-[2px] text-sm mb-4 font-sans">FOUR INGREDIENTS. ONE PURPOSE.</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A46E] mt-1">•</span>
                  <span><strong className="text-white">Wood-Pressed Mustard Oil:</strong> Extracted cold to keep its full power. Provides deep conditioning.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A46E] mt-1">•</span>
                  <span><strong className="text-white">Fenugreek:</strong> Rich in proteins used for centuries to make hair thick and smooth.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A46E] mt-1">•</span>
                  <span><strong className="text-white">Onion:</strong> Naturally cleans the scalp and helps delay hair aging.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A46E] mt-1">•</span>
                  <span><strong className="text-white">Rosemary:</strong> A famous natural herb proven to soothe the scalp and promote thicker hair.</span>
                </li>
              </ul>
            </div>

            {/* Closing Statement */}
            <div className="pt-4 text-center">
              <p className="text-[#C5A46E] font-serif text-[18px] md:text-xl italic leading-relaxed">
                The solution has always existed.<br />
                Your hair just needed the right one.<br />
                <span className="text-white font-medium not-italic tracking-[1px] mt-2 block uppercase text-sm">Feed the root. Own the crown.</span>
              </p>
            </div>
          </div>

          <div className="pt-10 mt-10 border-t border-white/10">
            <div className="flex flex-wrap gap-x-6 gap-y-4 text-xs tracking-widest text-white/70">
              <span>100% HALAL</span>
              <span>NO PARABENS</span>
              <span>NO SULPHATES</span>
              <span>NO MINERAL OILS</span>
              <span>HANDCRAFTED IN PAKISTAN</span>
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

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#0A0A0A]/95 backdrop-blur border-t border-white/10 md:hidden z-40">
        <Link 
          href="/checkout" 
          className="block w-full text-center btn-gold py-3 text-sm tracking-[2px]"
          onClick={() => trackFbEvent('AddToCart')}
        >
          BUY NOW — Rs. {price}
        </Link>
      </div>
    </div>
  );
}
