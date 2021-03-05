import fetchGuestCartModifier from '../fetchGuestCart/modifier';

export default function setCustomerAddressOnBillingModifier(result) {
  return fetchGuestCartModifier(result, 'setBillingAddressOnCart.cart');
}
