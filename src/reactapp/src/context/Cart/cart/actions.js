import LS from '../../../utils/LS';
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
    setCartInfoAction(dispatch, await fetchGuestCartRequest());
  } catch (error) {
    // @todo show error message
    console.log({ error });
  }
}

export async function getCustomerCartIdAction() {
  try {
    return await fetchCustomerCartRequest();
  } catch (error) {
    // @todo show error message
    console.log({ error });
  }

  return null;
}

export async function createEmptyCart() {
  try {
    return await createEmptyCartRequest();
  } catch (error) {
    // @todo show error message
    console.log({ error });
  }
  return null;
}

export async function mergeCarts(dispatch, cartIds) {
  try {
    setCartInfoAction(dispatch, await mergeCartsRequest(cartIds));
  } catch (error) {
    // @todo show error message
    console.log({ error });
  }
}

export async function getCartInfoAfterMergeAction(dispatch, guestCartId) {
  try {
    let customerCartId = await getCustomerCartIdAction();

    if (!customerCartId) {
      customerCartId = await createEmptyCart();
    }

    if (guestCartId !== customerCartId) {
      await mergeCarts(dispatch, {
        sourceCartId: guestCartId,
        destinationCartId: customerCartId,
      });
    }

    LS.saveCartId(customerCartId);
  } catch (error) {
    // @todo show error message
    console.log({ error });
  }
}
