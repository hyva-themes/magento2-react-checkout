import { SET_PAYMENT_METHOD_MUTATION } from './mutation';
import modifier from './modifier';
import sendRequest from '../../sendRequest';
import LocalStorage from '../../../utils/localStorage';

export default async function setPaymentMethod(paymentMethod) {
  const variables = { ...paymentMethod, cartId: LocalStorage.getCartId() };

  return modifier(
    await sendRequest({ query: SET_PAYMENT_METHOD_MUTATION, variables })
  );
}
