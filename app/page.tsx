'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const heroSlides = [
  '/images/homepage/hero-1.webp',
  '/images/homepage/hero-2.webp',
  '/images/homepage/hero-3.webp',
  '/images/homepage/hero-4.webp',
  '/images/homepage/hero-5.webp',
];

export default function ZulfHomepage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0A0A0A] text-white">
      
      {/* ==================== HERO ==================== */}
      <section className="relative h-[100dvh] overflow-hidden">

        {/* Full-Screen Sliding Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[currentSlide]}
              alt="ZULF Hair Elixir"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/90 via-black/40 md:via-black/30 to-transparent z-[1]" />

        {/* Hero Text Content */}
        <div className="absolute inset-0 z-[2] flex items-end md:items-start pb-24 md:pb-0 pt-0 md:pt-48 justify-center md:justify-start px-6 md:px-16 lg:px-24">
          <div className="max-w-2xl text-center md:text-left flex flex-col items-center md:items-start">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-[40px] sm:text-[46px] md:text-[52px] lg:text-[62px] leading-[0.95] tracking-[-2px] font-serif mb-4"
            >
              Your Crown<br />Deserves a Ritual.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="max-w-md text-[15px] md:text-base text-white/70 tracking-wide mb-8"
            >
              Fortified with mustard oil, fenugreek, onion, and rosemary —<br className="hidden md:block" />
              crafted for every crown that refuses to thin.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              <a href="#product" className="btn-gold px-8 md:px-12 py-4 text-sm md:text-base tracking-[3px]">
                OWN YOUR CROWN
              </a>
            </motion.div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-[3] flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-[2px] rounded-full transition-all duration-500 ${
                i === currentSlide ? 'w-8 bg-[#C5A46E]' : 'w-4 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

      </section>

      {/* ==================== BRAND PROMISE ==================== */}
      <section className="section border-t border-white/10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="gold-line mx-auto mb-8" />
          <h2 className="text-2xl md:text-[42px] leading-tight tracking-[-1.2px] font-serif">
            In Pakistan, an alarming 76% of people experience hair loss.<br className="hidden md:block" />
            We built ZULF for the ones who refuse to accept it.
          </h2>
          <p className="mt-6 text-sm tracking-[2px] text-white/50">Source: Journal of Health and Rehabilitation Research, 2024</p>
        </div>
      </section>

      {/* ==================== PRODUCT FEATURE ==================== */}
      <section id="product" className="section border-t border-white/10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-x-16 items-center">
          <div>
            <div className="uppercase tracking-[3px] text-[#C5A46E] text-sm mb-3">BY ZULF</div>
            <h2 className="text-4xl md:text-6xl tracking-[-2px] font-serif leading-none mb-6 md:mb-8">Hair Elixir</h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              A concentrated organic elixir formulated to address the root causes of hair fall —
              weakened follicles, scalp inflammation, and nutrient deprivation.
            </p>
            <Link href="/checkout" className="btn-gold tracking-[2px] px-9 py-4">SHOP NOW - Rs. 1,999</Link>
          </div>

          <div className="mt-10 md:mt-0">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img src="/images/product/front.webp" alt="ZULF Hair Elixir" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INGREDIENT PREVIEW ==================== */}
      <section className="section border-t border-white/10 bg-[#050505] px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl tracking-[-1px] font-serif">Four Ingredients. One Purpose.</h2>
            <p className="mt-3 text-white/60">Each chosen for centuries of South Asian tradition and modern botanical research.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: "Mustard Oil", src: "/images/ingredients/mustard-oil.webp" },
              { name: "Fenugreek", src: "/images/ingredients/fenugreek.webp" },
              { name: "Onion", src: "/images/ingredients/onion.webp" },
              { name: "Rosemary", src: "/images/ingredients/rosemary.webp" }
            ].map((item, index) => (
              <div key={index} className="group overflow-hidden rounded-xl border border-white/10 bg-[#0A0A0A]">
                <div className="relative h-60">
                  <img src={item.src} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <div className="p-7">
                  <h4 className="text-2xl font-serif tracking-tight mb-3">{item.name}</h4>
                  <p className="text-white/70 text-[15px]">
                    {index === 0 && "Wood-pressed to preserve its full nutritional profile."}
                    {index === 1 && "Rich in proteins traditionally used to support hair thickness."}
                    {index === 2 && "Contains natural sulfur compounds known to support scalp health."}
                    {index === 3 && "A powerful botanical with a long history of use for hair care."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BENEFITS ==================== */}
      <section className="section border-t border-white/10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-2xl md:text-4xl tracking-[-1px] font-serif mb-10 md:mb-14">What Changes When You Use Hair Elixir</h2>
         
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { label: "PRIMARY BENEFIT", title: "Hairfall Elimination", desc: "Anchors roots deeply into the scalp with overwhelming density to systematically eliminate shedding." },
              { label: "SCALP HEALTH", title: "Clears Dandruff & Itch", desc: "Detoxifies the scalp from fungal buildup to create a balanced environment that stops itching immediately." },
              { label: "ENVIRONMENTAL SHIELD", title: "Hard Water Defense", desc: "Forms a protective lipid barrier to lock out harsh groundwater minerals and prevent dry, snapping hair." }
            ].map((item, i) => (
              <div key={i}>
                <div className="text-[#C5A46E] text-xs tracking-[2.5px] mb-3">{item.label}</div>
                <h4 className="text-2xl font-serif tracking-tight mb-4">{item.title}</h4>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="relative w-full h-[200px] md:h-[340px] rounded-2xl overflow-hidden border border-white/10">
            <img src="/images/homepage/benefits-texture.webp" alt="Hair Texture" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ==================== HALAL & QUALITY ==================== */}
      <section className="section border-t border-white/10 bg-[#050505] px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl tracking-[-0.5px] font-serif mb-12">Made With Integrity</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "100% Halal", desc: "Every ingredient is plant-derived. No animal byproducts. No alcohol." },
              { title: "No Parabens, Sulphates & Silicones", desc: "Clean formulation. Free from harsh chemicals that can damage hair and scalp." },
              { title: "Kachi Ghani (Wood-Pressed)", desc: "Mustard oil is wood-pressed in small batches to preserve its full nutritional profile." }
            ].map((item, i) => (
              <div key={i} className="border border-white/10 p-8 text-left rounded-xl">
                <div className="text-[#C5A46E] text-xs tracking-[2px] mb-4">STANDARD 0{i + 1}</div>
                <h5 className="text-2xl font-serif tracking-tight mb-4">{item.title}</h5>
                <p className="text-white/70 text-[15px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="section border-t border-white/10 px-4 md:px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl tracking-[-2px] font-serif leading-none mb-6 md:mb-8">Your Crown.<br />Your Ritual.<br />Your Choice.</h2>
            <p className="text-xl text-white/70 mb-8">Hair Elixir by ZULF — Four Ingredients · One Decision</p>
            <Link href="/checkout" className="btn-gold tracking-[2px] px-10 py-4">SHOP HAIR ELIXIR - Rs. 1,999</Link>
          </div>

          <div className="mt-12 md:mt-0">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
              <img src="/images/homepage/final-cta-bottle.webp" alt="ZULF" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}