import { SET_PAYMENT_METHOD_ON_CART_PAYPAL_EXPRESS } from './mutation';
import sendRequest from '../../../sendRequest';
import LocalStorage from '../../../../utils/localStorage';
import modifier from './modifier';

export default async function setPaymentMethodPaypalExpress({
  payerId,
  token,
}) {
  const variables = { payerId, token, cartId: LocalStorage.getCartId() };

  return modifier(
    await sendRequest({
      query: SET_PAYMENT_METHOD_ON_CART_PAYPAL_EXPRESS,
      variables,
    })
  );
}
