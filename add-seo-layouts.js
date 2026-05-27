const fs = require('fs');
const path = require('path');

const layouts = {
  'app': {
    title: {
      default: 'ZULF Hair Elixir | Feed Your Roots. Own Your Crown.',
      template: '%s | ZULF Hair Elixir',
    },
    description: 'ZULF Hair Elixir is a concentrated botanical hair oil made with Wood-Pressed Mustard Oil, Fenugreek, Onion, and Rosemary. 100% Halal. Handcrafted in Pakistan.',
    keywords: ['hair oil Pakistan', 'halal hair oil', 'mustard oil for hair', 'hair fall treatment Pakistan', 'ZULF hair elixir'],
    isRoot: true,
  },
  'app/product': {
    title: 'Shop ZULF Hair Elixir — 100ml Botanical Hair Oil',
    description: 'Buy ZULF Hair Elixir — a concentrated botanical hair oil with Wood-Pressed Mustard Oil, Fenugreek, Onion & Rosemary. 100% Halal. Rs. 1,999 + Rs. 250 shipping. Dispatched within 24 hours.',
  },
  'app/cart': {
    title: 'Your Cart — ZULF Hair Elixir',
    description: 'Review your ZULF Hair Elixir order before checkout. Secure payment. Dispatched within 24 hours across Pakistan.',
  },
  'app/checkout': {
    title: 'Checkout — ZULF Hair Elixir',
    description: 'Complete your ZULF Hair Elixir order. Secure checkout. Cash on delivery available across Pakistan.',
  },
};

function makeSegmentLayout(title, description) {
  return `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${title}',
  description: '${description}',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`;
}

function makeRootLayout(meta) {
  return `import type { Metadata } from 'next';
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
    default: '${meta.title.default}',
    template: '${meta.title.template}',
  },
  description: '${meta.description}',
  keywords: ${JSON.stringify(meta.keywords)},
  openGraph: {
    title: '${meta.title.default}',
    description: '${meta.description}',
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
    <html lang="en" className={\`\${inter.variable} \${playfair.variable}\`}>
      <body className="bg-[#0A0A0A] text-white antialiased pt-20">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
`;
}

for (const [folder, meta] of Object.entries(layouts)) {
  if (meta.isRoot) {
    // Update the root layout.tsx
    const filePath = path.join(folder, 'layout.tsx');
    fs.writeFileSync(filePath, makeRootLayout(meta), 'utf8');
    console.log(`✓ Updated root layout: ${filePath}`);
  } else {
    // Create a segment layout.tsx
    const filePath = path.join(folder, 'layout.tsx');
    if (fs.existsSync(filePath)) {
      console.log(`→ Already exists, skipping: ${filePath}`);
      continue;
    }
    fs.writeFileSync(filePath, makeSegmentLayout(meta.title, meta.description), 'utf8');
    console.log(`✓ Created segment layout: ${filePath}`);
  }
}

console.log('\nDone. All client component pages now have metadata via layout.tsx.');
