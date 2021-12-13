import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // includes app env settings into process.env;
  // Only settings starts with `HYVA_` works
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), ['HYVA_']) };

  return {
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
          target: process.env.HYVA_BASE_URL || 'https://demo.hyva.io',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/backend/, ''),
        },
      },
    },
    plugins: [react()],
  };
});
