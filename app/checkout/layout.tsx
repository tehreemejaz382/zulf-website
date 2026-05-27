import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Checkout — ZULF Hair Elixir',
  description: 'Complete your ZULF Hair Elixir order. Secure checkout. Cash on delivery available across Pakistan.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
