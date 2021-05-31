import _get from 'lodash.get';

import { __ } from '../../../i18n';
import {
  _cleanObjByKeys,
  _isArrayEmpty,
  _isObjEmpty,
  _keys,
  _objToArray,
  _toString,
} from '../../../utils';
import LocalStorage from '../../../utils/localStorage';

export * from './components/billingAddressCardListUtil';
export * from './components/CancelButtonUtil';
export * from './common';

export const billingAddressFormInitValues = {
  company: '',
  firstname: '',
  lastname: '',
  street: [''],
  phone: '',
  zipcode: '',
  city: '',
  region: '',
  country: '',
  isSameAsBilling: true,
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
        __('{} zipcode: {}', countryCode, zipcode),
        __('phone: {}', phone),
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
    isCartHoldingBillingAddress(cartInfo)
  );
}

export function isCartHoldingShippingAddress(cartInfo) {
  const cartBillingAddress = _get(cartInfo, 'shipping_addresses');

  return !_isObjEmpty(cartBillingAddress);
}

export function isCartHoldingBillingAddress(cartInfo) {
  const cartBillingAddress = _get(cartInfo, 'billing_address');

  return (
    !!_get(cartBillingAddress, 'firstname') &&
    !!_get(cartBillingAddress, 'country')
  );
}

export function getFirstItemFromBillingAddrList(addressList) {
  return _isObjEmpty(addressList)
    ? addressList
    : addressList[_keys(addressList)[0]];
}

export function getFirstItemIdFromBillingAddrList(addressList) {
  const addressIds = _keys(addressList);

  return _isArrayEmpty(addressIds) ? '' : addressIds[0];
}

export function prepareFormAddressFromAddressListById(
  billingAddressList,
  selectedAddressId
) {
  if (
    !selectedAddressId ||
    !billingAddressList ||
    _isObjEmpty(billingAddressList)
  ) {
    return;
  }
  const address = { ..._get(billingAddressList, selectedAddressId, {}) };
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
    'isDefaultBilling',
    'middlename',
    'regionCode',
    'regionLabel',
  ];

  return {
    ...billingAddressFormInitValues,
    ..._cleanObjByKeys(address, keysToRemove),
    selectedAddress: selectedAddressId,
  };
}

export function prepareCartAddressWithId(addressList, addressId) {
  return {
    [addressId]: {
      id: addressId,
      ...getFirstItemFromBillingAddrList(addressList),
    },
  };
}

export function customerHasAddress(customerAddressList) {
  return !!_keys(customerAddressList).length;
}

export function saveCustomerAddressToLocalStorage(addressId, isBillingSame) {
  LocalStorage.saveBillingSameAsShipping(isBillingSame);
  LocalStorage.saveCustomerBillingAddressId(addressId);

  if (isBillingSame) {
    LocalStorage.saveCustomerBillingAddressId(addressId);
  } else {
    const selectedShippingAddrId = LocalStorage.getCustomerShippingAddressId();

    if (selectedShippingAddrId === addressId) {
      LocalStorage.saveBillingSameAsShipping(true);
    }
  }
}
