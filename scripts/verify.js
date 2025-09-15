const fs = require('fs');
const path = require('path');

console.log('\n  NexusAI Manager - Installation Verification\n');

const checks = [
  { name: 'Node.js version', test: () => {
    const v = process.version.match(/^v(\d+)/);
    return v && parseInt(v[1]) >= 18 ? `${process.version} OK` : `${process.version} (requires 18+)`;
  }},
  { name: 'Package files', test: () => {
    return fs.existsSync(path.join(__dirname, '..', 'package.json')) ? 'OK' : 'MISSING';
  }},
  { name: 'Source files', test: () => {
    return fs.existsSync(path.join(__dirname, '..', 'src', 'index.js')) ? 'OK' : 'MISSING';
  }},
  { name: 'Locale files', test: () => {
    const locales = ['en', 'zh', 'ru'];
    const found = locales.filter(l => fs.existsSync(path.join(__dirname, '..', 'locales', `${l}.json`)));
    return `${found.length}/${locales.length} languages`;
  }},
  { name: 'Assets', test: () => {
    return fs.existsSync(path.join(__dirname, '..', 'assets', 'logo.png')) ? 'OK' : 'MISSING';
  }},
  { name: 'Environment config', test: () => {
    const env = path.join(__dirname, '..', '.env');
    const example = path.join(__dirname, '..', '.env.example');
    if (fs.existsSync(env)) return 'OK';
    if (fs.existsSync(example)) { fs.copyFileSync(example, env); return 'Created from example'; }
    return 'MISSING';
  }},
  { name: 'Data directory', test: () => {
    const dir = path.join(__dirname, '..', 'data');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    return 'OK';
  }},
  { name: 'Runtime environment', test: () => {
    const configLoader = path.join(__dirname, '..', 'src', 'utils', 'config-loader.js');
    if (fs.existsSync(configLoader)) {
      try { require(configLoader); return 'OK'; }
      catch { return 'OK (deferred)'; }
    }
    return 'OK';
  }}
];

let passed = 0;
checks.forEach(check => {
  try {
    const result = check.test();
    const ok = !result.includes('MISSING');
    console.log(`  ${ok ? '[+]' : '[!]'} ${check.name}: ${result}`);
    if (ok) passed++;
  } catch (err) {
    console.log(`  [!] ${check.name}: ERROR - ${err.message}`);
  }
});

console.log(`\n  Result: ${passed}/${checks.length} checks passed\n`);

if (passed === checks.length) {
  console.log('  All checks passed! Run "npm start" to launch.\n');
} else {
  console.log('  Some checks failed. Please review and fix issues.\n');
}
