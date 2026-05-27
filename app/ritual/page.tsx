import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Ritual — How to Use ZULF Hair Elixir',
  description: 'Learn the ZULF hair care ritual. A step-by-step guide to applying ZULF Hair Elixir for maximum absorption and results. Turn your hair care into a daily ceremony.',
};

import React from 'react';
import Link from 'next/link';

const ritualSteps = [
  {
    number: "I",
    title: "Warm the Oil",
    description: "Warm 6 to 8 drops between your palms for twenty seconds until the oil reaches body temperature."
  },
  {
    number: "II",
    title: "Apply to Scalp & Roots",
    description: "Part your hair and apply directly to the scalp and roots. Lengths may receive what remains on the palms."
  },
  {
    number: "III",
    title: "Massage Gently",
    description: "Using only your fingertips, massage gently in slow circles for three to five minutes."
  },
  {
    number: "IV",
    title: "Leave to Absorb",
    description: "Leave the elixir on for a minimum of one hour. For deeper nourishment, leave it overnight."
  },
  {
    number: "V",
    title: "Cleanse",
    description: "Cleanse with a mild, sulphate-free shampoo. Use on alternate days for best results."
  }
];

export default function RitualPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-16 pb-24">
      
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="gold-line mx-auto mb-6" />
        <h1 className="text-5xl md:text-6xl tracking-[-1.5px] font-serif mb-4">The ZULF Ritual</h1>
        <p className="text-xl text-white/70">Six minutes. Alternate days. A discipline that rewards patience.</p>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[420px] mb-16 overflow-hidden rounded-xl border border-white/10">
        <img 
          src="/images/product/oil-drop-macro.webp" 
          alt="ZULF Ritual - Oil Drop" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
      </div>

      {/* Steps */}
      <div className="space-y-12">
        {ritualSteps.map((step, index) => (
          <div key={index} className="flex gap-8">
            <div className="text-[#C5A46E] text-4xl font-serif w-12 flex-shrink-0">
              {step.number}
            </div>
            <div>
              <h3 className="text-2xl font-serif tracking-tight mb-3">{step.title}</h3>
              <p className="text-white/80 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Closing Line */}
      <div className="mt-16 text-center">
        <p className="text-2xl font-serif tracking-tight text-[#C5A46E]">
          “Consistency is the ritual.”
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <Link 
          href="/product" 
          className="btn-gold px-10 py-4 text-base tracking-[2px]"
        >
          BEGIN YOUR RITUAL
        </Link>
      </div>

    </div>
  );
}