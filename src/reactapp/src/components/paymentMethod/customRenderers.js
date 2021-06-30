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
<<<<<<< HEAD
import CreditCard from '../payone/components/creditCard/CreditCard';

const customRenderers = {
  payone_creditcard: CreditCard,
=======
import PaypalExpress from '../paypalExpress/components/PaypalExpress';

const customRenderers = {
  paypal_express: PaypalExpress,
>>>>>>> 3b2d018... Paypal express checkout integration
};

export default customRenderers;
