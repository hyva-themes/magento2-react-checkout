import fetchGuestCartModifier from '../fetchGuestCart/modifier';

export default function setShippingMehodModifier(result) {
  return fetchGuestCartModifier(result, 'setShippingMethodsOnCart.cart');
}
