import _get from 'lodash.get';
import { __ } from '../../../i18n';

export default function restSetGuestPaymentMethodModifier(result) {
  const message = _get(result, 'message');

  if (message) {
    throw new Error(
      __(
        'Payment method selected is not available. Please choose another payment method.'
      )
    );
  }

  return {
    order_number: result,
  };
}
