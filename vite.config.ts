import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    })
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
    server: {
      deps: {
        inline: [
          '@fortawesome/fontawesome-svg-core',
          '@fortawesome/free-solid-svg-icons',
          '@fortawesome/free-regular-svg-icons',
          '@fortawesome/free-brands-svg-icons',
          '@fortawesome/react-fontawesome',
        ],
      },
    }
  },
  base: '/', //or repository name
  resolve: {
    alias: {
      '@': '/src',
      '@fortawesome/fontawesome-svg-core/package.json':
        '@fortawesome/fontawesome-svg-core/package.json?raw',
    },
  },
})
