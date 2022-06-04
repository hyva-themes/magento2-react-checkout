const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const cssFileNameUpdator = require('./scripts/react-app-rewire/css-file-name-updator');
const reactAppRewirePostCssApplier = require('./scripts/react-app-rewire/postcss-applier');

module.exports = function override(config, env) {
  const isEnvProduction = env === 'production';
  const filename = isEnvProduction
    ? '../../view/frontend/web/js/react-checkout.js'
    : 'static/js/bundle.js';
  const chunkFilename = isEnvProduction
    ? '../../view/frontend/web/js/[name].chunk.js'
    : 'static/js/[name].chunk.js';

  const newConfig = {
    ...config,
    optimization: {
      ...config.optimization,
      runtimeChunk: false,
      splitChunks: {
        ...config.optimization.splitChunks,
        chunks: 'async',
        name: false,
      },
    },
    output: {
      ...config.output,
      filename,
      chunkFilename,
    },
    plugins: [...config.plugins, new LodashModuleReplacementPlugin()],
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        'lodash-es': 'lodash',
      },
    },
  };

  if (isEnvProduction) {
    newConfig.resolve.alias = {
      ...newConfig.resolve.alias,
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    };
  }
  // Save css bundle into styles.css
  cssFileNameUpdator(newConfig, isEnvProduction);
  // Apply postcss.config.js
  reactAppRewirePostCssApplier(newConfig);

  return newConfig;
};
