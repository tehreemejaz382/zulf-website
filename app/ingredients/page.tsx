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
        <span className="block mb-2"><strong className="text-white">Nutritional Profile:</strong> Exceptionally rich in Omega-3 and Omega-6 fatty acids, which are essential lipids for scalp barrier repair, alongside Zinc and Beta-carotene.</span>
        <span className="block mb-2"><strong className="text-white">The Biological Mechanism:</strong> Mustard oil contains a potent organic compound called Allyl Isothiocyanate (AITC). When massaged into the scalp, AITC acts as a natural rubefacient—it creates a mild, warming sensation that triggers vasodilation (the widening of blood vessels). This drastically increases microcirculation, flooding starved hair follicles with the oxygen and nutrient-rich blood required to prolong the anagen (growth) phase.</span>
        <span className="block"><strong className="text-white">The Benefit:</strong> It warms the scalp and pumps fresh blood, oxygen, and nutrients straight to your hair roots to wake them up and keep them growing longer.</span>
      </>
    )
  },
  {
    name: "Fenugreek",
    image: "/images/ingredients/fenugreek.webp",
    description: "A powerful South Asian botanical heavily researched for its ability to target the hormonal and structural causes of hair thinning.",
    science: (
      <>
        <span className="block mb-2"><strong className="text-white">Nutritional Profile:</strong> Composed of roughly 25% protein and rich in Lecithin, a natural emollient that hydrates the scalp and smooths the hair cuticle to prevent mechanical breakage.</span>
        <span className="block mb-2"><strong className="text-white">The Biological Mechanism:</strong> Fenugreek seeds contain steroidal saponins, most notably Diosgenin. Diosgenin exhibits phytoestrogenic properties that are theorized to act as natural blockers against DHT (dihydrotestosterone)—the primary hormone responsible for follicle miniaturization. Furthermore, the high concentration of Nicotinic Acid (Vitamin B3) works at a cellular level to reconstruct the hair shaft and soothe scalp inflammation.</span>
        <span className="block"><strong className="text-white">The Benefit:</strong> It defends your hair against the hormones that cause baldness and thinning, while simultaneously rebuilding weak, lifeless strands and calming an itchy, irritated scalp.</span>
      </>
    )
  },
  {
    name: "Onion",
    image: "/images/ingredients/onion.webp",
    description: "Far more than a traditional remedy, onion extract is a highly concentrated delivery system for structural proteins and enzymes critical to follicle survival.",
    science: (
      <>
        <span className="block mb-2"><strong className="text-white">Nutritional Profile:</strong> Dense in Dietary Sulfur (the building block of keratin) and Quercetin, a formidable flavonoid antioxidant that neutralizes environmental oxidative stress.</span>
        <span className="block mb-2"><strong className="text-white">The Biological Mechanism:</strong> As hair follicles age, they naturally accumulate hydrogen peroxide, which bleaches the hair from the inside out and damages the root. Onion extract delivers an intense dose of Catalase, an antioxidant enzyme that actively breaks down this hydrogen peroxide into harmless water and oxygen. Simultaneously, the dietary sulfur forms strong disulfide bonds, directly reinforcing the structural elasticity of the hair shaft.</span>
        <span className="block"><strong className="text-white">The Benefit:</strong> It acts as an anti-aging shield for your hair follicles, stopping them from dying off early, while giving your hair the literal structural building blocks it needs to stop snapping and breaking.</span>
      </>
    )
  },
  {
    name: "Rosemary",
    image: "/images/ingredients/rosemary.webp",
    description: "While our other ingredients honor eastern traditions, Rosemary is a globally recognized botanical champion, proven in clinical settings to rival synthetic hair growth treatments.",
    science: (
      <>
        <span className="block mb-2"><strong className="text-white">Nutritional Profile:</strong> Packed with anti-inflammatory polyphenols and volatile oils like 1,8-cineole.</span>
        <span className="block mb-2"><strong className="text-white">The Biological Mechanism:</strong> The therapeutic power of rosemary lies in Carnosic Acid and Ursolic Acid. Research indicates that Carnosic acid can inhibit 5-alpha reductase, the enzyme that converts testosterone into hair-thinning DHT. Furthermore, it has been shown to promote the production of Nerve Growth Factor (NGF), which revitalizes the nerve endings around the hair bulb, improving cellular generation and overall density.</span>
        <span className="block"><strong className="text-white">The Benefit:</strong> It blocks the specific enzymes that cause hair loss and revitalizes the deadened nerves in your scalp, making it one of nature's most powerful, proven ingredients for thick, dense hair growth.</span>
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