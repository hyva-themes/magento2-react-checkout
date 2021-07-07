import sendRequest from '../../sendRequest';
import modifier from '../fetchGuestCart/modifier';
import LocalStorage from '../../../utils/localStorage';
import { SET_CART_BILLING_ADDRESS_MUTATION } from './mutation';
export default async function setBillingAddress(dispatch, billingAddress) {
  const variables = { ...billingAddress, cartId: LocalStorage.getCartId() };

  return modifier(
    await sendRequest(dispatch, {
      query: SET_CART_BILLING_ADDRESS_MUTATION,
      variables,
    }),
    'setBillingAddressOnCart.cart'
  );
}
