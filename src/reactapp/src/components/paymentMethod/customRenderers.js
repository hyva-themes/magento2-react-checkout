/**
 * Payment Method Custom Renderers
 *
 * By default, a radio input box is shown for every payment methods. But there
 * are many occasions in which you may need a custom behaviour for a payment
 * method. If your checkout has a payment method with a different behviour,
 * then you can add your custom payment method renderer component below.
 *
 * The format is like:
 * {
 *    <payment_method_code>: <CustomPaymentMethodRendererComponent>
 * }
 *
 */
import PaypalExpress from '../paypalExpress/components/PaypalExpress';

const customRenderers = {
  paypal_express: PaypalExpress,
};

export default customRenderers;
