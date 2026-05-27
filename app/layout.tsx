import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: {
    default: 'ZULF Hair Elixir | Feed Your Roots. Own Your Crown.',
    template: '%s | ZULF Hair Elixir',
  },
  description: 'ZULF Hair Elixir is a concentrated botanical hair oil made with Wood-Pressed Mustard Oil, Fenugreek, Onion, and Rosemary. 100% Halal. Handcrafted in Pakistan.',
  keywords: ["hair oil Pakistan","halal hair oil","mustard oil for hair","hair fall treatment Pakistan","ZULF hair elixir"],
  openGraph: {
    title: 'ZULF Hair Elixir | Feed Your Roots. Own Your Crown.',
    description: 'ZULF Hair Elixir is a concentrated botanical hair oil made with Wood-Pressed Mustard Oil, Fenugreek, Onion, and Rosemary. 100% Halal. Handcrafted in Pakistan.',
    url: 'https://www.zulfhair.com',
    siteName: 'ZULF Hair Elixir',
    locale: 'en_PK',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#0A0A0A] text-white antialiased pt-20">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
