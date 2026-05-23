import React from 'react';

const faqs = [
  {
    question: "How long until I see results?",
    answer: "Hair grows approximately 1cm per month. Results for reduced hair fall are typically visible from week 3-4 of consistent use. For measurable thickness and density improvement, allow 8-12 weeks of alternate-day use."
  },
  {
    question: "Is ZULF Hair Elixir halal?",
    answer: "Yes. Every ingredient in ZULF Hair Elixir is plant-derived. No animal byproducts. No alcohol. No haram substances of any kind. ZULF was formulated with halal compliance as a non-negotiable standard."
  },
  {
    question: "Can men use ZULF?",
    answer: "Yes. Hair fall affects men and women equally. The formula works on all hair types and scalp conditions regardless of gender."
  },
  {
    question: "How often should I use it?",
    answer: "Alternate days — 3-4 times per week. Daily use is not recommended and will not accelerate results. The scalp needs recovery time between applications."
  },
  {
    question: "Will it make my hair greasy?",
    answer: "Used in the correct quantity (6-8 drops), the oil absorbs well after a 1-hour leave-in and rinses completely with a mild shampoo. If greasiness persists, reduce to 4-6 drops."
  },
  {
    question: "Is it safe for colour-treated hair?",
    answer: "Yes. The formula contains no sulphates, parabens, or chemicals that affect hair colour. It will not strip or alter colour-treated hair."
  },
  {
    question: "Can I use it during pregnancy?",
    answer: "We recommend consulting your healthcare provider before using any topical product during pregnancy, as a precautionary measure."
  },
  {
    question: "What if it causes irritation?",
    answer: "Perform a patch test before full application. If irritation occurs, discontinue use and consult a dermatologist. Our formula is free of known irritants, but individual skin sensitivities vary."
  },
  {
    question: "How do I store ZULF Hair Elixir?",
    answer: "Store in a cool, dark place below 25°C. Keep the dropper cap tightly closed after use. Best within 3 months of opening."
  },
  {
    question: "Can I order outside Pakistan?",
    answer: "Currently, ZULF ships within Pakistan only. International availability will be announced via Instagram and our website."
  }
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-16 pb-24">
      <div className="text-center mb-14">
        <div className="gold-line mx-auto mb-6" />
        <h1 className="text-5xl tracking-[-1px] font-serif">Frequently Asked Questions</h1>
      </div>

      <div className="space-y-10">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3 className="text-xl font-medium tracking-tight mb-3">{faq.question}</h3>
            <p className="text-white/75 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}