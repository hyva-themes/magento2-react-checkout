import getQuery from './query';
import modifier from './modifier';
import sendRequest from '../sendRequest';
import LocalStorage from '../../utils/localStorage';

export default async function aggregatedQuery(dispatch) {
  const token = LocalStorage.getCustomerToken();
  const variables = { cartId: LocalStorage.getCartId() };
  const query = getQuery(token);

  return modifier(await sendRequest(dispatch, { query, variables }));
}
