import { SET_CART_BILLING_ADDRESS_MUTATION } from './mutation';
import modifier from './modifier';
import { config } from '../../../config';
import sendRequest from '../../sendRequest';

export default async function setBillingAddress(billingAddress) {
  const variables = { ...billingAddress, cartId: config.cartId };

  return modifier(
    await sendRequest({ query: SET_CART_BILLING_ADDRESS_MUTATION, variables })
  );
}
