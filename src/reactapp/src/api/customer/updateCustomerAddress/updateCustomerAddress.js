import modifier from './modifier';
import sendRequest from '../../sendRequest';
import { UPDATE_CUSTOMER_ADDRESS_MUTATION } from './mutation';

export default async function fetchCustomerAddresses(
  dispatch,
  addressId,
  customerAddress
) {
  const variables = { id: Number(addressId), customerAddress };

  return modifier(
    await sendRequest(dispatch, {
      variables,
      query: UPDATE_CUSTOMER_ADDRESS_MUTATION,
    })
  );
}
