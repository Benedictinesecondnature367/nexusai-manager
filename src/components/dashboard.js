class Dashboard {
  constructor({ port, keyManager, proxyRotator, benchmark, locale }) {
    this.port = port;
    this.keyManager = keyManager;
    this.proxyRotator = proxyRotator;
    this.benchmark = benchmark;
    this.locale = locale;
  }

  async start() {
    try {
      const express = require('express');
      const app = express();
      app.use(express.json());

      app.get('/', (req, res) => {
        res.json({
          name: this.locale.app.name,
          version: this.locale.app.version,
          status: 'running',
          providers: this.keyManager.getAllProviders(),
          proxies: this.proxyRotator.getAll().length,
          benchmarks: this.benchmark.getResults().length
        });
      });

      app.get('/api/keys', (req, res) => {
        const providers = this.keyManager.getAllProviders();
        const result = {};
        providers.forEach(p => { result[p] = this.keyManager.getKeys(p); });
        res.json(result);
      });

      app.get('/api/proxies', (req, res) => {
        res.json(this.proxyRotator.getAll());
      });

      app.get('/api/benchmark', (req, res) => {
        res.json(this.benchmark.getResults());
      });

      app.listen(this.port);
    } catch {
      console.log(`  Dashboard available at http://localhost:${this.port} (install express for web UI)`);
    }
  }
}

module.exports = Dashboard;
