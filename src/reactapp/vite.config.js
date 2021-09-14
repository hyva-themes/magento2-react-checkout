import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact()],
  build: {
    cssCodeSplit: false,
    outDir: '../view/frontend/web/js',
    lib: {
      entry: 'src/index.jsx',
      formats: ['iife'],
      name: 'react-checkout.js',
      fileName: `react-checkout`,
    },
    emptyOutDir: true,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});
