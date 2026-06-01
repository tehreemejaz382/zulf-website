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
let totalChanges = 0;

for (const file of files) {
  const original = fs.readFileSync(file, 'utf8');
  let updated = original;

  // Fix 1: Remove "No heat treatment." from the sentence
  updated = updated.replace(/No heat treatment\.\s*/g, '');

  // Fix 2: Change shipping from 250 to 300
  updated = updated.replace(/250/g, '300');

  if (original !== updated) {
    fs.writeFileSync(file, updated, 'utf8');
    console.log(`✓ Updated: ${file}`);
    totalChanges++;
  }
}

console.log(`\nDone. ${totalChanges} file(s) updated.`);
