import { setCustomerAddrAsCartShippingAddrRequest, setShippingAddressRequest } from '../../../api';
import { SET_CART_INFO } from '../cart/types';
import { SET_CART_SELECTED_SHIPPING_ADDRESS } from './types';

export function setSelectedShippingAddressAction(dispatch, shippingAddrId) {
  dispatch({
    type: SET_CART_SELECTED_SHIPPING_ADDRESS,
    payload: shippingAddrId,
  });
}

export async function addCartShippingAddressAction(dispatch, shippingAddress) {
  try {
    const cartInfo = await setShippingAddressRequest(shippingAddress);

    dispatch({
      type: SET_CART_INFO,
      payload: cartInfo,
    });
  } catch (error) {
    // @todo error message
  }
}

export async function setCustomerAddrAsShippingAddrAction(dispatch, addressId) {
  try {
    const cartInfo = await setCustomerAddrAsCartShippingAddrRequest(addressId);

    dispatch({
      type: SET_CART_INFO,
      payload: cartInfo,
    });
  } catch (error) {
    // @todo error message
  }
}
