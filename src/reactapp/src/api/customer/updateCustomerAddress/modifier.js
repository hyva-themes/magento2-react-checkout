import _get from 'lodash/get';
import { prepareFullName } from '../../../utils/customer';

export default function updateCustomerAddressModifier(result) {
  const address = _get(result, 'data.updateCustomerAddress', {});

  const {
    id,
    firstname,
    lastname,
    middlename,
    company,
    street,
    city,
    region: { region: regionLabel, region_code: regionCode },
    postcode: zipcode,
    telephone: phone,
    default_billing: isDefaultBilling,
    default_shipping: isDefaultShipping,
    country_code: countryCode,
  } = address;

  return {
    [Number(id)]: {
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
    },
  };
}
