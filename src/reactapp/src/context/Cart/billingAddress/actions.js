import {
  setBillingAddressRequest,
  setCustomerAddrAsCartBillingAddrRequest,
} from '../../../api';
import { SET_CART_INFO } from '../cart/types';
import { _cleanObjByKeys } from '../../../utils';

export async function setBillingAddressAction(
  dispatch,
  appDispatch,
  billingAddress,
  isVirtualCart
) {
  const cartInfo = await setBillingAddressRequest(
    appDispatch,
    isVirtualCart
      ? _cleanObjByKeys(billingAddress, ['isSameAsShipping'])
      : billingAddress,
    isVirtualCart
  );

  dispatch({
    type: SET_CART_INFO,
    payload: cartInfo,
  });

  return cartInfo;
}

export async function setCustomerAddrAsBillingAddrAction(
  dispatch,
  appDispatch,
  addressId,
  sameAsShipping,
  isVirtualCart
) {
  try {
    const cartInfo = await setCustomerAddrAsCartBillingAddrRequest(
      appDispatch,
      addressId,
      sameAsShipping,
      isVirtualCart
    );

    dispatch({
      type: SET_CART_INFO,
      payload: cartInfo,
    });

    return cartInfo;
  } catch (error) {
    // @todo error message
    return {};
  }
}
