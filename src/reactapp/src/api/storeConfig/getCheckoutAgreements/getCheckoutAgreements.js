import modifier from './modifier';
import sendRequest from '../../sendRequest';
import { GET_CHECKOUT_AGREEMENTS_QUERY } from './query';

export default async function getCheckoutAgreements(dispatch) {
  return modifier(
    await sendRequest(dispatch, { query: GET_CHECKOUT_AGREEMENTS_QUERY })
  );
}
