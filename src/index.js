const path = require('path');
const fs = require('fs');

const KeyManager = require('./core/key-manager');
const ProxyRotator = require('./core/proxy-rotator');
const Benchmark = require('./core/benchmark');
const Dashboard = require('./components/dashboard');
const { loadLocale } = require('./utils/logger');

const CONFIG_PATH = path.join(__dirname, '..', '.env');
const DEFAULT_PORT = 3847;

async function main() {
  const lang = process.env.LANGUAGE || 'en';
  const locale = loadLocale(lang);

  console.log(`\n  ${locale.messages.welcome}`);
  console.log(`  ${locale.app.description}\n`);

  const keyManager = new KeyManager();
  const proxyRotator = new ProxyRotator();
  const benchmark = new Benchmark();

  await keyManager.initialize();
  await proxyRotator.initialize();

  const port = process.env.PORT || DEFAULT_PORT;
  const dashboard = new Dashboard({ port, keyManager, proxyRotator, benchmark, locale });

  await dashboard.start();

  console.log(`  ${locale.menu.dashboard}: http://localhost:${port}`);
  console.log(`  ${locale.app.version}\n`);
}

if (!fs.existsSync(CONFIG_PATH)) {
  const example = path.join(__dirname, '..', '.env.example');
  if (fs.existsSync(example)) {
    fs.copyFileSync(example, CONFIG_PATH);
  }
}

try { require('dotenv').config({ path: CONFIG_PATH }); } catch {}

main().catch(err => {
  console.error('Failed to start:', err.message);
  process.exit(1);
});
