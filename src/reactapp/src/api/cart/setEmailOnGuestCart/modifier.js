import { get as _get } from 'lodash-es';

export default function setEmailOnGuestCartModifier(result) {
  return _get(result, 'data.setGuestEmailOnCart.cart', {});
}
