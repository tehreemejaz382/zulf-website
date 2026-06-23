'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { trackFbEvent } from '../components/TrackingScripts';
import { ShieldCheck, Leaf, Droplet } from 'lucide-react';

const images = [
  { src: '/images/product/1.webp', alt: 'ZULF Hair Elixir — Front' },
  { src: '/images/product/2.webp', alt: 'ZULF Hair Elixir — Ingredients' },
  { src: '/images/product/3.webp', alt: 'ZULF Hair Elixir — Texture' },
  { src: '/images/product/4.webp', alt: 'ZULF Hair Elixir — Healthy Hair' },
  { src: '/images/product/5.webp', alt: 'ZULF Hair Elixir — The Ritual' },
];

export default function ProductPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const price = 1499;

  const openLightbox = () => setLightboxOpen(true);
  const closeLightbox = () => setLightboxOpen(false);

  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setActiveIndex((i) => (i + 1) % images.length);

  return (
    <div className="max-w-7xl mx-auto px-6 pt-10 pb-20">
      <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">

        {/* Left Column: Image Gallery + Reviews */}
        <div className="flex flex-col gap-y-12">
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
            
            {/* Lazy Reader Overlays */}
            {activeIndex === 3 && (
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none">
                <p className="text-white text-[22px] md:text-2xl font-serif font-medium leading-tight drop-shadow-lg">
                  Week 1: Clears Scalp.<br/>Week 4: Stops Hairfall.
                </p>
              </div>
            )}
            {activeIndex === 4 && (
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none text-center pb-12">
                <p className="text-[#C5A46E] tracking-[3px] uppercase text-sm md:text-base font-semibold drop-shadow-lg">
                  Feed the root.<br/>Own the crown.
                </p>
              </div>
            )}

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
          
        {/* Desktop Reviews */}
        <div className="hidden lg:block pt-6 border-t border-white/10">
            <h3 className="text-[#C5A46E] tracking-[2px] text-sm mb-6 font-sans text-center">REAL RESULTS</h3>
            <div className="space-y-4">
              <div className="p-6 bg-[#050505] border border-white/10 rounded-xl">
                <div className="flex text-[#C5A46E] mb-2">★★★★★</div>
                <p className="text-sm text-white/80 mb-2">"I am the mother of two kids and my hair was falling out in clumps because of the lot of reasons. This oil is the first thing that actually stopped it. My brush is finally clean."</p>
                <p className="text-xs text-white/50 uppercase tracking-widest">— Bushra</p>
              </div>
              <div className="p-6 bg-[#050505] border border-white/10 rounded-xl">
                <div className="flex text-[#C5A46E] mb-2">★★★★★</div>
                <p className="text-sm text-white/80 mb-2">"hair brush use krnay k bad mjhy boht tension hoti q ky brush bilkul balon sy bharr jata tha, aur mery sar py patches banna start hi gy, esy lagta tha jesy ma ganji hony wali hon. bohut sari chezen try krny k bad Zulf ka hair Elixir oil mila, isy use krny k bad esy lagta ha jesy kabhi kuch hua hi ni mery balon k sath. ab to har waqt balon ko dekh shukar parhti hun."</p>
                <p className="text-xs text-white/50 uppercase tracking-widest">— Tehreem</p>
              </div>
              <div className="p-6 bg-[#050505] border border-white/10 rounded-xl">
                <div className="flex text-[#C5A46E] mb-2">★★★★★</div>
                <p className="text-sm text-white/80 mb-2">"Mujhy itna khas shoq ni ha hair care krny ka lekin mjhy dandruf ny bht tang kia hua tha. Ma ny market sy bht sy shampoo use kiye kafi salon tak, agar wo shampoo 1 y 2 week skip ho jayn to dandruf wapis a jata or layers ban jati han or ye 4 saal sy mjhy pareshan kiye huy ha. Lekin ye sary shampoo chor diye han jab sy Hair Elixir lagana start kia ha. Ab mjhy tasali ha."</p>
                <p className="text-xs text-white/50 uppercase tracking-widest">— Talha</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-5xl tracking-[-1.5px] font-serif mb-2">Hair Elixir by ZULF</h1>
          <p className="text-[#C5A46E] tracking-[2px] text-sm mb-6">100ml • Organic • Handcrafted in Pakistan</p>

          <div className="text-3xl font-medium mb-6 flex items-center gap-3">
            <span className="line-through text-white/50 text-2xl">Rs. 1,999</span>
            <span className="text-[#C5A46E]">Rs. {price.toLocaleString()}</span>
          </div>

          <Link 
            href="/checkout" 
            className="block w-full text-center btn-gold py-4 text-base tracking-[2px] mb-4"
            onClick={() => trackFbEvent('AddToCart')}
          >
            ORDER NOW — CASH ON DELIVERY
          </Link>

          <p className="text-xs text-white/60 tracking-widest mb-4 text-center">
            Dispatched within 24 hours • 14-day returns
          </p>
          
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-[#C5A46E]/10 text-[#C5A46E] text-xs tracking-widest rounded border border-[#C5A46E]/20">
              Handcrafted in small batches — limited stock
            </span>
          </div>

          {/* Trust Bar for Lazy Readers */}
          <div className="grid grid-cols-3 gap-2 py-6 border-y border-white/10 mb-10">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <ShieldCheck className="w-6 h-6 text-red-500" strokeWidth={1.5} />
              <span className="text-[10px] md:text-xs text-white/80 tracking-widest uppercase font-medium">Stops<br/>Hairfall</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center space-y-2 border-l border-white/10">
              <Leaf className="w-6 h-6 text-green-500" strokeWidth={1.5} />
              <span className="text-[10px] md:text-xs text-white/80 tracking-widest uppercase font-medium">100%<br/>Organic</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center space-y-2 border-l border-white/10">
              <Droplet className="w-6 h-6 text-blue-500" strokeWidth={1.5} />
              <span className="text-[10px] md:text-xs text-white/80 tracking-widest uppercase font-medium">Hard Water<br/>Defense</span>
            </div>
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

            {/* The Formulation Story */}
            <div className="p-6 md:p-8 bg-white/5 border border-[#C5A46E]/30 rounded-xl">
              <h3 className="text-[#C5A46E] tracking-[2px] text-sm mb-4 font-sans uppercase">The Formulation Story</h3>
              <p className="italic text-white/90">
                "ZULF was born from a very personal journey. When chemical shampoos failed to protect hair from the damage of harsh city water, we refused to compromise. We turned to the natural power of South Asian ingredients and spent months perfecting a 100% halal, wood-pressed elixir. It did not just stop the hair fall; it brought the hair back to life. We launched ZULF to share this standard of care with you."
              </p>
            </div>

            {/* The Ritual (How to Use) */}
            <div>
              <h3 className="text-[#C5A46E] tracking-[2px] text-sm mb-4 font-sans">THE RITUAL (HOW TO USE)</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A46E] mt-1 font-bold">1.</span>
                  <span><strong>The Drop:</strong> Apply 6-8 drops directly to the scalp, focusing on thinning areas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A46E] mt-1 font-bold">2.</span>
                  <span><strong>The Massage:</strong> Gently massage with your fingertips for 3-5 minutes to stimulate blood flow.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A46E] mt-1 font-bold">3.</span>
                  <span><strong>The Rest:</strong> Leave it in overnight, or for at least 2 hours before washing. Use on alternate nights.</span>
                </li>
              </ul>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-[#C5A46E] tracking-[2px] text-sm mb-4 font-sans">WHAT TO EXPECT</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 border border-white/10 rounded-lg">
                  <div className="text-[#C5A46E] font-serif text-xl mb-2">Week 1</div>
                  <p className="text-sm">Scalp detoxifies. Dandruff and itching significantly reduce. Hard water barrier forms.</p>
                </div>
                <div className="p-5 border border-white/10 rounded-lg">
                  <div className="text-[#C5A46E] font-serif text-xl mb-2">Week 4</div>
                  <p className="text-sm">Roots anchor. Noticeable reduction in daily hairfall and shedding on the brush.</p>
                </div>
              </div>
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

            {/* The Zulf Difference */}
            <div>
              <h3 className="text-[#C5A46E] tracking-[2px] text-sm mb-4 font-sans">WHY ZULF IS DIFFERENT</h3>
              <p className="mb-4 text-white/90 italic">We do not mass-produce in factories. We do not dilute our formulas to cut costs. Here is why Hair Elixir is in a class of its own:</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A46E] mt-1">•</span>
                  <span><strong className="text-white">Slow Wood-Pressed Mustard Oil:</strong> We never use industrial machine-pressing. Our mustard oil is traditionally wood-pressed. This slow, labor-intensive process generates zero heat, guaranteeing that 100% of the vital hair-repairing nutrients are perfectly preserved.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A46E] mt-1">•</span>
                  <span><strong className="text-white">100% Pure, Undiluted Rosemary:</strong> Commercial brands heavily dilute their rosemary in cheap carrier oils to save money. ZULF uses a pure, undiluted rosemary extraction to deliver unparalleled scalp stimulation and density support.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A46E] mt-1">•</span>
                  <span><strong className="text-white">Micro-Batch Handcrafting:</strong> Every single bottle of ZULF is handcrafted in small, highly controlled batches to ensure absolute freshness and maximum potency when it reaches your scalp.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A46E] mt-1">•</span>
                  <span><strong className="text-white">Zero Filler Policy:</strong> If an ingredient doesn't actively stop hairfall, it is not in the bottle. No water, no artificial fragrances, and no cheap chemical extenders. Just 100% active, organic power.</span>
                </li>
              </ul>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-[#C5A46E] tracking-[2px] text-sm mb-4 font-sans">FREQUENTLY ASKED QUESTIONS</h3>
              <div className="space-y-4">
                <div className="border-b border-white/10 pb-4">
                  <h4 className="font-medium text-white mb-2">Is ZULF 100% Halal?</h4>
                  <p className="text-sm text-white/70">Yes. It is entirely plant-derived with no animal byproducts and zero alcohol. Perfect for a halal lifestyle.</p>
                </div>
                <div className="border-b border-white/10 pb-4">
                  <h4 className="font-medium text-white mb-2">Does it have a strong mustard smell?</h4>
                  <p className="text-sm text-white/70">No. The rosemary and fenugreek beautifully balance the scent, giving it an earthy, botanical aroma.</p>
                </div>
                <div className="border-b border-white/10 pb-4">
                  <h4 className="font-medium text-white mb-2">Will one bottle be enough?</h4>
                  <p className="text-sm text-white/70">One 100ml bottle typically lasts 4-6 weeks with regular use (alternate nights), making it an excellent value.</p>
                </div>
              </div>
            </div>

            {/* Mobile Reviews */}
            <div className="pt-6 lg:hidden">
              <h3 className="text-[#C5A46E] tracking-[2px] text-sm mb-6 font-sans text-center">REAL RESULTS</h3>
              <div className="space-y-4">
                <div className="p-6 bg-[#050505] border border-white/10 rounded-xl">
                  <div className="flex text-[#C5A46E] mb-2">★★★★★</div>
                  <p className="text-sm text-white/80 mb-2">"I am the mother of two kids and my hair was falling out in clumps because of the lot of reasons. This oil is the first thing that actually stopped it. My brush is finally clean."</p>
                  <p className="text-xs text-white/50 uppercase tracking-widest">— Bushra</p>
                </div>
                <div className="p-6 bg-[#050505] border border-white/10 rounded-xl">
                  <div className="flex text-[#C5A46E] mb-2">★★★★★</div>
                  <p className="text-sm text-white/80 mb-2">"hair brush use krnay k bad mjhy boht tension hoti q ky brush bilkul balon sy bharr jata tha, aur mery sar py patches banna start hi gy, esy lagta tha jesy ma ganji hony wali hon. bohut sari chezen try krny k bad Zulf ka hair Elixir oil mila, isy use krny k bad esy lagta ha jesy kabhi kuch hua hi ni mery balon k sath. ab to har waqt balon ko dekh shukar parhti hun."</p>
                  <p className="text-xs text-white/50 uppercase tracking-widest">— Tehreem</p>
                </div>
                <div className="p-6 bg-[#050505] border border-white/10 rounded-xl">
                  <div className="flex text-[#C5A46E] mb-2">★★★★★</div>
                  <p className="text-sm text-white/80 mb-2">"Mujhy itna khas shoq ni ha hair care krny ka lekin mjhy dandruf ny bht tang kia hua tha. Ma ny market sy bht sy shampoo use kiye kafi salon tak, agar wo shampoo 1 y 2 week skip ho jayn to dandruf wapis a jata or layers ban jati han or ye 4 saal sy mjhy pareshan kiye huy ha. Lekin ye sary shampoo chor diye han jab sy Hair Elixir lagana start kia ha. Ab mjhy tasali ha."</p>
                  <p className="text-xs text-white/50 uppercase tracking-widest">— Talha</p>
                </div>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="pt-6 text-center border-t border-white/10 mt-8">
              <p className="text-white/90 text-[17px] md:text-lg leading-relaxed font-medium">
                The solution has always existed.<br />
                Your hair just needed the right one.<br />
                <span className="text-[#C5A46E] tracking-[2px] mt-4 block uppercase text-sm">FEED THE ROOT. OWN THE CROWN.</span>
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
          ORDER NOW — CASH ON DELIVERY
        </Link>
      </div>
    </div>
  );
}
