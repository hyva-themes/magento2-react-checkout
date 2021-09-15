import modifier from './modifier';
import sendRequest from '../../sendRequest';
import PLACE_ORDER_MUTATION from './mutation';
import LocalStorage from '../../../utils/localStorage';

export default async function placeOrder(dispatch) {
  const variables = { cartId: LocalStorage.getCartId() };

  return modifier(
    await sendRequest(dispatch, { query: PLACE_ORDER_MUTATION, variables })
  );
}
