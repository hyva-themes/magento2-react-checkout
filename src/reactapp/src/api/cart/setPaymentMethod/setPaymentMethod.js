import modifier from './modifier';
import sendRequest from '../../sendRequest';
import LocalStorage from '../../../utils/localStorage';
import { SET_PAYMENT_METHOD_MUTATION } from './mutation';

export default async function setPaymentMethod(dispatch, paymentMethod) {
  const variables = { code: paymentMethod, cartId: LocalStorage.getCartId() };

  return modifier(
    await sendRequest(dispatch, {
      query: SET_PAYMENT_METHOD_MUTATION,
      variables,
    })
  );
}
