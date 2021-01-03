import _get from 'lodash.get';
import { modifyBillingAddressData } from '../setBillingAddress/modifier';
import { modifyShippingAddressList } from '../setShippingAddress/modifier';

export default function fetchGuestCartModifier(result) {
  const cartData = _get(result, 'data.cart', {});
  const shippingAddresses = _get(cartData, 'shipping_addresses', []);
  const billingAddress = _get(cartData, 'billing_address', {});

  return {
    email: cartData.email,
    shipping_addresses: modifyShippingAddressList(shippingAddresses),
    billing_address: modifyBillingAddressData(billingAddress),
  };
}
