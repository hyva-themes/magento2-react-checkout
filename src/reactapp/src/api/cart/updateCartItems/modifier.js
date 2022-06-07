import { get as _get } from 'lodash-es';

import fetchGuestCartModifier from '../fetchGuestCart/modifier';

export default function updateCartItemsModifier(result) {
  const errorMessage = _get(result, 'errors.0.message', false);

  if (errorMessage) {
    throw new Error(errorMessage);
  }

  return fetchGuestCartModifier(result, 'updateCartItems.cart');
}
