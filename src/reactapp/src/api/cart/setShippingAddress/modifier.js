import _get from 'lodash.get';

import { config } from '../../../config';
import { prepareFullName } from '../../../utils/customer';

export function modifySelectedShippingMethod(addressList) {
  const selectedMethod = _get(addressList, '0.selected_shipping_method');

  if (!selectedMethod) {
    return {};
  }

  const {
    method_code: methodCode,
    carrier_code: carrierCode,
    amount: { currency, value },
  } = selectedMethod;
  const currencySymbol = _get(config.currencySymbols, currency, '');
  const methodId = `${carrierCode}__${methodCode}`;

  return {
    id: methodId,
    carrierCode,
    methodCode,
    amount: value,
    price: `${currencySymbol}${value}`,
  };
}

export function modifyShippingMethods(addressList) {
  const shippingMethods = _get(addressList, '0.available_shipping_methods', []);

  if (!shippingMethods || !shippingMethods.length) {
    return {};
  }

  return shippingMethods.reduce((accumulator, method) => {
    const {
      method_code: methodCode,
      carrier_code: carrierCode,
      method_title: methodTitle,
      carrier_title: carrierTitle,
      price_incl_tax: { currency: priceCurrency, value: amount },
    } = method;

    const methodId = `${carrierCode}__${methodCode}`;

    accumulator[methodId] = {
      id: methodId,
      carrierCode,
      carrierTitle,
      methodCode,
      methodTitle,
      price: `${_get(config.currencySymbols, priceCurrency, '')}${amount}`,
      amount,
    };

    return accumulator;
  }, {});
}

export function modifyShippingAddressList(addressList) {
  const shippingAddress = _get(addressList, '0');

  if (!shippingAddress) {
    return {};
  }

  const {
    city,
    street,
    company,
    lastname,
    firstname,
    telephone: phone,
    postcode: zipcode,
    region: { code: regionCode },
    country: { code: countryCode },
  } = shippingAddress;

  return {
    city,
    phone,
    street,
    company,
    zipcode,
    lastname,
    firstname,
    region: regionCode,
    country: countryCode,
    fullName: prepareFullName(shippingAddress),
  };
}

export default function setShippingAddressModifier(result) {
  const shippingAddresses = _get(
    result,
    'data.setShippingAddressesOnCart.cart.shipping_addresses',
    []
  );

  return modifyShippingAddressList(shippingAddresses);
}
