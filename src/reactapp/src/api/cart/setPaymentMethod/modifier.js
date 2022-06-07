import { get as _get } from 'lodash-es';

import { __ } from '../../../i18n';
import { _isArrayEmpty } from '../../../utils';
import fetchGuestCartModifier from '../fetchGuestCart/modifier';

export default function setPaymentMethodModifier(result) {
  const errors = _get(result, 'errors');

  if (errors && !_isArrayEmpty(errors)) {
    throw new Error(__('Saving payment method failed.'));
  }

  return fetchGuestCartModifier(result, 'setPaymentMethodOnCart.cart');
}
