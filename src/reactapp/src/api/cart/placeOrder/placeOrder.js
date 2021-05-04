import PLACE_ORDER_MUTATION from './mutation';
import modifier from './modifier';
import sendRequest from '../../sendRequest';
import LocalStorage from '../../../utils/localStorage';

export default async function placeOrder() {
  const variables = { cartId: LocalStorage.getCartId() };

  return modifier(
    await sendRequest({ query: PLACE_ORDER_MUTATION, variables })
  );
}
