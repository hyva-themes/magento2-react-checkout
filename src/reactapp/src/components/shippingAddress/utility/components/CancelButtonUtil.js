import _get from 'lodash.get';
import { SHIPPING_ADDR_FORM } from '../../../../config';

export function formHasShippingAddress(values) {
  const cartShippingAddress = _get(values, SHIPPING_ADDR_FORM, {});
  return !!(cartShippingAddress.country && cartShippingAddress.firstname);
}
