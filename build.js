import * as vite from 'vite'
import wasm from 'vite-plugin-wasm'

await vite.build({
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['es']
    }
  },
  plugins: [wasm()],
  resolve: {
    conditions: ['worker']
  }
})
