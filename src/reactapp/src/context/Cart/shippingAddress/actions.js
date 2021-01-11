import { setShippingAddressRequest } from '../../../api';
import {
  SET_CART_SELECTED_SHIPPING_ADDRESS,
  SET_CART_SHIPPING_ADDDRESSES,
} from './types';

export function setSelectedShippingAddressAction(dispatch, shippingAddrId) {
  dispatch({
    type: SET_CART_SELECTED_SHIPPING_ADDRESS,
    payload: shippingAddrId,
  });
}

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
