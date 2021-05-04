import { SET_CART_BILLING_ADDRESS_MUTATION } from './mutation';
import modifier from '../fetchGuestCart/modifier';
import sendRequest from '../../sendRequest';
import LocalStorage from '../../../utils/localStorage';

export default async function setBillingAddress(billingAddress) {
  const variables = { ...billingAddress, cartId: LocalStorage.getCartId() };

  return modifier(
    await sendRequest({ query: SET_CART_BILLING_ADDRESS_MUTATION, variables }),
    'setBillingAddressOnCart.cart'
  );
}
