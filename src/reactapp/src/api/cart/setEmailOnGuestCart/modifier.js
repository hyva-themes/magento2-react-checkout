import _get from 'lodash.get';

export default function setEmailOnGuestCartModifier(result) {
  return _get(result, 'data.setGuestEmailOnCart.cart', {});
}
