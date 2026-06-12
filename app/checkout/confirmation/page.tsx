"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { trackFbEvent } from "../../components/TrackingScripts";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  useEffect(() => {
    trackFbEvent('Purchase', { value: 2299, currency: 'PKR' });
  }, []);

  return (
    <div className="bg-zinc-900/50 p-8 md:p-12 rounded-xl border border-zinc-800 text-center">
      <div className="w-20 h-20 bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>

      <h2 className="text-3xl text-[#C5A46E] font-serif mb-4 uppercase tracking-wider">
        Order Confirmed!
      </h2>

      <p className="text-zinc-300 text-lg mb-8 max-w-md mx-auto">
        Thank you for choosing Zulf. Your order has been received and is being processed.
      </p>

      {orderId && (
        <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 mb-8 max-w-sm mx-auto">
          <p className="text-zinc-500 text-sm mb-1 uppercase tracking-widest">Order Number</p>
          <p className="text-2xl font-bold text-[#C5A46E]">{orderId}</p>
        </div>
      )}

      <div className="space-y-4">
        <p className="text-zinc-400">
          You will receive a confirmation email shortly. We will dispatch your order within 24 hours.
        </p>
        
        <p className="text-zinc-500 text-sm">
          Payment Method: <span className="text-zinc-300 font-semibold">Cash on Delivery</span>
        </p>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/"
          className="bg-zinc-800 text-white hover:bg-zinc-700 font-bold py-3 px-8 rounded-full transition-colors duration-300 uppercase tracking-widest text-sm w-full sm:w-auto text-center"
        >
          Return to Home
        </Link>
        <a
          href="https://wa.me/923104622755"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#C5A46E] text-black hover:bg-white font-bold py-3 px-8 rounded-full transition-colors duration-300 uppercase tracking-widest text-sm w-full sm:w-auto text-center"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <Suspense fallback={<div className="text-center text-[#C5A46E]">Loading confirmation...</div>}>
          <ConfirmationContent />
        </Suspense>
      </div>
    </div>
  );
}
