import { SET_CUSTOMER_ADDR_ON_CART_BILLING_ADDR_MUTATION } from './mutation';
import modifier from './modifier';
import sendRequest from '../../sendRequest';
import LocalStorage from '../../../utils/localStorage';

export default async function setCustomerAddressOnBilling(
  customerAddressId,
  sameAsShipping
) {
  const variables = {
    customerAddressId,
    sameAsShipping,
    cartId: LocalStorage.getCartId(),
  };

  return modifier(
    await sendRequest({
      query: SET_CUSTOMER_ADDR_ON_CART_BILLING_ADDR_MUTATION,
      variables,
    })
  );
}
