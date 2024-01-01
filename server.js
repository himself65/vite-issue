import * as vite from 'vite'
import 'fake-package'

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
{
  const m = await server.ssrLoadModule('./fake-package/index.js')
  console.log('m', m.default())
}

await server.close()
