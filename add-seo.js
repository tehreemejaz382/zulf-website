const fs = require('fs');
const path = require('path');

const pages = {
  'app/page.tsx': {
    title: 'ZULF Hair Elixir | Premium Halal Hair Oil — Pakistan',
    description: 'Feed Your Roots. Own Your Crown. ZULF Hair Elixir is a luxury botanical hair oil made with Wood-Pressed Mustard Oil, Fenugreek, Onion & Rosemary. Rs. 1,999. Free delivery across Pakistan.',
  },
  'app/product/page.tsx': {
    title: 'Shop ZULF Hair Elixir — 100ml Botanical Hair Oil',
    description: 'Buy ZULF Hair Elixir — a concentrated botanical hair oil with Wood-Pressed Mustard Oil, Fenugreek, Onion & Rosemary. 100% Halal. Rs. 1,999 + Rs. 250 shipping. Dispatched within 24 hours.',
  },
  'app/ingredients/page.tsx': {
    title: 'Ingredients — The Science Behind ZULF Hair Elixir',
    description: 'Discover the four powerful botanicals in ZULF Hair Elixir: Wood-Pressed Mustard Oil, Fenugreek, Onion, and Rosemary — each chosen for proven hair growth and scalp health benefits.',
  },
  'app/ritual/page.tsx': {
    title: 'The Ritual — How to Use ZULF Hair Elixir',
    description: 'Learn the ZULF hair care ritual. A step-by-step guide to applying ZULF Hair Elixir for maximum absorption and results. Turn your hair care into a daily ceremony.',
  },
  'app/our-story/page.tsx': {
    title: 'Our Story — Why ZULF Was Created',
    description: 'ZULF was born from a desire to bring luxury, halal-certified hair care to Pakistan. Discover the story behind the elixir and the vision of Feed Your Roots. Own Your Crown.',
  },
  'app/faq/page.tsx': {
    title: 'FAQ — Common Questions About ZULF Hair Elixir',
    description: 'Find answers to common questions about ZULF Hair Elixir — ingredients, halal certification, shipping, returns, how to use, and results timeline.',
  },
  'app/contact/page.tsx': {
    title: 'Contact ZULF — Get in Touch',
    description: 'Have a question about ZULF Hair Elixir? Contact us via WhatsApp at +92 310 462 2755 or send us a message. We respond within 24 hours.',
  },
  'app/cart/page.tsx': {
    title: 'Your Cart — ZULF Hair Elixir',
    description: 'Review your ZULF Hair Elixir order before checkout. Secure payment. Dispatched within 24 hours across Pakistan.',
  },
  'app/checkout/page.tsx': {
    title: 'Checkout — ZULF Hair Elixir',
    description: 'Complete your ZULF Hair Elixir order. Secure checkout. Cash on delivery available across Pakistan.',
  },
  'app/order-confirmation/page.tsx': {
    title: 'Order Confirmed — ZULF Hair Elixir',
    description: 'Your ZULF Hair Elixir order has been confirmed. We will dispatch within 24 hours. Thank you for choosing ZULF.',
  },
};

const metadataBlock = (title, description) =>
  `import type { Metadata } from 'next';\n\nexport const metadata: Metadata = {\n  title: '${title}',\n  description: '${description}',\n};\n\n`;

let updated = 0;
let skipped = 0;

for (const [filePath, { title, description }] of Object.entries(pages)) {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠ Skipped (not found): ${filePath}`);
    skipped++;
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if metadata already exists
  if (content.includes('export const metadata')) {
    console.log(`→ Already has metadata: ${filePath}`);
    skipped++;
    continue;
  }

  // Check if Metadata is already imported
  const hasMetadataImport = content.includes("from 'next'") && content.includes('Metadata');

  // Remove any existing next import to replace cleanly
  let cleanContent = content;

  if (hasMetadataImport) {
    // Just inject metadata export after the existing import block
    cleanContent = content.replace(
      /^('use client';\n)?/,
      (match) => match + `\nexport const metadata: Metadata = {\n  title: '${title}',\n  description: '${description}',\n};\n\n`
    );
  } else {
    // Add full import + metadata at the top (but after 'use client' if present)
    if (content.startsWith("'use client'")) {
      cleanContent = content.replace(
        "'use client';",
        `'use client';\n\n// Note: metadata must be in a server component - move to a layout.tsx if needed`
      );
      console.log(`⚠ Client component — metadata skipped for: ${filePath}`);
      skipped++;
      continue;
    } else {
      cleanContent = metadataBlock(title, description) + content;
    }
  }

  fs.writeFileSync(filePath, cleanContent, 'utf8');
  console.log(`✓ ${filePath}`);
  updated++;
}

console.log(`\nDone. ${updated} pages updated, ${skipped} skipped.`);
