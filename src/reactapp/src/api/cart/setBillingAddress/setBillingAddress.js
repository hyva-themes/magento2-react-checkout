import sendRequest from '../../sendRequest';
import modifier from '../fetchGuestCart/modifier';
import { getBillingAddressMutation } from './mutation';
import LocalStorage from '../../../utils/localStorage';

export default async function setBillingAddress(
  dispatch,
  billingAddress,
  isVirtualCart
) {
  const variables = { ...billingAddress, cartId: LocalStorage.getCartId() };

  return modifier(
    await sendRequest(dispatch, {
      query: getBillingAddressMutation(variables, isVirtualCart),
      variables,
    }),
    'setBillingAddressOnCart.cart'
  );
}
