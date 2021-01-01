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
    }) => ({
      company,
      firstname,
      lastname,
      street,
      phone,
      zipcode,
      city,
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
