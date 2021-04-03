module.exports = function override(config, env) {
  const isEnvDevelopment = env === 'development';
  const isEnvProduction = env === 'production';
  config.output.filename = isEnvProduction
    ? '../../view/frontend/web/js/react-checkout.js'
    : isEnvDevelopment && 'static/js/bundle.js';
  config.output.chunkFilename = isEnvProduction
    ? '../../view/frontend/web/js/[name].chunk.js'
    : isEnvDevelopment && 'static/js/[name].chunk.js';

  config.optimization.splitChunks.chunks = 'async';
  config.optimization.splitChunks.name = false;
  config.optimization.runtimeChunk = false;

//   Object.assign(config.resolve.alias, {
//     react: 'preact/compat',
//     'react-dom': 'preact/compat',
//   });

  return config;
};
