const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'data', 'cast-members');
const outputFile = path.join(__dirname, '..', 'data', 'cast.json');

const items = fs.readdirSync(sourceDir)
  .filter((file) => file.endsWith('.json'))
  .map((file) => JSON.parse(fs.readFileSync(path.join(sourceDir, file), 'utf8')))
  .sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999) || a.name.localeCompare(b.name));

fs.writeFileSync(outputFile, JSON.stringify(items, null, 2) + '\n');
console.log(`Wrote ${items.length} cast records to ${outputFile}`);
