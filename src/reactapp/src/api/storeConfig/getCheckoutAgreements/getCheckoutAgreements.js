import { GET_CHECKOUT_AGREEMENTS_QUERY } from './query';
import modifier from './modifier';
import sendRequest from '../../sendRequest';

export default async function getCheckoutAgreements() {
  return modifier(await sendRequest({ query: GET_CHECKOUT_AGREEMENTS_QUERY }));
}
