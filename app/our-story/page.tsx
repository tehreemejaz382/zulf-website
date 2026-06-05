import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story — Why ZULF Was Created',
  description: 'ZULF was born from a desire to bring luxury, halal-certified hair care to Pakistan. Discover the story behind the elixir and the vision of Feed Your Roots. Own Your Crown.',
};

import React from 'react';
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