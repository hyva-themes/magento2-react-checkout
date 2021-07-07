import modifier from './modifier';
import sendRequest from '../../sendRequest';
import LocalStorage from '../../../utils/localStorage';
import { SET_CUSTOMER_ADDR_ON_CART_BILLING_ADDR_MUTATION } from './mutation';

export default async function setCustomerAddressOnBilling(
  dispatch,
  customerAddressId,
  sameAsShipping
) {
  const variables = {
    customerAddressId,
    sameAsShipping,
    cartId: LocalStorage.getCartId(),
  };

  return modifier(
    await sendRequest(dispatch, {
      query: SET_CUSTOMER_ADDR_ON_CART_BILLING_ADDR_MUTATION,
      variables,
    })
  );
}
