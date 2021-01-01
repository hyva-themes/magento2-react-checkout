import _get from 'lodash.get';

export default function fetchGuestCartModifier(result) {
  const cartData = _get(result, 'data.cart', {});

  return {
    email: cartData.email,
  };
}
