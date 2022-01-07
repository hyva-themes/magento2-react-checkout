import {
  applyCouponCodeToCartRequest,
  removeCouponCodeFromCartRequest,
} from '../../../api';
import { SET_CART_INFO } from '../cart/types';

export async function applyCouponCodeAction(dispatch, appDispatch, couponCode) {
  const cartInfo = await applyCouponCodeToCartRequest(appDispatch, couponCode);

  dispatch({
    type: SET_CART_INFO,
    payload: cartInfo,
  });

  return cartInfo;
}

export async function removeCouponCodeAction(dispatch, appDispatch) {
  const cartInfo = await removeCouponCodeFromCartRequest(appDispatch);

  dispatch({
    type: SET_CART_INFO,
    payload: cartInfo,
  });

  return cartInfo;
}
