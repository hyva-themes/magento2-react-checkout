import sendRequest from '../../sendRequest';
import modifier from './modifier';
import { UPDATE_CUSTOMER_ADDRESS_MUTATION } from './mutation';

export default async function fetchCustomerAddresses(
  addressId,
  customerAddress
) {
  const variables = { id: Number(addressId), customerAddress };

  return modifier(
    await sendRequest({ query: UPDATE_CUSTOMER_ADDRESS_MUTATION, variables })
  );
}
