import _get from 'lodash.get';

import { __mt } from '../i18n';
import LocalStorage from './localStorage';
import { BILLING_ADDR_FORM } from '../config';
import { _cleanObjByKeys, _toString } from './index';

export const billingSameAsShippingField = `${BILLING_ADDR_FORM}.isSameAsShipping`;

export function isCartAddressValid(address) {
  return !!(address && address.firstname && address.country);
}

export function isValidCustomerAddressId(addressId) {
  // Number.isNaN should not use here. both functions works differently.
  // eslint-disable-next-line no-restricted-globals
  return addressId && !isNaN(addressId);
}

export function formatAddressListToCardData(addressList, stateList) {
  return addressList.map((addr) => {
    const {
      id,
      city = '',
      phone = '',
      street = [],
      region = '',
      zipcode = '',
      company = '',
      country = '',
      fullName = '',
      regionLabel = '',
      countryCode = '',
    } = addr;
    const countryRegions = _get(stateList, `${country}`, []);
    const countryRegion = countryRegions.find((state) => state.code === region);
    return {
      id: _toString(id),
      address: [
        fullName,
        company,
        ...street,
        city,
        regionLabel || _get(countryRegion, 'name'),
        __mt('%1 zipcode: %1', countryCode || country, zipcode),
        __mt('phone: %1', phone),
      ].filter((i) => !!i),
    };
  });
}

const addressInitValues = {
  company: '',
  firstname: '',
  lastname: '',
  street: [''],
  phone: '',
  zipcode: '',
  city: '',
  region: '',
  country: '',
};

export function prepareFormAddressFromCartAddress(address, selectedAddressId) {
  const newAddress = { ...address };
  const { countryCode, regionCode } = address;

  if (countryCode) {
    newAddress.country = countryCode;
  }
  if (regionCode) {
    newAddress.region = regionCode;
  }
  if (selectedAddressId) {
    newAddress.selectedAddress = selectedAddressId;
  }

  const keysToRemove = [
    'fullName',
    'middlename',
    'regionCode',
    'countryCode',
    'regionLabel',
    'isDefaultBilling',
    'isDefaultShipping',
  ];

  return {
    ...addressInitValues,
    ..._cleanObjByKeys(newAddress, keysToRemove),
  };
}

export function isMostRecentAddress(addressId) {
  const recentAddressList = LocalStorage.getMostlyRecentlyUsedAddressList();

  return !!recentAddressList[addressId];
}
