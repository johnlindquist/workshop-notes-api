import { describe, it, expect } from 'vitest'
import app from './index'

describe('GET /', () => {
    it('should return "Hello Hono!"', async () => {
        const req = new Request('http://localhost/')
        const response = await app.fetch(req)
        const text = await response.text()
        expect(text).toBe('Hello Hono!')
    })
}) 