import _get from 'lodash.get';

export function modifyBillingAddressData(billingAddress) {
  const {
    company,
    firstname,
    lastname,
    street,
    telephone: phone,
    postcode: zipcode,
    city,
    country: { code: countryCode },
    region: { code: regionCode },
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
