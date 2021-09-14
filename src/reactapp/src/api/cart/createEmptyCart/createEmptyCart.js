import modifier from './modifier';
import sendRequest from '../../sendRequest';
import { CREATE_EMPTY_CART_MUTATION } from './mutation';

export default async function createEmptyCart(dispatch) {
  return modifier(
    await sendRequest(dispatch, { query: CREATE_EMPTY_CART_MUTATION })
  );
}
