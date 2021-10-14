import _get from 'lodash.get';

import env from './env';
import { __ } from '../i18n';
import RootElement from './rootElement';
import LocalStorage from './localStorage';
import { _cleanObjByKeys, _toString } from './index';
import { BILLING_ADDR_FORM, config } from '../config';

export const initialCountry =
  env.defaultCountry ||
  RootElement.getDefaultCountryId() ||
  config.defaultCountry;

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
        __('%1 %1', zipcode, city),
        regionLabel || _get(countryRegion, 'name'),
        countryCode || country,
        __('Phone: %1', phone),
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
