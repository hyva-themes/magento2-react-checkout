import _get from 'lodash.get';
import { modifyBillingAddressData } from '../setBillingAddress/modifier';
import {
  modifyShippingAddressList,
  modifyShippingMethods,
} from '../setShippingAddress/modifier';

export default function fetchGuestCartModifier(result) {
  const cartData = _get(result, 'data.cart', {});
  const shippingAddresses = _get(cartData, 'shipping_addresses', []);
  const billingAddress = _get(cartData, 'billing_address', {});

  return {
    email: cartData.email,
    billing_address: modifyBillingAddressData(billingAddress),
    shipping_addresses: modifyShippingAddressList(shippingAddresses),
    shipping_methods: modifyShippingMethods(shippingAddresses),
  };
}
