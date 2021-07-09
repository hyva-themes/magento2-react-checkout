import {
  setBillingAddressRequest,
  setCustomerAddrAsCartBillingAddrRequest,
} from '../../../api';
import { SET_CART_INFO } from '../cart/types';

export async function setBillingAddressAction(dispatch, billingAddress) {
  const cartInfo = await setBillingAddressRequest(dispatch, billingAddress);

  dispatch({
    type: SET_CART_INFO,
    payload: cartInfo,
  });
}

export async function setCustomerAddrAsBillingAddrAction(
  dispatch,
  addressId,
  sameAsShipping
) {
  try {
    const cartInfo = await setCustomerAddrAsCartBillingAddrRequest(
      dispatch,
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
