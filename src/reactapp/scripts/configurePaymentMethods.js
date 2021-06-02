const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');

const paymentMethodDir = 'src/paymentMethods';

async function installRepo(directory, repoUri) {
  console.log(`installing ${directory}: ${repoUri}`);
  const { stdout, stderr } = await exec(
    `cd ${paymentMethodDir} && git clone ${repoUri} ${directory} && cd .. && cd ..`
  );
  console.log(`${directory} payment method added successfully.`);
}

function collectPaymentMethodReposFromEnv() {
  const { env } = process;
  const paymentRepoConfigPrefix = 'npm_package_config_paymentMethodsRepo';
  const paymentRepos = {};

  Object.keys(env).forEach(envProp => {
    if (envProp.startsWith(paymentRepoConfigPrefix)) {
      paymentRepos[envProp.replace(`${paymentRepoConfigPrefix}_`, '')] =
        env[envProp];
    }
  });

  return paymentRepos;
}

async function cloneAndConfigurePaymentRepos(paymentRepos) {
  const paymentMethodList = Object.keys(paymentRepos);

  await Promise.all(
    paymentMethodList.map(async paymentMethod => {
      if (!fs.existsSync(`${paymentMethodDir}/${paymentMethod}`)) {
        await installRepo(paymentMethod, paymentRepos[paymentMethod]);
      }
      return 'success';
    })
  );
}

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
  if (!fs.existsSync(paymentMethodDir)) {
    console.warn(
      `${paymentMethodDir} directory is not present. Cannot proceed with payment methods setup`
    );
    return;
  }

  const paymentRepos = collectPaymentMethodReposFromEnv();
  const paymentMethodList = Object.keys(paymentRepos);

  await cloneAndConfigurePaymentRepos(paymentRepos);

  // write down available payment methods into `src/paymentMethods/paymentConfig.json`
  fs.writeFileSync(
    `${paymentMethodDir}/paymentConfig.json`,
    JSON.stringify({ availablePaymentMethods: paymentMethodList })
  );

  console.log('Payment methods successfully added');
})();
