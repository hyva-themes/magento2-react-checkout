module.exports = function override(config, env) {
  const isEnvDevelopment = env === 'development';
  const isEnvProduction = env === 'production';
  const filename = isEnvProduction
    ? '../../view/frontend/web/js/react-checkout.js'
    : isEnvDevelopment && 'static/js/bundle.js';
  const chunkFilename = isEnvProduction
    ? '../../view/frontend/web/js/[name].chunk.js'
    : isEnvDevelopment && 'static/js/[name].chunk.js';

  const baseConfig = {
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
  };

  if (isEnvProduction) {
    baseConfig.resolve.alias = {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
      ...config.resolve.alias
    };
  }

  return baseConfig;
};
