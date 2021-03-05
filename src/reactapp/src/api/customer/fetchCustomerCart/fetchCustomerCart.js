import sendRequest from '../../sendRequest';
import modifier from './modifier';
import { GET_CUSTOMER_CART_QUERY } from './query';

export default async function fetchCustomerCart() {
  return modifier(await sendRequest({ query: GET_CUSTOMER_CART_QUERY }));
}
