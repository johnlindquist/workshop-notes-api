import { describe, it, expect } from 'vitest'
import app from './index'

describe('GET /', () => {
    it('should return "Hello Hono!"', async () => {
        const response = await app.fetch('http://localhost/')
        const text = await response.text()
        expect(text).toBe('Hello Hono!')
    })
}) 