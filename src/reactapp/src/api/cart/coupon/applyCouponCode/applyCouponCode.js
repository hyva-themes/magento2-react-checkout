import sendRequest from '../../../sendRequest';
import modifier from '../../fetchGuestCart/modifier';
import { APPLY_COUPON_CODE_MUTATION } from './mutation';
import LocalStorage from '../../../../utils/localStorage';

export default async function applyCouponCode(dispatch, couponCode) {
  const variables = { couponCode, cartId: LocalStorage.getCartId() };

  return modifier(
    await sendRequest(dispatch, {
      query: APPLY_COUPON_CODE_MUTATION,
      variables,
    }),
    'applyCouponToCart.cart'
  );
}
