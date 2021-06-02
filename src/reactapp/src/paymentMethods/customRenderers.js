import _get from 'lodash.get';

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
  // collecting payment methods from paymentConfig.json
  const config = await import('./paymentConfig.json');
  const customPaymentMethods = _get(
    config,
    'default.availablePaymentMethods',
    []
  );

  if (!customPaymentMethods || !customPaymentMethods.length) {
    return {};
  }

  /**
   * Dynamically loading the renderers.js from the available payment methods.
   *
   * Since we are doing dynamic imports, it will generate chunks for each dynamic
   * import.
   */
  const rendererCollection = await Promise.all(
    customPaymentMethods.map(async paymentMethod => {
      const paymentRenderersJsFile = `./${paymentMethod}/renderers.js`;
      const data = await import(
        /* webpackMode: "eager" */
        paymentRenderersJsFile
      );
      return _get(data, 'default');
    })
  );

  // preparing the renderers from all available payment methods.
  return rendererCollection.reduce(
    (renderers, item) => ({ ...renderers, ...item }),
    {}
  );
}
