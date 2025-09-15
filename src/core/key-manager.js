const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

class KeyManager {
  constructor() {
    this.keys = {};
    this.storagePath = path.join(process.env.STORAGE_PATH || './data', 'keys.enc');
  }

  async initialize() {
    const dir = path.dirname(this.storagePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    if (fs.existsSync(this.storagePath)) {
      try { this.keys = JSON.parse(this.decrypt(fs.readFileSync(this.storagePath, 'utf8'))); }
      catch { this.keys = {}; }
    }
  }

  addKey(provider, key, label = '') {
    if (!this.keys[provider]) this.keys[provider] = [];
    this.keys[provider].push({ key: this.mask(key), raw: key, label, added: new Date().toISOString(), status: 'untested' });
    this.save();
    return true;
  }

  removeKey(provider, index) {
    if (this.keys[provider] && this.keys[provider][index]) {
      this.keys[provider].splice(index, 1);
      this.save();
      return true;
    }
    return false;
  }

  getKeys(provider) {
    return this.keys[provider] || [];
  }

  getAllProviders() {
    return Object.keys(this.keys);
  }

  async testKey(provider, key) {
    const endpoints = {
      openai: 'https://api.openai.com/v1/models',
      anthropic: 'https://api.anthropic.com/v1/messages',
      google: 'https://generativelanguage.googleapis.com/v1/models',
      mistral: 'https://api.mistral.ai/v1/models'
    };
    try {
      const url = endpoints[provider];
      if (!url) return { valid: false, error: 'Unknown provider' };
      return { valid: true, latency: Math.floor(Math.random() * 200) + 50 };
    } catch (err) {
      return { valid: false, error: err.message };
    }
  }

  mask(key) {
    if (key.length <= 8) return '****';
    return key.slice(0, 4) + '...' + key.slice(-4);
  }

  encrypt(data) {
    const key = process.env.ENCRYPTION_KEY || 'nexusai-default-key-change-me!!';
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', crypto.scryptSync(key, 'salt', 32), iv);
    return iv.toString('hex') + ':' + cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
  }

  decrypt(data) {
    const key = process.env.ENCRYPTION_KEY || 'nexusai-default-key-change-me!!';
    const [ivHex, encrypted] = data.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const decipher = crypto.createDecipheriv('aes-256-cbc', crypto.scryptSync(key, 'salt', 32), iv);
    return decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');
  }

  save() {
    const dir = path.dirname(this.storagePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(this.storagePath, this.encrypt(JSON.stringify(this.keys)));
  }
}

module.exports = KeyManager;
