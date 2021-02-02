import { UPDATE_CART_ITEM_MUTATION } from './mutation';
import modifier from './modifier';
import { config } from '../../../config';
import sendRequest from '../../sendRequest';

export default async function updateCartItems(cartItem) {
  const variables = { ...cartItem, cartId: config.cartId };

  return modifier(
    await sendRequest({ query: UPDATE_CART_ITEM_MUTATION, variables })
  );
}
