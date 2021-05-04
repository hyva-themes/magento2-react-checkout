import { UPDATE_CART_ITEM_MUTATION } from './mutation';
import modifier from './modifier';
import sendRequest from '../../sendRequest';
import LocalStorage from '../../../utils/localStorage';

export default async function updateCartItems(cartItem) {
  const variables = { ...cartItem, cartId: LocalStorage.getCartId() };

  return modifier(
    await sendRequest({ query: UPDATE_CART_ITEM_MUTATION, variables })
  );
}
