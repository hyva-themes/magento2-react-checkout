import _set from 'lodash.set';

import {
  setShippingAddressRequest,
  setCustomerAddrAsCartShippingAddrRequest,
} from '../../../api';
import { SET_CART_INFO } from '../cart/types';
import { SET_CART_SELECTED_SHIPPING_ADDRESS } from './types';

export function setSelectedShippingAddressAction(
  dispatch,
  appDispatch,
  shippingAddrId
) {
  dispatch({
    type: SET_CART_SELECTED_SHIPPING_ADDRESS,
    payload: shippingAddrId,
  });
}

export async function addCartShippingAddressAction(
  dispatch,
  appDispatch,
  shippingAddress,
  isBillingAddressSame
) {
  const cartInfo = await setShippingAddressRequest(
    appDispatch,
    shippingAddress
  );
  _set(cartInfo, 'billing_address.isSameAsShipping', !!isBillingAddressSame);

  dispatch({
    type: SET_CART_INFO,
    payload: cartInfo,
  });

  return cartInfo;
}

export async function setCustomerAddrAsShippingAddrAction(
  dispatch,
  appDispatch,
  addressId,
  isBillingAddressSame
) {
  const cartInfo = await setCustomerAddrAsCartShippingAddrRequest(
    appDispatch,
    addressId
  );
  _set(cartInfo, 'billing_address.isSameAsShipping', !!isBillingAddressSame);

  dispatch({
    type: SET_CART_INFO,
    payload: cartInfo,
  });

  return cartInfo;
}
