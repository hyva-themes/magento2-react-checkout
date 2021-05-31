import _get from 'lodash.get';

import {
  _cleanObjByKeys,
  _isArrayEmpty,
  _isObjEmpty,
  _keys,
  _objToArray,
  _toString,
} from './index';
import LocalStorage from './localStorage';

export const shippingAddressFormInitValues = {
  company: '',
  firstname: 'rajeev',
  lastname: '',
  street: [''],
  phone: '',
  zipcode: '',
  city: '',
  region: '',
  country: 'IN',
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
  addressList,
  selectedAddressId
) {
  if (!selectedAddressId || !addressList || _isObjEmpty(addressList)) {
    return;
  }
  const address = { ..._get(addressList, selectedAddressId, {}) };
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

  // eslint-disable-next-line consistent-return
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

export function saveCustomerAddressToLocalStorage(addressId, isBillingSame) {
  LocalStorage.saveBillingSameAsShipping(isBillingSame);
  LocalStorage.saveCustomerShippingAddressId(addressId);

  if (isBillingSame) {
    LocalStorage.saveCustomerBillingAddressId(addressId);
  }
}

export function isCartBillingAddressValid(address) {
  return address && address.firstname && address.country;
}

export function isCartAddressValid(address) {
  return address && address.firstname && address.country;
}

export function isValidCustomerAddressId(addressId) {
  return !Number.isNaN(addressId);
}
