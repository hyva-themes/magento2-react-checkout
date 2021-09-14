import {
  setBillingAddressRequest,
  setCustomerAddrAsCartBillingAddrRequest,
} from '../../../api';
import { SET_CART_INFO } from '../cart/types';

export async function setBillingAddressAction(
  dispatch,
  appDispatch,
  billingAddress
) {
  const cartInfo = await setBillingAddressRequest(appDispatch, billingAddress);

  dispatch({
    type: SET_CART_INFO,
    payload: cartInfo,
  });
}

export async function setCustomerAddrAsBillingAddrAction(
  dispatch,
  appDispatch,
  addressId,
  sameAsShipping
) {
  try {
    const cartInfo = await setCustomerAddrAsCartBillingAddrRequest(
      appDispatch,
      addressId,
      sameAsShipping
    );

    dispatch({
      type: SET_CART_INFO,
      payload: cartInfo,
    });
  } catch (error) {
    // @todo error message
  }
}
