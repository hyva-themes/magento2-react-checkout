import { SET_CUSTOMER_ADDR_ON_CART_SHIPPING_ADDR_MUTATION } from './mutation';
import modifier from '../fetchGuestCart/modifier';
import { config } from '../../../config';
import sendRequest from '../../sendRequest';

export default async function setBillingAddress(customerAddressId) {
  const variables = { customerAddressId, cartId: config.cartId };

  return modifier(
    await sendRequest({
      query: SET_CUSTOMER_ADDR_ON_CART_SHIPPING_ADDR_MUTATION,
      variables,
    })
  );
}
