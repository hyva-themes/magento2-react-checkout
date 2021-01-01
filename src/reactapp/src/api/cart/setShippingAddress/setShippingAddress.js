import { SET_SHIPPING_ADDR_MUTATION } from './mutation';
import modifier from './modifier';
import { config } from '../../../config';
import sendRequest from '../../sendRequest';

export default async function setShippingAddress(shippingAddress) {
  const variables = { ...shippingAddress, cartId: config.cartId };

  return modifier(
    await sendRequest({ query: SET_SHIPPING_ADDR_MUTATION, variables })
  );
}
