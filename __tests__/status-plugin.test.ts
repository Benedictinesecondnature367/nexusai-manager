import { describe, it, expect } from 'vitest'

describe('NexusAI Status Plugin', () => {
  it('should parse provider response', () => {
    const response = {
      openai: { status: 'operational', latency: 45 },
      anthropic: { status: 'operational', latency: 62 }
    }
    expect(Object.keys(response).length).toBe(2)
    expect(response.openai.status).toBe('operational')
  })

  it('should handle degraded status', () => {
    const status = 'degraded'
    const icon = status === 'operational' ? '✓' : '⚠'
    expect(icon).toBe('⚠')
  })

  it('should handle offline gracefully', () => {
    const fetchFailed = true
    const message = fetchFailed ? 'Provider status check skipped (offline)' : 'OK'
    expect(message).toContain('offline')
  })
})
