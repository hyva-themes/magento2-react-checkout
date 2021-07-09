import modifier from './modifier';
import sendRequest from '../../sendRequest';
import { GET_CUSTOMER_INFO_QUERY } from './query';

export default async function fetchCustomerAddresses(dispatch) {
  return modifier(
    await sendRequest(dispatch, { query: GET_CUSTOMER_INFO_QUERY })
  );
}
