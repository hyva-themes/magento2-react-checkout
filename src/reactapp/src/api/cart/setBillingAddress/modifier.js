import _get from 'lodash/get';

import LocalStorage from '../../../utils/localStorage';
import { prepareFullName } from '../../../utils/customer';
import { isCartAddressValid } from '../../../utils/address';

export function modifyBillingAddressData(billingAddress) {
  if (!isCartAddressValid(billingAddress)) {
    return {};
  }
  const {
    company = '',
    firstname = '',
    lastname = '',
    street = [],
    telephone: phone = '',
    postcode: zipcode = '',
    city = '',
    country: { code: countryCode = '' } = {},
    region: { code: regionCode = '' } = {},
  } = billingAddress;

  return {
    id: LocalStorage.getCustomerBillingAddressId(),
    company,
    firstname,
    lastname,
    fullName: prepareFullName(billingAddress),
    street,
    phone,
    zipcode,
    city,
    region: regionCode || '',
    country: countryCode,
    isSameAsShipping: LocalStorage.getBillingSameAsShippingInfo(),
  };
}

export default function setBillingAddressModifier(response) {
  const billingAddress = _get(
    response,
    'data.setBillingAddressOnCart.cart.billing_address',
    {}
  );

  return modifyBillingAddressData(billingAddress);
}
