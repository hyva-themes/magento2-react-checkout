import _get from 'lodash.get';
import { _keys } from '.';

export function capitalize(str) {
  if (typeof str !== 'string') {
    return '';
  }

  return str[0].toUpperCase() + str.slice(1);
}

export function prepareFullName(customerData) {
  const firstName = capitalize(_get(customerData, 'firstname', '') || '');
  const middleName = capitalize(_get(customerData, 'middlename', '') || '');
  const lastName = capitalize(_get(customerData, 'lastname', '') || '');

  return `${firstName} ${middleName} ${lastName}`.replace(/\s+/g, ' ').trim();
}

export function customerHasAddress(customerAddressList) {
  return !!_keys(customerAddressList).length;
}
