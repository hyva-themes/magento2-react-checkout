import sendRequest from '../../sendRequest';
import modifier from './modifier';
import { CREATE_EMPTY_CART_MUTATION } from './mutation';

export default async function createEmptyCart() {
  return modifier(await sendRequest({ query: CREATE_EMPTY_CART_MUTATION }));
}
