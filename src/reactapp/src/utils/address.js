import { get as _get } from 'lodash-es';
import { string as YupString, bool as YupBool, array as YupArray } from 'yup';

import env from './env';
import { __ } from '../i18n';
import RootElement from './rootElement';
import LocalStorage from './localStorage';
import { prepareFullName } from './customer';
import { BILLING_ADDR_FORM, config } from '../config';
import { _cleanObjByKeys, _isNumber, _toString } from './index';

export const initialCountry =
  env.defaultCountry ||
  RootElement.getDefaultCountryId() ||
  config.defaultCountry;

export const CART_SHIPPING_ADDRESS = 'cart_shipping_address';

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
      firstname = '',
      lastname = '',
      regionLabel = '',
      countryCode = '',
    } = addr;
    const countryRegions = _get(stateList, `${country}`, []);
    const countryRegion = countryRegions.find((state) => state.code === region);
    return {
      id: _toString(id),
      address: [
        prepareFullName({ firstname, lastname }),
        company,
        ...street,
        __('%1 %2', zipcode, city),
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

const requiredMessage = __('%1 is required');

export const addressInitialValidationSchema = {
  company: YupString().required(requiredMessage),
  firstname: YupString().required(requiredMessage),
  lastname: YupString().required(requiredMessage),
  street: YupArray(),
  'street[0]': YupString().test(
    'street1Required',
    requiredMessage,
    (value, context) => !!_get(context, 'parent.street.0')
  ),
  phone: YupString().required(requiredMessage),
  zipcode: YupString().required(requiredMessage),
  city: YupString().required(requiredMessage),
  region: YupString().nullable(),
  country: YupString().required(requiredMessage),
  isSameAsShipping: YupBool(),
  saveInBook: YupBool(),
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
  const recentAddressList = LocalStorage.getMostRecentlyUsedAddressList();

  return !!recentAddressList[addressId];
}

export function prepareAddressForSaving(addressToSave, regionData) {
  // Region code some times can be integer instead of string eg: FR
  // In those cases, use "region_id" instead of "region" input in GQL in order
  // to update the address data.
  if (_isNumber(regionData?.code)) {
    return {
      ...addressToSave,
      region: '',
      regionId: regionData?.id,
    };
  }

  return addressToSave;
}
