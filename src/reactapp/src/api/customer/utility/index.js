import { get as _get } from 'lodash-es';

export function capitalize(str) {
  if (!str) {
    return '';
  }
  if (str.length === 1) {
    return str[0].toUpperCase();
  }
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

export function prepareFullName(customerData) {
  const firstName = capitalize(_get(customerData, 'firstname', '') || '');
  const middleName = capitalize(_get(customerData, 'middlename', '') || '');
  const lastName = capitalize(_get(customerData, 'lastname', '') || '');

  return `${firstName} ${middleName} ${lastName}`.replace(/\s+/g, ' ').trim();
}
