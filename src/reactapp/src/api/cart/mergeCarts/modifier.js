import _get from 'lodash/get';

import fetchGuestCartModifier from '../fetchGuestCart/modifier';

export default function modifyMergeCarts(result) {
  if (result.errors) {
    return {
      error: true,
      message: _get(result, 'errors.0.message'),
    };
  }

  return fetchGuestCartModifier(result, 'mergeCarts');
}
