import _get from 'lodash.get';
import { SHIPPING_ADDR_FORM } from '../../../../config';

export function formHasBillingAddress(values) {
  const cartBillingAddress = _get(values, SHIPPING_ADDR_FORM, {});
  return !!(cartBillingAddress.country && cartBillingAddress.firstname);
}
