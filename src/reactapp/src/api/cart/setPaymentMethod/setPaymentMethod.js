import { SET_PAYMENT_METHOD_MUTATION } from './mutation';
import modifier from './modifier';
import { config } from '../../../config';
import sendRequest from '../../sendRequest';

export default async function setPaymentMethod(paymentMethod) {
  const variables = { ...paymentMethod, cartId: config.cartId };

  return modifier(
    await sendRequest({ query: SET_PAYMENT_METHOD_MUTATION, variables })
  );
}
