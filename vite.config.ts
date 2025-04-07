import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve as pathResolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  },
  publicDir: 'public',
  server: {
    fs: {
      allow: ['..']
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
})
function resolve(__dirname: string, arg1: string): string {
  return pathResolve(__dirname, arg1);
}

