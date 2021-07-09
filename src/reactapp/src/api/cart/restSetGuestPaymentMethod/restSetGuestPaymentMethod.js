import modifier from './modifier';
import RootElement from '../../../utils/rootElement';
import LocalStorage from '../../../utils/localStorage';
import sendRequest, { RESPONSE_TEXT } from '../../sendRequest';

export default async function restSetGuestPaymentMethod(dispatch, paymentData) {
  const cartId = LocalStorage.getCartId();
  const { restUrlPrefix } = RootElement.getPaymentConfig();
  const setPaymentMethodUrl = `${restUrlPrefix}guest-carts/${cartId}/payment-information`;

  return modifier(
    await sendRequest(dispatch, paymentData, setPaymentMethodUrl, RESPONSE_TEXT)
  );
}
