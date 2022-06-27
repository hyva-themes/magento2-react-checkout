/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // includes app env settings into process.env;
  // Only settings starts with `HYVA_` works
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), ['HYVA_']) };

  const newConfig = {
    build: {
      cssCodeSplit: false,
      sourcemap: true,
      outDir: '../view/frontend/web',
      emptyOutDir: false,
    },
    envPrefix: 'HYVA_',
    plugins: [react()],
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
  };

  if (mode === 'production') {
    return {
      ...newConfig,
      build: {
        ...newConfig.build,
        rollupOptions: {
          output: {
            entryFileNames: 'js/react-checkout.js',
            chunkFileNames: 'js/[name].js',
            assetFileNames: (assetInfo) => {
              if (assetInfo.name === 'style.css') {
                return 'css/styles.css';
              }
              return assetInfo.name;
            },
          },
        },
      },
      // Visualizing the build. You will see stats.html file at the root and there by analyze the build
      plugins: [...newConfig.plugins, visualizer()],
      resolve: {
        alias: {
          /**
           * There are some core libraries such as formik, yup etc. uses lodash
           * library and hence using lodash-es gives best bundle result. Not a good
           * idea to rely on 'lodash' directly as it will include both lodash and lodash-es
           * in the build. So we uses lodash-es and by aliasing lodash => lodash-es, we will
           * get the most optimized build.
           */
          lodash: 'lodash-es',
          /**
           * Use preact instead of react to improve the build size.
           */
          react: 'preact/compat',
          'react-dom': 'preact/compat',
        },
      },
    };
  }

  return newConfig;
});
