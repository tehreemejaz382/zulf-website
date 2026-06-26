import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ingredients — The Science Behind ZULF Hair Elixir',
  description: 'Discover the four powerful botanicals in ZULF Hair Elixir: Wood-Pressed Mustard Oil, Fenugreek, Onion, and Rosemary — each chosen for proven hair growth and scalp health benefits.',
};

import React from 'react';
import Link from 'next/link';

const ingredients = [
  {
    name: "Wood-Pressed Mustard Oil",
    image: "/images/ingredients/mustard-oil.webp",
    description: "Extracted through the traditional Kachi Ghani (wood-pressing) method at low temperatures to prevent the destruction of heat-sensitive compounds. It serves as the foundational carrier oil.",
    science: (
      <>
        <span className="block mb-2"><strong className="text-white">How It Works:</strong> Mustard oil creates a mild, natural warming sensation on the scalp when massaged in — the same effect that's made it a staple of South Asian hair rituals for generations. It's also rich in fatty acids that form a protective barrier on the hair shaft, which is especially useful against hard water minerals (see "Hard Water Defense" below).</span>
        <span className="block"><strong className="text-white">The Benefit:</strong> A warming massage oil that conditions deeply and helps shield hair from everyday environmental damage — used the traditional way, made the modern way.</span>
      </>
    )
  },
  {
    name: "Fenugreek",
    image: "/images/ingredients/fenugreek.webp",
    description: "A powerful South Asian botanical heavily researched for its ability to target the hormonal and structural causes of hair thinning.",
    science: (
      <>
        <span className="block mb-2"><strong className="text-white">How It Works:</strong> Fenugreek has been used in South Asian hair care for centuries, prized for its protein content — roughly 25% by composition. Early research has looked at some of its natural compounds in relation to hormonal hair-thinning factors, though this isn't something fenugreek alone can resolve, and it isn't a substitute for medical treatment if you're dealing with significant hair loss.</span>
        <span className="block"><strong className="text-white">The Benefit:</strong> A protein-rich, traditionally-trusted ingredient that supports strand strength and helps calm an irritated scalp.</span>
      </>
    )
  },
  {
    name: "Onion",
    image: "/images/ingredients/onion.webp",
    description: "Far more than a traditional remedy, onion extract is a highly concentrated delivery system for structural proteins and enzymes critical to follicle survival.",
    science: (
      <>
        <span className="block mb-2"><strong className="text-white">How It Works:</strong> Onion is rich in dietary sulfur, the same building block your body uses to produce keratin — the protein that makes up hair itself. It's been used in South Asian households for generations as a scalp tonic, and its antioxidant content helps protect against everyday environmental stress.</span>
        <span className="block"><strong className="text-white">The Benefit:</strong> Supports the structural building blocks of strong hair and helps protect against day-to-day damage, the traditional way.</span>
      </>
    )
  },
  {
    name: "Rosemary",
    image: "/images/ingredients/rosemary.webp",
    description: "While our other ingredients honor South Asian tradition, rosemary is a globally recognized botanical with real clinical research behind it.",
    science: (
      <>
        <span className="block mb-2"><strong className="text-white">How It Works:</strong> In a 2015 clinical study published in the journal Skinmed, rosemary oil performed comparably to Minoxidil 2% — a common hair-regrowth treatment — in men over a 6-month period, with less scalp irritation reported in the rosemary group. This is one of the better-studied natural ingredients in hair care today.</span>
        <span className="block"><strong className="text-white">The Benefit:</strong> A well-researched botanical that supports scalp circulation and has shown real, measurable results in clinical settings — not just tradition, but evidence.</span>
      </>
    )
  }
];

export default function IngredientsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-24">
      
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="gold-line mx-auto mb-6" />
        <h1 className="text-5xl md:text-6xl tracking-[-1.5px] font-serif mb-4">
          Four Ingredients.<br />One Purpose.
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-white/70">
          Each chosen for centuries of South Asian botanical tradition — and each now supported by modern scientific research.
        </p>
      </div>

      {/* Ingredients */}
      <div className="space-y-20">
        {ingredients.map((ingredient, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-x-12 gap-y-8 items-center">
            
            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10">
              <img 
                src={ingredient.image} 
                alt={ingredient.name} 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl tracking-tight font-serif mb-6">{ingredient.name}</h2>
              <p className="text-white/80 mb-6 leading-relaxed">{ingredient.description}</p>
              <div className="text-white/70 text-sm leading-relaxed">{ingredient.science}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Sourcing Statement */}
      <div className="mt-20 pt-12 border-t border-white/10 text-center max-w-2xl mx-auto">
        <p className="text-white/70">
          All ingredients are sourced from verified suppliers. Our mustard oil is wood-pressed in small batches to preserve its full nutritional profile. No refinement.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <Link 
          href="/product" 
          className="btn-gold px-10 py-4 text-base tracking-[2px]"
        >
          EXPERIENCE THE FULL ELIXIR
        </Link>
      </div>

    </div>
  );
}