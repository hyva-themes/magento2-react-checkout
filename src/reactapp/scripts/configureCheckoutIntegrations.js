const configurePaymentMethods = require('./integrations/configurePaymentMethods');
const configureShippingMethods = require('./integrations/configureShippingMethods');

module.exports = (async () => {
  try {
    await configurePaymentMethods();
    await configureShippingMethods();
  } catch (error) {
    console.error(error);
  }
})();
