import getQuery from './query';
import modifier from './modifier';
import sendRequest from '../sendRequest';
import LocalStorage from '../../utils/localStorage';
import { initialCountry } from '../../utils/address';

export default async function aggregatedQuery(dispatch) {
  const token = LocalStorage.getCustomerToken();
  const variables = {
    countryId: initialCountry,
    cartId: LocalStorage.getCartId(),
  };
  const query = getQuery(token, initialCountry);

  return modifier(
    await sendRequest(dispatch, { query, variables }),
    token,
    initialCountry
  );
}
