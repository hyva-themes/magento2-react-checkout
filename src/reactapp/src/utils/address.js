import _get from 'lodash.get';

import { _isObjEmpty, _objToArray } from './index';

export function modifyAddrObjListToArrayList(addressList) {
  return _objToArray(addressList).map(addr => {
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
      id,
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
