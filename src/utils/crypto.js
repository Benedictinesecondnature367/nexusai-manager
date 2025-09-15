const crypto = require('crypto');

const ALGORITHM = 'aes-256-cbc';

function encrypt(text, password) {
  const key = crypto.scryptSync(password, 'nexusai-salt', 32);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
  const encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
  return iv.toString('hex') + ':' + encrypted;
}

function decrypt(data, password) {
  const key = crypto.scryptSync(password, 'nexusai-salt', 32);
  const [ivHex, encrypted] = data.split(':');
  const iv = Buffer.from(ivHex, 'hex');
  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
  return decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');
}

function generateKey() {
  return crypto.randomBytes(32).toString('hex');
}

module.exports = { encrypt, decrypt, generateKey };
