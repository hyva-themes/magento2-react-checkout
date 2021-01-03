import _get from 'lodash.get';

export function modifyShippingAddressList(addressList) {
  return addressList.map(
    ({
      company,
      firstname,
      lastname,
      street,
      telephone: phone,
      postcode: zipcode,
      city,
      country: { code: countryCode },
      region: { code: regionCode }
    }) => ({
      company,
      firstname,
      lastname,
      street,
      phone,
      zipcode,
      city,
      region: regionCode,
      country: countryCode,
    })
  );
}

export default function setShippingAddressModifier(result) {
  const shippingAddresses = _get(
    result,
    'data.setShippingAddressesOnCart.cart.shipping_addresses',
    []
  );

  return modifyShippingAddressList(shippingAddresses);
}
