import _get from 'lodash.get';

/**
 * @todo is billing address same as shipping address - this info is not available
 * at the moment. this needs to be integrated by customizing magento graphql. Till
 * that time, we assume here billing address === shipping address here.
 */
export function modifyBillingAddressData(billingAddress) {
  const {
    company,
    firstname,
    lastname,
    street = [],
    telephone: phone,
    postcode: zipcode,
    city,
    country: { code: countryCode } = {},
    region: { code: regionCode } = {},
  } = billingAddress;

  return {
    company,
    firstname,
    lastname,
    street,
    phone,
    zipcode,
    city,
    region: regionCode,
    country: countryCode,
    isSameAsShipping: true,
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
