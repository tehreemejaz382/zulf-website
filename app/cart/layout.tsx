import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Cart — ZULF Hair Elixir',
  description: 'Review your ZULF Hair Elixir order before checkout. Secure payment. Dispatched within 24 hours across Pakistan.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
