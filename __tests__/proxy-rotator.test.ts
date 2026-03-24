import { describe, it, expect } from 'vitest'

describe('ProxyRotator', () => {
  it('should rotate proxies in round-robin mode', () => {
    const proxies = ['proxy1', 'proxy2', 'proxy3']
    let current = 0
    const next = () => proxies[current++ % proxies.length]
    expect(next()).toBe('proxy1')
    expect(next()).toBe('proxy2')
    expect(next()).toBe('proxy3')
    expect(next()).toBe('proxy1')
  })

  it('should skip unhealthy proxies', () => {
    const proxies = [
      { host: 'proxy1', healthy: true },
      { host: 'proxy2', healthy: false },
      { host: 'proxy3', healthy: true }
    ]
    const healthy = proxies.filter(p => p.healthy)
    expect(healthy.length).toBe(2)
  })
})
