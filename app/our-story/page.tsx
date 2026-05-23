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
          Zulf is an Urdu word. It means a lock of hair. Something precious. Something personal. Something worth protecting.
        </p>

        <p>
          In Pakistan, hair fall affects a significant number of women and men. For one woman, the search for a solution led back to what generations before her had always trusted: four simple ingredients rooted in South Asian tradition — wood-pressed mustard oil, fenugreek, onion, and rosemary.
        </p>

        <p>
          She prepared the recipe with care. It worked. Her hair fall reduced. Her scalp felt calmer. Her strands grew stronger.
        </p>

        <p>
          That recipe became the foundation of ZULF.
        </p>

        <p>
          We did not create something new. We took what had always worked and gave it the precision, the packaging, and the intentionality it deserved. A measured dropper. UV-protective glass. Wood-pressed oil to preserve every nutrient. Every decision was made to honour the ingredients and the ritual of care.
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
          “We gave Pakistan’s most trusted hair ingredients the packaging they always deserved.”
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