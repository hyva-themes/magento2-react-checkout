import { setPaymentMethodRequest } from '../../../api';
import { SET_CART_INFO } from '../cart/types';

export async function setPaymentMethodAction(dispatch, paymentMethod) {
  try {
    const cartData = await setPaymentMethodRequest(paymentMethod);

    dispatch({
      type: SET_CART_INFO,
      payload: cartData,
    });
  } catch (error) {
    /** @todo error message */
  }
}
