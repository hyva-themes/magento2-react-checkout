module.exports = function override(config, env) {
  const isEnvDevelopment = env === 'development';
  const isEnvProduction = env === 'production';
  const filename = isEnvProduction
    ? '../../view/frontend/web/js/react-checkout.js'
    : isEnvDevelopment && 'static/js/bundle.js';
  const chunkFilename = isEnvProduction
    ? '../../view/frontend/web/js/[name].chunk.js'
    : isEnvDevelopment && 'static/js/[name].chunk.js';

  return {
    ...config,
    output: {
      ...config.output,
      filename,
      chunkFilename,
    },
    optimization: {
      ...config.optimization,
      runtimeChunk: false,
      splitChunks: {
        ...config.optimization.splitChunks,
        chunks: 'async',
        name: false,
      },
    },
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        // Uncomment these to reduce the size of the compiled app
        // this improves performance, but you loose compatibility
        // with the React browser extension for debugging
        //
        // react: 'preact/compat',
        // 'react-dom': 'preact/compat',
      },
    },
  };
};
