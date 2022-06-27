import { get as _get } from 'lodash-es';

import { _isObjEmpty } from '../../../utils';
import { prepareFullName } from '../../../utils/customer';

export default function modifyCustomerAddressList(response) {
  const customerData = _get(response, 'data.customer', {}) || {};
  const defaultBillingAddress = Number(_get(customerData, 'default_billing'));
  const defaultShippingAddress = Number(_get(customerData, 'default_shipping'));
  const customerAddressList = _get(customerData, 'addresses', []).reduce(
    (accumulator, address) => {
      const {
        id,
        city,
        street,
        company,
        lastname,
        firstname,
        middlename,
        telephone: phone,
        postcode: zipcode,
        country_code: countryCode,
        default_billing: isDefaultBilling,
        default_shipping: isDefaultShipping,
        region: { region: regionLabel, region_code: regionCode },
      } = address;
      accumulator[Number(id)] = {
        id,
        firstname,
        lastname,
        middlename,
        fullName: prepareFullName(address),
        company,
        street,
        city,
        regionLabel,
        regionCode,
        zipcode,
        phone,
        countryCode,
        isDefaultBilling,
        isDefaultShipping,
      };
      return accumulator;
    },
    {}
  );
  const { firstname, lastname, email } = customerData;

  return {
    customer: {
      email,
      firstname,
      lastname,
      fullName: prepareFullName(customerData),
      hasAddress: !_isObjEmpty(customerAddressList),
    },
    customerAddressList,
    defaultBillingAddress,
    defaultShippingAddress,
  };
}
