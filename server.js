import * as vite from 'vite'

async function createServer () {
  const config = await vite.resolveConfig({})
  const merged = vite.mergeConfig(config, {
    server: { middlewareMode: true }
  })
  merged.assetsInclude = []
  const server = await vite.createServer(merged)

  await server.ssrLoadModule('./src/foo.ts')
  await server.close()
}

await createServer()
