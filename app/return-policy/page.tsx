import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Return & Refund Policy — ZULF',
  description: 'Read the return and refund policy for ZULF Hair Elixir.',
};

import React from 'react';

export default function ReturnPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-16 pb-24">
      <div className="text-center mb-14">
        <div className="gold-line mx-auto mb-6" />
        <h1 className="text-5xl tracking-[-1px] font-serif">Return & Refund Policy</h1>
      </div>

      <div className="space-y-10 text-white/75 leading-relaxed">
        <p>
          At Zulf Hair, we are committed to providing you with the highest quality hair care. We want you to love your purchase, but we also understand that sometimes things don't work out. Our return policy is designed to be fair, simple, and transparent.
        </p>

        <div>
          <h3 className="text-xl font-medium tracking-tight mb-3 text-white">1. The 14-Day Return Window</h3>
          <p>
            If you change your mind about your purchase, you may return it within <strong>14 days</strong> of receiving your delivery.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium tracking-tight mb-3 text-white">2. Condition of Return</h3>
          <p className="mb-2">
            To protect the health and safety of all our customers, we can only accept returns for items that are <strong>unopened, unused, and in their original packaging</strong>.
          </p>
          <p className="italic text-white/50">
            *Because hair care products are personal hygiene items, we unfortunately cannot accept returns or exchanges for any product that has been opened or used.*
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium tracking-tight mb-3 text-white">3. Damaged or Incorrect Orders (Our Guarantee)</h3>
          <p>
            If your order arrives damaged, leaking, or if you receive the wrong item, please do not worry—we will make it right at our expense. 
            Simply contact us within <strong>48 hours</strong> of receiving your package with a photo of the issue. We will immediately arrange for a free replacement or a full refund, and cover all return shipping costs.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium tracking-tight mb-3 text-white">4. How to Initiate a Return</h3>
          <p className="mb-2">
            To start a return or report an issue, please reach out to our support team. We will guide you through the process step-by-step:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li><strong>Email:</strong> hello@zulfhair.com</li>
            <li><strong>WhatsApp / Phone:</strong> +92 310 462 2755</li>
          </ul>
          <p className="italic text-white/50">
            *Please mention your Order Number when contacting us.*
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium tracking-tight mb-3 text-white">5. Refunds & Return Shipping</h3>
          <p className="mb-2">
            For standard "change of mind" returns, the customer is responsible for the return shipping costs. 
            Once we receive and verify your unopened return at our warehouse, your refund will be processed within <strong>3 to 5 business days</strong>.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>For Cash on Delivery (COD) orders, refunds will be securely transferred to your provided Bank Account, EasyPaisa, or JazzCash account.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-medium tracking-tight mb-3 text-white">6. Order Cancellations</h3>
          <p>
            Orders can be cancelled at any time before they are dispatched. Once an order has been handed over to our courier partner (marked as "Shipped"), it cannot be cancelled and must be processed as a standard return upon delivery.
          </p>
        </div>
      </div>
    </div>
  );
}
