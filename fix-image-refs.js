const fs = require('fs');
const path = require('path');

const extensions = ['.tsx', '.ts', '.js', '.jsx'];

function walk(dir) {
  let files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(walk(full));
    } else if (extensions.includes(path.extname(entry.name))) {
      files.push(full);
    }
  }
  return files;
}

const files = walk('app');
let totalReplaced = 0;

for (const file of files) {
  const original = fs.readFileSync(file, 'utf8');
  // Only replace .png that are inside /images/ paths
  const updated = original.replace(/\/images\/([^"'\s]+)\.png/g, '/images/$1.webp');

  if (original !== updated) {
    fs.writeFileSync(file, updated, 'utf8');
    const count = (original.match(/\/images\/([^"'\s]+)\.png/g) || []).length;
    totalReplaced += count;
    console.log(`✓ ${file} — ${count} reference(s) updated`);
  }
}

console.log(`\nDone. ${totalReplaced} total PNG references replaced with WebP.`);
