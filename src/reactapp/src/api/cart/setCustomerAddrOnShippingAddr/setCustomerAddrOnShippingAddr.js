import { SET_CUSTOMER_ADDR_ON_CART_SHIPPING_ADDR_MUTATION } from './mutation';
import modifier from './modifier';
import sendRequest from '../../sendRequest';
import LocalStorage from '../../../utils/localStorage';

export default async function setCustomerAddrOnShippingAddr(customerAddressId) {
  const variables = { customerAddressId, cartId: LocalStorage.getCartId() };

  return modifier(
    await sendRequest({
      query: SET_CUSTOMER_ADDR_ON_CART_SHIPPING_ADDR_MUTATION,
      variables,
    })
  );
}
