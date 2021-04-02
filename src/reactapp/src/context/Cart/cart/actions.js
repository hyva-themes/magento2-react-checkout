import LocalStorage from '../../../utils/localStorage';
import { SET_CART_INFO } from './types';
import {
  createEmptyCartRequest,
  fetchCustomerAddressListRequest,
  fetchCustomerCartRequest,
  fetchGuestCartRequest,
  mergeCartsRequest,
} from '../../../api';
import { _emptyFunc, _makePromise } from '../../../utils';
import { setCustomerAddrAsShippingAddrAction } from '../shippingAddress/actions';
import { setCustomerAddrAsBillingAddrAction } from '../billingAddress/actions';
import {
  isCartHoldingBillingAddress,
  isCartHoldingShippingAddress,
} from '../../../utils/address';

export async function setCartInfoAction(dispatch, cartInfo) {
  dispatch({
    type: SET_CART_INFO,
    payload: cartInfo,
  });
}

export async function getGuestCartInfoAction(dispatch) {
  try {
    const cartInfo = await fetchGuestCartRequest();
    setCartInfoAction(dispatch, cartInfo);
    return cartInfo;
  } catch (error) {
    // @todo show error message
    console.log({ error });
  }

  return {};
}

export async function getCustomerCartIdAction() {
  try {
    const customerCartId = await fetchCustomerCartRequest();
    return customerCartId;
  } catch (error) {
    // @todo show error message
    console.log({ error });
  }

  return null;
}

export async function createEmptyCartAction() {
  try {
    const cartId = await createEmptyCartRequest();
    return cartId;
  } catch (error) {
    // @todo show error message
    console.log({ error });
  }
  return null;
}

export async function mergeCartsAction(dispatch, cartIds) {
  try {
    const cartInfo = await mergeCartsRequest(cartIds);
    setCartInfoAction(dispatch, cartInfo);

    return cartInfo;
  } catch (error) {
    // @todo show error message
    console.log({ error });
  }

  return {};
}

export async function getCartInfoAfterMergeAction(dispatch, guestCartId) {
  let cartInfo = {};

  try {
    let customerCartId = await getCustomerCartIdAction();

    if (!customerCartId) {
      customerCartId = await createEmptyCartAction();
    }

    if (guestCartId && customerCartId && guestCartId !== customerCartId) {
      cartInfo = await mergeCartsAction(dispatch, {
        sourceCartId: guestCartId,
        destinationCartId: customerCartId,
      });
    } else {
      cartInfo = await getGuestCartInfoAction(dispatch);
    }

    LocalStorage.saveCartId(customerCartId);

    return cartInfo;
  } catch (error) {
    // @todo show error message
    console.log({ error });
  }

  return {};
}

export async function setCustomerDefaultAddressToCartAction(
  dispatch,
  cartInfo
) {
  try {
    let customerAddressInfo;
    let shippingAddrPromise = _emptyFunc();
    let billingAddrPromise = _emptyFunc();

    // if empty, that indicates there is no shipping address for the cart
    if (!isCartHoldingShippingAddress(cartInfo)) {
      customerAddressInfo = await fetchCustomerAddressListRequest();
      const { defaultShippingAddress } = customerAddressInfo;

      if (defaultShippingAddress) {
        shippingAddrPromise = _makePromise(
          setCustomerAddrAsShippingAddrAction,
          dispatch,
          defaultShippingAddress
        );
      }
    }

    if (!isCartHoldingBillingAddress(cartInfo)) {
      if (!customerAddressInfo) {
        customerAddressInfo = await fetchCustomerAddressListRequest();
      }

      const { defaultBillingAddress } = customerAddressInfo;

      if (defaultBillingAddress) {
        billingAddrPromise = _makePromise(
          setCustomerAddrAsBillingAddrAction,
          dispatch,
          defaultBillingAddress
        );
      }
    }

    await Promise.all([shippingAddrPromise(), billingAddrPromise()]);
  } catch (error) {
    // @todo show error message
    console.log({ error });
  }
}
