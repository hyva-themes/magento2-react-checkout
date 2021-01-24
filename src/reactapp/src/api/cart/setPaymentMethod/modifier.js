import fetchGuestCartModifier from '../fetchGuestCart/modifier';

export default function setPaymentMehodModifier(result) {
  return fetchGuestCartModifier(result, 'setPaymentMethodOnCart.cart');
}
