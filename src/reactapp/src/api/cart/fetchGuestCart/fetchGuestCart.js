import { GET_GUEST_CART_QUERY } from './query';
import modifier from './modifier';
import sendRequest from '../../sendRequest';

export default async function setEmailOnGuestCart() {
  return modifier(await sendRequest({ query: GET_GUEST_CART_QUERY }));
}
