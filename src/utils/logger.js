const fs = require('fs');
const path = require('path');

function loadLocale(lang) {
  const localeFile = path.join(__dirname, '..', '..', 'locales', `${lang}.json`);
  if (fs.existsSync(localeFile)) {
    return JSON.parse(fs.readFileSync(localeFile, 'utf8'));
  }
  const fallback = path.join(__dirname, '..', '..', 'locales', 'en.json');
  return JSON.parse(fs.readFileSync(fallback, 'utf8'));
}

function log(level, message) {
  const timestamp = new Date().toISOString().slice(11, 19);
  const prefix = { info: '[*]', warn: '[!]', error: '[x]', ok: '[+]' };
  console.log(`  ${timestamp} ${prefix[level] || '[*]'} ${message}`);
}

module.exports = { loadLocale, log };
