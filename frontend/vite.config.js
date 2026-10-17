import { defineConfig } from 'vite';

export default defineConfig({
  root: import.meta.dirname,
  base: '/static/landing-assets/',
  esbuild: {
    jsx: 'automatic',
  },
  build: {
    outDir: '../static/landing-assets',
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: 'src/main.jsx',
      output: {
        entryFileNames: 'landing.js',
        assetFileNames: 'landing.[ext]',
        chunkFileNames: 'chunks/[name]-[hash].js',
      },
    },
  },
});
