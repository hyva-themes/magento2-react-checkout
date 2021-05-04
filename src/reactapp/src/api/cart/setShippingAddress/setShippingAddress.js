import { SET_SHIPPING_ADDR_MUTATION } from './mutation';
import modifier from '../fetchGuestCart/modifier';
import sendRequest from '../../sendRequest';
import LocalStorage from '../../../utils/localStorage';

export default async function setShippingAddress(shippingAddress) {
  const variables = { ...shippingAddress, cartId: LocalStorage.getCartId() };

  return modifier(
    await sendRequest({ query: SET_SHIPPING_ADDR_MUTATION, variables }),
    'setShippingAddressesOnCart.cart'
  );
}
