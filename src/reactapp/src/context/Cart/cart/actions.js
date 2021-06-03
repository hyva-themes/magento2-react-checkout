import LocalStorage from '../../../utils/localStorage';
import { SET_CART_INFO } from './types';
import {
  createEmptyCartRequest,
  fetchCustomerCartRequest,
  fetchGuestCartRequest,
  mergeCartsRequest,
} from '../../../api';

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
    console.error(error);
  }

  return {};
}

export async function getCustomerCartIdAction() {
  try {
    const customerCartId = await fetchCustomerCartRequest();
    return customerCartId;
  } catch (error) {
    // @todo show error message
    console.error(error);
  }

  return null;
}

export async function createEmptyCartAction() {
  try {
    const cartId = await createEmptyCartRequest();
    return cartId;
  } catch (error) {
    // @todo show error message
    console.error(error);
  }
  return null;
}

export async function mergeCartsAction(dispatch, cartIds) {
  try {
    const cartInfo = await mergeCartsRequest(cartIds);

    if (cartInfo.error) {
      return cartInfo;
    }

    setCartInfoAction(dispatch, cartInfo);
    LocalStorage.saveCartId(cartInfo.id);

    return cartInfo;
  } catch (error) {
    // @todo show error message
    console.error(error);
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
    console.error(error);
  }

  return {};
}
