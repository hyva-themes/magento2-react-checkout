import modifier from './modifier';
import sendRequest from '../../sendRequest';
import { UPDATE_CART_ITEM_MUTATION } from './mutation';
import LocalStorage from '../../../utils/localStorage';

export default async function updateCartItems(dispatch, cartItem) {
  const variables = { ...cartItem, cartId: LocalStorage.getCartId() };

  return modifier(
    await sendRequest(dispatch, { query: UPDATE_CART_ITEM_MUTATION, variables })
  );
}
