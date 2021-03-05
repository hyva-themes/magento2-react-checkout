import sendRequest from '../../sendRequest';
import modifier from './modifier';
import { GET_CUSTOMER_ADDRESS_LIST_QUERY } from './query';

export default async function fetchCustomerAddresses() {
  return modifier(
    await sendRequest({ query: GET_CUSTOMER_ADDRESS_LIST_QUERY })
  );
}
