import { SET_CUSTOMER_ADDR_ON_CART_BILLING_ADDR_MUTATION } from './mutation';
import modifier from './modifier';
import { config } from '../../../config';
import sendRequest from '../../sendRequest';

export default async function setCustomerAddressOnBilling(
  customerAddressId,
  sameAsShipping
) {
  const variables = {
    customerAddressId,
    sameAsShipping,
    cartId: config.cartId,
  };

  return modifier(
    await sendRequest({
      query: SET_CUSTOMER_ADDR_ON_CART_BILLING_ADDR_MUTATION,
      variables,
    })
  );
}
