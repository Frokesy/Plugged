import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, ConfigEnv, LibraryFormats } from 'vite'
import dts from 'vite-plugin-dts'
import EsLint from 'vite-plugin-linter'
import tsConfigPaths from 'vite-tsconfig-paths'
import * as packageJson from './package.json'

const { EsLinter, linterPlugin } = EsLint

export default defineConfig((configEnv: ConfigEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src}/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
    dts({
      include: ['src/component/'],
    }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'components/index.ts'),
      name: 'paginato',
      formats: ['es', 'umd'] as LibraryFormats[],
      fileName: (format: string) => `paginato.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.devDependencies || {})],
    },
  },
}))
