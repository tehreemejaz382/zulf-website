import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop ZULF Hair Elixir — 100ml Botanical Hair Oil',
  description: 'Buy ZULF Hair Elixir — a concentrated botanical hair oil with Wood-Pressed Mustard Oil, Fenugreek, Onion & Rosemary. 100% Halal. Rs. 1,999 + Rs. 250 shipping. Dispatched within 24 hours.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
