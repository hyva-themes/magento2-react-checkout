import _get from 'lodash.get';

import { _isArrayEmpty, _isObjEmpty, _keys, _objToArray } from './index';

export function modifyAddrObjListToArrayList(addressList) {
  const newList = _objToArray(addressList).map(addr => {
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
      id: (id || '').toString(),
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

  // if a new address entry there, then we want to show it first
  if (addressList.new) {
    return newList.reverse();
  }

  return newList;
}

export function isCartHoldingAddressInfo(cartInfo) {
  return (
    isCartHoldingBillingAddress(cartInfo) &&
    isCartHoldingShippingAddress(cartInfo)
  );
}

export function isCartHoldingShippingAddress(cartInfo) {
  const cartShippingAddress = _get(cartInfo, 'shipping_addresses');

  return !_isObjEmpty(cartShippingAddress);
}

export function isCartHoldingBillingAddress(cartInfo) {
  const cartBillingAddress = _get(cartInfo, 'billing_address');

  return (
    !!_get(cartBillingAddress, 'firstname') &&
    !!_get(cartBillingAddress, 'country')
  );
}

export function getFirstItemFromShippingAddrList(addressList) {
  return _isObjEmpty(addressList)
    ? addressList
    : addressList[_keys(addressList)[0]];
}

export function getFirstItemIdFromShippingAddrList(addressList) {
  const addressIds = _keys(addressList);

  return _isArrayEmpty(addressIds) ? '' : addressIds[0];
}
