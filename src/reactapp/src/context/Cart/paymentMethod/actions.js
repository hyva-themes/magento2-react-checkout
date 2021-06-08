import {
  restSetGuestPaymentMethodRequest,
  restSetMyPaymentMethodRequest,
  setPaymentMethodRequest,
} from '../../../api';
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
      result = await restSetMyPaymentMethodRequest(paymentMethod);
    } else {
      result = await restSetGuestPaymentMethodRequest(paymentMethod);
    }

    return result;
  } catch (error) {
    console.error(error);
  }

  return {};
}
