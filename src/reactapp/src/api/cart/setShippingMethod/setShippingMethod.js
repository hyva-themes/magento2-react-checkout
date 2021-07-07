import modifier from './modifier';
import sendRequest from '../../sendRequest';
import LocalStorage from '../../../utils/localStorage';
import { SET_SHIPPING_METHOD_MUTATION } from './mutation';

export default async function setShippingMethod(dispatch, shippingMethod) {
  const variables = { ...shippingMethod, cartId: LocalStorage.getCartId() };

  return modifier(
    await sendRequest(dispatch, {
      query: SET_SHIPPING_METHOD_MUTATION,
      variables,
    })
  );
}
