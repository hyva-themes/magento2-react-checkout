/* eslint-disable no-param-reassign */

/**
 * Taken from: https://github.com/csstools/react-app-rewire-postcss
 *
 * This is used to apply postcss configuration to cra-5. It seems almost impossible to apply
 * postcss configuration to cra-5. However, the above package is old and it relies on older
 * version of postcss. Hence, we go for custom script to give the ability to configure
 * postcss.config.js file with cra-5
 */
const customPostCssSettings = require('../../postcss.config');

// return a filtered array that includes postcss-loader
const filterPostCSSLoader = (array) =>
  array.filter((object) => JSON.stringify(object).includes('postcss-loader'));

module.exports = (config) => {
  // find any first matching rule that contains postcss-loader
  filterPostCSSLoader(config.module.rules).forEach((rule) => {
    filterPostCSSLoader(rule.oneOf).forEach((oneOf) => {
      filterPostCSSLoader(oneOf.use || oneOf.loader).forEach((use) => {
        // use the latest version of postcss-loader
        use.loader = require.resolve('postcss-loader');
        use.options = {
          ...use.options,
          postcssOptions: {
            ...use.options.postcssOptions,
            ...customPostCssSettings,
          },
        };
      });
    });
  });

  // return the mutated configuration
  return config;
};
