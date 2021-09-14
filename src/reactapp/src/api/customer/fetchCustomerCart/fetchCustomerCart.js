import modifier from './modifier';
import sendRequest from '../../sendRequest';
import { GET_CUSTOMER_CART_QUERY } from './query';

export default async function fetchCustomerCart(dispatch) {
  return modifier(
    await sendRequest(dispatch, { query: GET_CUSTOMER_CART_QUERY })
  );
}
