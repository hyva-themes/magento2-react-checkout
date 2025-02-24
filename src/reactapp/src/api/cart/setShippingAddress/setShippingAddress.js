import sendRequest from '../../sendRequest';
import modifier from '../fetchGuestCart/modifier';
import LocalStorage from '../../../utils/localStorage';
import { getShippingAddressMutation } from './mutation';

export default async function setShippingAddress(dispatch, shippingAddress) {
  const variables = { ...shippingAddress, cartId: LocalStorage.getCartId() };

  return modifier(
    await sendRequest(dispatch, {
      query: getShippingAddressMutation(variables),
      variables,
    }),
    'setShippingAddressesOnCart.cart'
  );
}
