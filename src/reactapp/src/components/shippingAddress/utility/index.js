import _get from 'lodash.get';

import {
  _cleanObjByKeys,
  _isArrayEmpty,
  _isObjEmpty,
  _keys,
  _objToArray,
  _toString,
} from '../../../utils';

export * from './components/shippingAddressFormUtil';
export * from './components/shippingAddressCardListUtil';
export * from './components/shippingAddressWrapperUtil';
export * from './components/CancelButtonUtil';
export * from './common';

export const shippingAddressFormInitValues = {
  company: '',
  firstname: '',
  lastname: '',
  street: [''],
  phone: '',
  zipcode: '',
  city: '',
  region: '',
  country: '',
  isSameAsShipping: true,
  selectedAddress: '',
};

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

export function prepareFormAddressFromAddressListById(
  shippingAddressList,
  selectedAddressId
) {
  const address = { ..._get(shippingAddressList, selectedAddressId, {}) };
  const { countryCode, regionCode } = address;

  if (countryCode) {
    address.country = countryCode;
  }
  if (regionCode) {
    address.region = regionCode;
  }

  const keysToRemove = [
    'countryCode',
    'fullName',
    'isDefaultBilling',
    'isDefaultShipping',
    'middlename',
    'regionCode',
    'regionLabel',
  ];

  return {
    ...shippingAddressFormInitValues,
    ..._cleanObjByKeys(address, keysToRemove),
    selectedAddress: selectedAddressId,
  };
}

export function prepareCartAddressWithId(addressList, addressId) {
  return {
    [addressId]: {
      id: addressId,
      ...getFirstItemFromShippingAddrList(addressList),
    },
  };
}

export function isCartBillingAddressValid(cartBillingAddress) {
  return (
    cartBillingAddress &&
    cartBillingAddress.firstname &&
    cartBillingAddress.country
  );
}

export function customerHasAddress(customerAddressList) {
  return !!_keys(customerAddressList).length;
}
