import { GET_GUEST_CART_QUERY } from './query';
import modifier from './modifier';
import sendRequest from '../../sendRequest';
import LocalStorage from '../../../utils/localStorage';

export default async function fetchGuestCart() {
  const variables = { cartId: LocalStorage.getCartId() };

  return modifier(
    await sendRequest({ query: GET_GUEST_CART_QUERY, variables })
  );
}
