import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Logo + Tagline */}
        <div className="text-center mb-10">
          <div className="text-2xl tracking-[4px] font-serif text-[#C5A46E] mb-2">ZULF</div>
          <p className="text-[#C5A46E] tracking-widest text-sm">FEED YOUR ROOTS. OWN YOUR CROWN.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm tracking-[1.5px] mb-10 text-white/80">
          <Link href="/product">Shop</Link>
          <Link href="/our-story">Our Story</Link>
          <Link href="/ingredients">Ingredients</Link>
          <Link href="/ritual">The Ritual</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Contact & Social */}
        <div className="text-center text-sm text-white/60 mb-8 space-y-1">
          <p>www.zulfhair.com &nbsp;&nbsp;|&nbsp;&nbsp; +92 310 462 2755</p>
          <div className="flex justify-center gap-x-6 pt-2">
            <a href="https://instagram.com" target="_blank" className="hover:text-white">Instagram</a>
            <a href="https://wa.me/923104622755" target="_blank" className="hover:text-white">WhatsApp</a>
          </div>
        </div>

        {/* Legal */}
        <div className="text-center text-xs text-white/40 tracking-widest">
          © {new Date().getFullYear()} ZULF. All rights reserved. Made in Pakistan.
        </div>
      </div>
    </footer>
  );
};

export default Footer;