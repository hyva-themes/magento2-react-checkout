import { paymentFetcher } from './utility';

/**
 * Preparing custom renderers from the available payment methods configured
 * into this directory.
 *
 * Available payment methods are available in `paymentConfig.json`.
 *
 * Each payment methods will posses `renderers.js` file which will defines the
 * custom payment method renderers. This will collect all the renderers provide
 * it into the PaymentMethods component.
 */
export default async function getCustomRenderers() {
  const paymentMethodRenderers =
    await paymentFetcher.fetchDataFromPaymentMethods('renderers.js', []);

  return paymentMethodRenderers.reduce(
    (renderers, item) => ({ ...renderers, ...item }),
    {}
  );
}
