import { SET_SHIPPING_METHOD_MUTATION } from './mutation';
import modifier from './modifier';
import { config } from '../../../config';
import sendRequest from '../../sendRequest';

export default async function setShippingMethod(shippingMethod) {
  const variables = { ...shippingMethod, cartId: config.cartId };

  return modifier(
    await sendRequest({ query: SET_SHIPPING_METHOD_MUTATION, variables })
  );
}
