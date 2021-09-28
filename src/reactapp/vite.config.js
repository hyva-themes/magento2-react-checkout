import { defineConfig } from 'vite'
import prefresh from '@prefresh/vite';

export default defineConfig({
    build: {
        cssCodeSplit: false,
        outDir:  "../view/frontend/web",
        emptyOutDir: true,
        lib: {
            formats: ['es'],
            entry: "src/index.jsx",
            fileName: "react-checkout",
            name: "react-checkout.js",
        },
    },
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
        jsxInject: `import { h, Fragment } from 'preact'`,
      },
        plugins: [prefresh()],
     resolve: {
        alias: {
            react: 'preact/compat',
          },
     } 
});