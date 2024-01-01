import * as vite from 'vite'
import './src/inner.js'

const server = await vite.createServer({
  appType: 'custom',
  server: {
    middlewareMode: true
  }
})

{
  const m = await server.ssrLoadModule('./src/bar.ts')
  console.log('m', m.default())
}
{
  const m = await server.ssrLoadModule('./src/foo.ts')
  console.log('m', m.default())
}
