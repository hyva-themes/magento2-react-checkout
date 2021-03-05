import sendRequest from '../../sendRequest';
import modifier from './modifier';
import { GET_CUSTOMER_INFO_QUERY } from './query';

export default async function fetchCustomerAddresses() {
  return modifier(await sendRequest({ query: GET_CUSTOMER_INFO_QUERY }));
}
