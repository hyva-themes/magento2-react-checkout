import sendRequest from '../../../sendRequest';
import modifier from '../../fetchGuestCart/modifier';
import { REMOVE_COUPON_CODE_MUTATION } from './mutation';
import LocalStorage from '../../../../utils/localStorage';

export default async function removeCouponCode(dispatch, couponCode) {
  const variables = { couponCode, cartId: LocalStorage.getCartId() };

  return modifier(
    await sendRequest(dispatch, {
      query: REMOVE_COUPON_CODE_MUTATION,
      variables,
    }),
    'removeCouponFromCart.cart'
  );
}
