import { defineConfig } from 'vite'

let counter = 0

export default defineConfig({
  plugins: [
    {
      name: 'test-plugin',
      transform (code) {
        const c = `${code};${counter++};`
        console.log('code:', c)
        return {
          code: c
        }
      }
    }
  ]
})
