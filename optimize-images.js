const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const folders = [
  'public/images/homepage',
  'public/images/ingredients',
  'public/images/product'
];

async function optimizeImage(filePath) {
  const dir = path.dirname(filePath);
  const ext = path.extname(filePath).toLowerCase();
  const base = path.basename(filePath, ext);
  const outputPath = path.join(dir, base + '.webp');

  const before = fs.statSync(filePath).size;

  await sharp(filePath)
    .webp({ quality: 80 })
    .toFile(outputPath);

  const after = fs.statSync(outputPath).size;
  const saved = ((before - after) / before * 100).toFixed(1);

  console.log(`✓ ${base}${ext} → ${base}.webp | ${(before/1024/1024).toFixed(2)}MB → ${(after/1024/1024).toFixed(2)}MB (${saved}% smaller)`);

  // Delete original PNG
  fs.unlinkSync(filePath);
}

async function main() {
  console.log('Starting image optimization...\n');

  for (const folder of folders) {
    if (!fs.existsSync(folder)) {
      console.log(`Skipping ${folder} — not found`);
      continue;
    }

    const files = fs.readdirSync(folder).filter(f => /\.(png|jpg|jpeg)$/i.test(f));

    for (const file of files) {
      await optimizeImage(path.join(folder, file));
    }
  }

  console.log('\nAll images optimized. Original PNGs deleted.');
}

main().catch(console.error);
