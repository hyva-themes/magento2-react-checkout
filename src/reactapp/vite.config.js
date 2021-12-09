import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    envPrefix: 'HYVA_',
    build: {
      cssCodeSplit: false,
      outDir: '../view/frontend/web',
      emptyOutDir: true,
      lib: {
        formats: ['es'],
        entry: 'src/main.jsx',
        fileName: 'react-checkout',
        name: 'react-checkout.js',
      },
    },
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      jsxInject: `import { h, Fragment } from 'react'`,
    },
    server: {
      proxy: {
        '/backend': {
          target: 'http://m24-hyva.test',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/backend/, ''),
        },
      },
    },
    plugins: [react()],
  };

  if (command === 'serve') {
    return config;
  }
  // command === 'build'
  return {
    // build specific config
    ...config,
  };
});
