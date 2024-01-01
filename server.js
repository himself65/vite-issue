import * as vite from 'vite'
import 'fake-package'
import path from 'node:path'

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
  const m = await server.ssrLoadModule('fake-package')
  console.log('m', m.default())
}
{
  const m = await server.ssrLoadModule('./packages/fake-package')
  console.log('m', m.default())
}
{
  const m = await server.ssrLoadModule(path.resolve('./packages/fake-package'))
  console.log('m', m.default())
}
{
  const m = await server.ssrLoadModule(path.resolve('./packages/fake-package/index.js'))
  console.log('m', m.default())
}
{
  const m = await server.ssrLoadModule(path.resolve('./node_modules/fake-package'))
  console.log('m', m.default())
}
{
  const m = await server.ssrLoadModule(path.resolve('./node_modules/fake-package/index.js'))
  console.log('m', m.default())
}
{
  const m = await server.ssrLoadModule('./node_modules/fake-package/index.js')
  console.log('m', m.default())
}
{
  const m = await server.ssrLoadModule('/@fs/' + path.resolve('./node_modules/fake-package/index.js'))
  console.log('m', m.default())
}
await server.close()
