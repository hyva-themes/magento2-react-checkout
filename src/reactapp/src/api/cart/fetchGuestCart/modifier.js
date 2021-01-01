import _get from 'lodash.get';
import { modifyShippingAddressList } from '../setShippingAddress/modifier';

export default function fetchGuestCartModifier(result) {
  const cartData = _get(result, 'data.cart', {});
  const shippingAddresses = _get(cartData, 'shipping_addresses', []);

  return {
    email: cartData.email,
    shipping_addresses: modifyShippingAddressList(shippingAddresses),
  };
}
