import { setShippingAddressRequest } from '../../../api';
import { SET_CART_SHIPPING_ADDDRESSES } from './types';

export async function addCartShippingAddressAction(dispatch, shippingAddress) {
  try {
    const cartShippingAddrs = await setShippingAddressRequest(shippingAddress);

    dispatch({
      type: SET_CART_SHIPPING_ADDDRESSES,
      payload: cartShippingAddrs,
    });
  } catch (error) {
    // @todo error message
  }
}
