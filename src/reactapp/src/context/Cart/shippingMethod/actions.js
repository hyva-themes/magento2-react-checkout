import { SET_CART_INFO } from '../cart/types';
import { setShippingMethodRequest } from '../../../api';

export async function setShippingMethodAction(dispatch, shippingMethod) {
  try {
    const cartData = await setShippingMethodRequest(dispatch, shippingMethod);

    dispatch({
      type: SET_CART_INFO,
      payload: cartData,
    });
  } catch (error) {
    /** @todo error message */
  }
}
