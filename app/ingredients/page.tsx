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
    description: "Extracted through traditional wood-pressing (Kachi Ghani) to preserve its natural nutrients, antioxidants, and fatty acids. Used for centuries in South Asia for scalp nourishment and hair strength.",
    science: "Rich in omega-3 and omega-6 fatty acids. Traditionally believed to improve blood circulation to the scalp and support hair follicle health."
  },
  {
    name: "Fenugreek (Methi)",
    image: "/images/ingredients/fenugreek.webp",
    description: "Fenugreek seeds have been used for generations in South Asian hair rituals. Rich in proteins, lecithin, and nicotinic acid.",
    science: "Studies suggest fenugreek may help improve hair thickness and reduce hair fall. A 2006 clinical study observed favorable effects on hair growth in participants using fenugreek-based supplements."
  },
  {
    name: "Onion (Pyaaz)",
    image: "/images/ingredients/onion.webp",
    description: "Onion has long been used in traditional hair remedies across South Asia. Contains natural sulfur compounds and quercetin.",
    science: "Sulfur is essential for keratin production. Traditional use and some studies suggest onion may support scalp health and hair growth, particularly in cases of patchy hair loss."
  },
  {
    name: "Rosemary",
    image: "/images/ingredients/rosemary.webp",
    description: "A powerful aromatic herb with a long history of use in hair and scalp care. Known for its antioxidant and soothing properties.",
    science: "A 2015 randomized study published in Skinmed found rosemary oil to be comparable to 2% minoxidil in promoting hair growth over six months, with fewer side effects reported."
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
              <p className="text-white/70 text-sm leading-relaxed">{ingredient.science}</p>
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