import _get from 'lodash.get';
import { BILLING_ADDR_FORM } from '../../../../config';
import { _objToArray, _toString } from '../../../../utils';
import { CART_BILLING_ADDRESS } from '../common';

function formatAddressListToCardData(addressList) {
  return addressList.map(addr => {
    const {
      id,
      fullName = '',
      street = [],
      city = '',
      regionLabel = '',
      countryCode = '',
      zipcode = '',
      phone = '',
      company = '',
    } = addr;
    return {
      id: _toString(id),
      address: [
        fullName,
        company,
        ...street,
        city,
        regionLabel,
        `${countryCode} zipcode: ${zipcode}`,
        `phone: ${phone}`,
      ].filter(i => !!i),
    };
  });
}

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

export function prepareBillingAddressCardList(
  values,
  customerAddressList,
  regionData,
  customerAddressSelected
) {
  const cartBillingAddress = _get(values, BILLING_ADDR_FORM, {});
  const { country } = cartBillingAddress;
  let cartBillingAddrCardInfo = [];

  if (!customerAddressSelected) {
    cartBillingAddrCardInfo = formatAddressListToCardData([
      {
        ...cartBillingAddress,
        fullName: prepareFullName(cartBillingAddress),
        id: CART_BILLING_ADDRESS,
        countryCode: country,
        regionLabel: _get(regionData, 'name'),
      },
    ]);
  }

  const customerAddressCardInfo = formatAddressListToCardData(
    _objToArray(customerAddressList)
  );

  return [...cartBillingAddrCardInfo, ...customerAddressCardInfo];
}
