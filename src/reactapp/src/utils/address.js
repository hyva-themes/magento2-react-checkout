import { __ } from '../i18n';
import { _toString } from './index';

export function isCartAddressValid(address) {
  return address && address.firstname && address.country;
}

export function isValidCustomerAddressId(addressId) {
  // Number.isNaN should not use here. both functions works differently.
  return !isNaN(addressId);
}

export function formatAddressListToCardData(addressList) {
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
        __('{} zipcode: {}', countryCode, zipcode),
        __('phone: {}', phone),
      ].filter(i => !!i),
    };
  });
}
