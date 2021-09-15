import {
  mergeCartsRequest,
  fetchGuestCartRequest,
  createEmptyCartRequest,
  fetchCustomerCartRequest,
} from '../../../api';
import { SET_CART_INFO } from './types';
import LocalStorage from '../../../utils/localStorage';

export async function setCartInfoAction(dispatch, appDispatch, cartInfo) {
  dispatch({
    type: SET_CART_INFO,
    payload: cartInfo,
  });
}

export async function getGuestCartInfoAction(dispatch, appDispatch) {
  try {
    const cartInfo = await fetchGuestCartRequest(appDispatch);
    setCartInfoAction(dispatch, appDispatch, cartInfo);
    return cartInfo;
  } catch (error) {
    // @todo show error message
    console.error(error);
  }

  return {};
}

export async function getCustomerCartIdAction(dispatch, appDispatch) {
  try {
    const customerCartId = await fetchCustomerCartRequest(appDispatch);
    return customerCartId;
  } catch (error) {
    // @todo show error message
    console.error(error);
  }

  return null;
}

export async function createEmptyCartAction(dispatch, appDispatch) {
  try {
    const cartId = await createEmptyCartRequest(appDispatch);
    return cartId;
  } catch (error) {
    // @todo show error message
    console.error(error);
  }
  return null;
}

export async function mergeCartsAction(dispatch, appDispatch, cartIds) {
  try {
    const cartInfo = await mergeCartsRequest(appDispatch, cartIds);

    if (cartInfo.error) {
      return cartInfo;
    }

    setCartInfoAction(dispatch, appDispatch, cartInfo);
    LocalStorage.saveCartId(cartInfo.id);

    return cartInfo;
  } catch (error) {
    // @todo show error message
    console.error(error);
  }

  return {};
}

export async function getCartInfoAfterMergeAction(
  dispatch,
  appDispatch,
  guestCartId
) {
  let cartInfo = {};

  try {
    let customerCartId = await getCustomerCartIdAction(dispatch, appDispatch);

    if (!customerCartId) {
      customerCartId = await createEmptyCartAction(dispatch, appDispatch);
    }

    if (guestCartId && customerCartId && guestCartId !== customerCartId) {
      cartInfo = await mergeCartsAction(dispatch, appDispatch, {
        sourceCartId: guestCartId,
        destinationCartId: customerCartId,
      });
    } else {
      cartInfo = await getGuestCartInfoAction(dispatch, appDispatch);
    }

    LocalStorage.saveCartId(customerCartId);

    return cartInfo;
  } catch (error) {
    // @todo show error message
    console.error(error);
  }

  return {};
}
