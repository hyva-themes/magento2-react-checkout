import _get from 'lodash.get';
import { __mt } from '../../../i18n';

export default function restSetMyPaymentMethod(result) {
  const message = _get(result, 'message');

  if (message) {
    throw new Error(
      __mt(
        'Payment method selected is not available. Please choose another payment method.'
      )
    );
  }

  return {
    order_number: result,
  };
}
