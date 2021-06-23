import _set from 'lodash.set';

import {
  setShippingAddressRequest,
  setCustomerAddrAsCartShippingAddrRequest,
} from '../../../api';
import { SET_CART_INFO } from '../cart/types';
import { SET_CART_SELECTED_SHIPPING_ADDRESS } from './types';

export function setSelectedShippingAddressAction(dispatch, shippingAddrId) {
  dispatch({
    type: SET_CART_SELECTED_SHIPPING_ADDRESS,
    payload: shippingAddrId,
  });
}

export async function addCartShippingAddressAction(
  dispatch,
  shippingAddress,
  isBillingAddressSame
) {
  try {
    const cartInfo = await setShippingAddressRequest(shippingAddress);
    _set(cartInfo, 'billing_address.isSameAsShipping', !!isBillingAddressSame);

    dispatch({
      type: SET_CART_INFO,
      payload: cartInfo,
    });

    return cartInfo;
  } catch (error) {
    // @todo error message
    console.error(error);
  }

  return {};
}

export async function setCustomerAddrAsShippingAddrAction(
  dispatch,
  addressId,
  isBillingAddressSame
) {
  try {
    const cartInfo = await setCustomerAddrAsCartShippingAddrRequest(addressId);
    _set(cartInfo, 'billing_address.isSameAsShipping', !!isBillingAddressSame);

    dispatch({
      type: SET_CART_INFO,
      payload: cartInfo,
    });

    return cartInfo;
  } catch (error) {
    // @todo error message
    console.error(error);
  }

  return {};
}
