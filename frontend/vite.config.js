import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: import.meta.dirname,
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, '..'),
      'react': path.resolve(import.meta.dirname, 'node_modules/react'),
      'react-dom': path.resolve(import.meta.dirname, 'node_modules/react-dom'),
      'react/jsx-runtime': path.resolve(import.meta.dirname, 'node_modules/react/jsx-runtime'),
      'clsx': path.resolve(import.meta.dirname, 'node_modules/clsx'),
      'tailwind-merge': path.resolve(import.meta.dirname, 'node_modules/tailwind-merge'),
      'framer-motion': path.resolve(import.meta.dirname, 'node_modules/framer-motion'),
    },
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
    dedupe: ['react', 'react-dom'],
  },
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
