import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story — Why ZULF Was Created',
  description: 'ZULF was born from a desire to bring luxury, halal-certified hair care to Pakistan. Discover the story behind the elixir and the vision of Feed Your Roots. Own Your Crown.',
};

import React from 'react';
import Link from 'next/link';

export default function OurStoryPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-16 pb-24">
      
      {/* Hero / Heading */}
      <div className="text-center mb-16">
        <div className="gold-line mx-auto mb-6" />
        <h1 className="text-5xl md:text-6xl tracking-[-1.5px] font-serif">Why ZULF Exists</h1>
      </div>

      {/* Story Content */}
      <div className="prose prose-invert max-w-none text-lg leading-relaxed text-white/90">
        <p>
          Zulf is an Urdu word. It means a lock of hair — something precious, something personal.
        </p>

        <p>
          It started with a frustration almost every household in Pakistan will recognize: hair oils that promised a lot and changed very little, while the hard water (Khara Pani) coming out of the tap quietly worked against every one of them. For one woman, the answer wasn't a new invention — it was going back to four ingredients her own family had trusted for generations, and finally giving them the precision they'd never had.
        </p>

        <p>
          She prepared the recipe with care. Her hair fall reduced. Her scalp felt calmer. Her strands grew stronger.
        </p>

        <p>
          That recipe became the foundation of ZULF.
        </p>

        <p>
          We did not create a chemical miracle. We took the four ancestral ingredients that had always worked, stripped away the cheap fillers, and gave them the absolute botanical precision they deserved. Wood-pressed extraction to preserve every nutrient. Zero water. Zero artificial fragrances. Every decision was made to defend your hair at the highest possible standard.
        </p>

        <p>
          ZULF is not a treatment. It is a return to what is real. It is the decision to give your hair the same attention your life rarely allows.
        </p>

        <p>
          Every bottle carries one conviction: what grows from your roots matters.
        </p>
      </div>

      {/* Pull Quote */}
      <div className="my-16 text-center">
        <p className="text-2xl md:text-3xl font-serif tracking-tight text-[#C5A46E]">
          “No cheap fillers. No synthetic miracles. Just absolute botanical precision.”
        </p>
      </div>

      {/* Founder Line */}
      <div className="text-center mb-16">
        <p className="text-white/70">Founded in Pakistan. Built for every crown.</p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link 
          href="/product" 
          className="btn-gold px-10 py-4 text-base tracking-[2px]"
        >
          EXPERIENCE THE ELIXIR
        </Link>
      </div>

    </div>
  );
}