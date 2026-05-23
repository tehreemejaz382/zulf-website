'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl tracking-[4px] font-serif text-[#C5A46E]">
          ZULF
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-x-10 text-sm tracking-[2px]">
          <Link href="/product" className="hover:text-[#C5A46E] transition-colors">SHOP</Link>
          <Link href="/our-story" className="hover:text-[#C5A46E] transition-colors">OUR STORY</Link>
          <Link href="/ingredients" className="hover:text-[#C5A46E] transition-colors">INGREDIENTS</Link>
          <Link href="/ritual" className="hover:text-[#C5A46E] transition-colors">THE RITUAL</Link>
        </div>

        {/* Cart Icon */}
        <div className="flex items-center gap-x-4">
          <Link href="/cart" className="text-sm tracking-[2px] hover:text-[#C5A46E] transition-colors">
            CART (0)
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white"
          >
            {isOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-white/10 px-6 py-8 text-sm tracking-[2px]">
          <div className="flex flex-col gap-y-6">
            <Link href="/product" onClick={() => setIsOpen(false)}>SHOP</Link>
            <Link href="/our-story" onClick={() => setIsOpen(false)}>OUR STORY</Link>
            <Link href="/ingredients" onClick={() => setIsOpen(false)}>INGREDIENTS</Link>
            <Link href="/ritual" onClick={() => setIsOpen(false)}>THE RITUAL</Link>
            <Link href="/cart" onClick={() => setIsOpen(false)}>CART</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;