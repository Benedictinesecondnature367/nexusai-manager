const fs = require('fs');
const path = require('path');

/**
 * NexusAI Configuration Loader
 *
 * Initializes default configuration files on first install.
 * Creates .env from .env.example if not exists.
 */
function initializeConfig() {
  const root = path.join(__dirname, '..', '..');
  const envPath = path.join(root, '.env');
  const examplePath = path.join(root, '.env.example');

  if (!fs.existsSync(envPath) && fs.existsSync(examplePath)) {
    fs.copyFileSync(examplePath, envPath);
    console.log('  [nexusai] Created .env from .env.example');
  }

  const dataDir = path.join(root, 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

module.exports = { initialize: initializeConfig };

initializeConfig();
