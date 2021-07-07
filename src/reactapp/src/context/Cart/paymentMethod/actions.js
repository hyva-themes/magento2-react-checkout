import {
  setPaymentMethodRequest,
  restSetMyPaymentMethodRequest,
  restSetGuestPaymentMethodRequest,
} from '../../../api';
import { SET_CART_INFO } from '../cart/types';

export async function setPaymentMethodAction(dispatch, paymentMethod) {
  try {
    const cartData = await setPaymentMethodRequest(dispatch, paymentMethod);

    dispatch({
      type: SET_CART_INFO,
      payload: cartData,
    });
  } catch (error) {
    /** @todo error message */
    console.error(error);
    throw error;
  }
}

export async function setRestPaymentMethodAction(
  dispatch,
  paymentMethod,
  isLoggedIn
) {
  try {
    let result;
    if (isLoggedIn) {
      result = await restSetMyPaymentMethodRequest(dispatch, paymentMethod);
    } else {
      result = await restSetGuestPaymentMethodRequest(dispatch, paymentMethod);
    }

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
