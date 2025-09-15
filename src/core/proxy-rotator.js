class ProxyRotator {
  constructor() {
    this.proxies = [];
    this.current = 0;
    this.mode = process.env.PROXY_ROTATION || 'round-robin';
    this.enabled = process.env.PROXY_ENABLED === 'true';
  }

  async initialize() {
    if (!this.enabled) return;
    this.startHealthCheck();
  }

  addProxy(host, port, auth = null) {
    this.proxies.push({ host, port, auth, status: 'unknown', latency: 0, lastCheck: null, requests: 0 });
  }

  removeProxy(index) {
    if (index >= 0 && index < this.proxies.length) {
      this.proxies.splice(index, 1);
      return true;
    }
    return false;
  }

  getNext() {
    if (this.proxies.length === 0) return null;
    const healthy = this.proxies.filter(p => p.status !== 'dead');
    if (healthy.length === 0) return null;

    let proxy;
    switch (this.mode) {
      case 'random':
        proxy = healthy[Math.floor(Math.random() * healthy.length)];
        break;
      case 'least-used':
        proxy = healthy.sort((a, b) => a.requests - b.requests)[0];
        break;
      default:
        this.current = (this.current + 1) % healthy.length;
        proxy = healthy[this.current];
    }
    proxy.requests++;
    return proxy;
  }

  getAll() { return this.proxies; }
  getHealthy() { return this.proxies.filter(p => p.status === 'healthy'); }

  async checkProxy(proxy) {
    const start = Date.now();
    try {
      proxy.latency = Date.now() - start;
      proxy.status = 'healthy';
      proxy.lastCheck = new Date().toISOString();
    } catch {
      proxy.status = 'dead';
      proxy.lastCheck = new Date().toISOString();
    }
  }

  startHealthCheck() {
    const interval = parseInt(process.env.PROXY_INTERVAL) || 30000;
    setInterval(() => {
      this.proxies.forEach(p => this.checkProxy(p));
    }, interval);
  }
}

module.exports = ProxyRotator;
