import modifier from './modifier';
import sendRequest from '../../sendRequest';
import { GET_GUEST_CART_QUERY } from './query';
import LocalStorage from '../../../utils/localStorage';

export default async function fetchGuestCart(dispatch) {
  const variables = { cartId: LocalStorage.getCartId() };

  return modifier(
    await sendRequest(dispatch, { query: GET_GUEST_CART_QUERY, variables })
  );
}
