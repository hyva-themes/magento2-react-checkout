const fs = require('fs');
const util = require('./utility');

const paymentDirectoryPath = './src/paymentMethods/';

/**
 * Setting up custom payment methods into the react app section
 *
 * This will clone the payment methods repository specified under
 * `config.paymentMethodsRepo` section in package.json file into the
 * `src/paymentMethods`
 *
 * It will also populate `src/paymentMethods/paymentConfig.json` file with the
 * available payment methods details. This will be used by the react app to
 * correctly configure the custom payment methods into the app.
 */
module.exports = (async () => {
  const paymentRepos = util.collectConfiguredReposFromEnv('paymentMethodsRepo');
  const paymentMethodList = Object.keys(paymentRepos);

  await util.cloneAndConfigureRepos(
    paymentRepos,
    paymentDirectoryPath,
    'payment method'
  );

  // write down available payment methods into `src/paymentMethods/paymentConfig.json`
  fs.writeFileSync(
    `${paymentDirectoryPath}paymentConfig.json`,
    JSON.stringify({ availablePaymentMethods: paymentMethodList })
  );

  console.log('Payment methods successfully added');
})();
