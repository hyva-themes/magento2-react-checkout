import _get from 'lodash.get';
import { prepareFullName } from '../../../utils/customer';

export default function modifyCustomerAddressList(response) {
  const customerData = _get(response, 'data.customer', {});
  const defaultBillingAddress = Number(_get(customerData, 'default_billing'));
  const defaultShippingAddress = Number(_get(customerData, 'default_shipping'));
  const customerAddressList = _get(customerData, 'addresses', []).reduce(
    (addressList, address) => {
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
      // eslint-disable-next-line no-param-reassign
      addressList[Number(id)] = {
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
      return addressList;
    },
    {}
  );

  return {
    customerAddressList,
    defaultBillingAddress,
    defaultShippingAddress,
  };
}
