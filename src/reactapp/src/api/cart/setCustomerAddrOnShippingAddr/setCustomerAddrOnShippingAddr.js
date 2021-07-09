import modifier from './modifier';
import sendRequest from '../../sendRequest';
import LocalStorage from '../../../utils/localStorage';
import { SET_CUSTOMER_ADDR_ON_CART_SHIPPING_ADDR_MUTATION } from './mutation';

export default async function setCustomerAddrOnShippingAddr(
  dispatch,
  customerAddressId
) {
  const variables = { customerAddressId, cartId: LocalStorage.getCartId() };

  return modifier(
    await sendRequest(dispatch, {
      query: SET_CUSTOMER_ADDR_ON_CART_SHIPPING_ADDR_MUTATION,
      variables,
    })
  );
}
