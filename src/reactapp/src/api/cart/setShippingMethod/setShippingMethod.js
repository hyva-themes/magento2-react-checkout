import { SET_SHIPPING_METHOD_MUTATION } from './mutation';
import modifier from './modifier';
import sendRequest from '../../sendRequest';
import LocalStorage from '../../../utils/localStorage';

export default async function setShippingMethod(shippingMethod) {
  const variables = { ...shippingMethod, cartId: LocalStorage.getCartId() };

  return modifier(
    await sendRequest({ query: SET_SHIPPING_METHOD_MUTATION, variables })
  );
}
