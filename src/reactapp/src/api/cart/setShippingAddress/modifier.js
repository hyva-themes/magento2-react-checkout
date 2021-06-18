/* eslint-disable no-param-reassign */
import _get from 'lodash.get';
import { config } from '../../../config';
import { prepareFullName } from '../../../utils/customer';

export function modifySelectedShippingMethod(addressList) {
  const selectedMethod = _get(addressList, '0.selected_shipping_method');

  if (!selectedMethod) {
    return {};
  }

  const {
    carrier_code: carrierCode,
    method_code: methodCode,
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

  return shippingMethods.reduce((methodList, method) => {
    const {
      carrier_code: carrierCode,
      carrier_title: carrierTitle,
      method_code: methodCode,
      method_title: methodTitle,
      price_incl_tax: { currency: priceCurrency, value: amount },
    } = method;

    const methodId = `${carrierCode}__${methodCode}`;

    methodList[methodId] = {
      id: methodId,
      carrierCode,
      carrierTitle,
      methodCode,
      methodTitle,
      price: `${_get(config.currencySymbols, priceCurrency, '')}${amount}`,
      amount,
    };

    return methodList;
  }, {});
}

export function modifyShippingAddressList(addressList) {
  const shippingAddress = _get(addressList, '0');

  if (!shippingAddress) {
    return {};
  }

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
  } = shippingAddress;

  return {
    company,
    firstname,
    lastname,
    fullName: prepareFullName(shippingAddress),
    street,
    phone,
    zipcode,
    city,
    region: regionCode,
    country: countryCode,
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
