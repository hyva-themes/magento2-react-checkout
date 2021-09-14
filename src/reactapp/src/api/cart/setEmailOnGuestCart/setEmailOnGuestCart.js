import mutation from './mutation';
import modifier from './modifier';
import sendRequest from '../../sendRequest';
import LocalStorage from '../../../utils/localStorage';

export default async function setEmailOnGuestCart(dispatch, email) {
  const query = mutation();
  const variables = { email, cartId: LocalStorage.getCartId() };

  return modifier(await sendRequest(dispatch, { query, variables }));
}
