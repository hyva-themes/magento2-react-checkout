import { SET_CART_INFO } from '../cart/types';
import { setShippingMethodRequest } from '../../../api';

export async function setShippingMethodAction(
  dispatch,
  appDispatch,
  shippingMethod
) {
  try {
    const cartData = await setShippingMethodRequest(
      appDispatch,
      shippingMethod
    );

    dispatch({
      type: SET_CART_INFO,
      payload: cartData,
    });
  } catch (error) {
    /** @todo error message */
  }
}
