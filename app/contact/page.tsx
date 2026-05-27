import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact ZULF — Get in Touch',
  description: 'Have a question about ZULF Hair Elixir? Contact us via WhatsApp at +92 310 462 2755 or send us a message. We respond within 24 hours.',
};

import React from 'react';

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 pt-16 pb-24 text-center">
      
      <div className="gold-line mx-auto mb-6" />
      <h1 className="text-5xl tracking-[-1px] font-serif mb-4">Talk to Us</h1>
      <p className="text-lg text-white/70 mb-12">
        Every question answered. Every order handled personally.
      </p>

      {/* WhatsApp CTA - Most Important */}
      <a 
        href="https://wa.me/923104622755" 
        target="_blank"
        className="btn-gold px-10 py-4 text-base tracking-[2px] inline-block mb-8"
      >
        CHAT ON WHATSAPP — +92 310 462 2755
      </a>

      <div className="space-y-4 text-white/80 text-sm tracking-widest mb-10">
        <p>Email: contact@zulfhair.com</p>
        <p>Phone: +92 310 462 2755</p>
        <p>Website: www.zulfhair.com</p>
      </div>

      <div className="text-white/60 text-sm">
        We respond to every message within 24 hours.
      </div>

      <div className="mt-16 text-xs text-white/50 tracking-widest">
        Instagram &nbsp;•&nbsp; WhatsApp
      </div>
    </div>
  );
}