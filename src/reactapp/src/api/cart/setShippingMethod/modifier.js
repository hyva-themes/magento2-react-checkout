import fetchGuestCartModifier from '../fetchGuestCart/modifier';

export default function setShippingMethodModifier(result) {
  return fetchGuestCartModifier(result, 'setShippingMethodsOnCart.cart');
}
