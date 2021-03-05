import LocalStorage from '../../../utils/localStorage';
import { SET_CART_INFO } from './types';
import {
  createEmptyCartRequest,
  fetchCustomerAddressListRequest,
  fetchCustomerCartRequest,
  fetchGuestCartRequest,
  mergeCartsRequest,
} from '../../../api';
import { _makePromise } from '../../../utils';
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
  let cartInfo = {};

  try {
    let customerCartId = await getCustomerCartIdAction();

    if (!customerCartId) {
      customerCartId = await createEmptyCart();
    }

    if (guestCartId && customerCartId && guestCartId !== customerCartId) {
      cartInfo = await mergeCarts(dispatch, {
        sourceCartId: guestCartId,
        destinationCartId: customerCartId,
      });
    } else {
      cartInfo = await getGuestCartInfoAction(dispatch);
    }

    LocalStorage.saveCartId(customerCartId);
  } catch (error) {
    // @todo show error message
    console.log({ error });
  }

  return cartInfo;
}

export async function setCustomerDefaultAddressToCartAction(
  dispatch,
  cartInfo
) {
  try {
    const promises = [];
    let customerAddressInfo;

    // if empty, that indicates there is no shipping address for the cart
    if (!isCartHoldingShippingAddress(cartInfo)) {
      customerAddressInfo = await fetchCustomerAddressListRequest();
      const { defaultShippingAddress } = customerAddressInfo;

      if (defaultShippingAddress) {
        promises.push(
          _makePromise(
            setCustomerAddrAsShippingAddrAction(
              dispatch,
              defaultShippingAddress
            )
          )
        );
      }
    }

    if (!isCartHoldingBillingAddress(cartInfo)) {
      if (!customerAddressInfo) {
        customerAddressInfo = await fetchCustomerAddressListRequest();
      }

      const { defaultBillingAddress } = customerAddressInfo;

      if (defaultBillingAddress) {
        promises.push(
          _makePromise(
            setCustomerAddrAsBillingAddrAction(dispatch, defaultBillingAddress)
          )
        );
      }
    }

    if (promises.length) {
      await Promise.all(promises);
    }
  } catch (error) {
    // @todo show error message
    console.log({ error });
  }
}
