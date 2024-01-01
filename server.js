import * as vite from 'vite'

async function createServer () {
  const config = await vite.resolveConfig({})
  const merged = vite.mergeConfig(config, {
    server: { middlewareMode: true }
  })
  // HACK: Vite bug: TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received function assetsInclude
  merged.assetsInclude = null;
  const server = await vite.createServer(merged)

  await server.ssrLoadModule('./src/foo.ts')
  await server.close()
}

await createServer()
