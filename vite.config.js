import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { BRAND_NAME } from './src/config/brand-name.js'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Brand name: src/config/brand-name.js (optionally overridden by VITE_BRAND_NAME in .env).
  const env = loadEnv(mode, '.', 'VITE_')
  const brandName = env.VITE_BRAND_NAME || BRAND_NAME

  return {
    plugins: [
      react(),
      {
        // Replaces %BRAND_NAME% in index.html (page title and meta tags).
        name: 'brand-name-html',
        transformIndexHtml: (html) => html.replaceAll('%BRAND_NAME%', brandName),
      },
    ],
  }
})
