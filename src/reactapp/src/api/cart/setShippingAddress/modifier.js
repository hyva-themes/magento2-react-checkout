import { get as _get } from 'lodash-es';

import { _objToArray } from '../../../utils';
import { formatPrice } from '../../../utils/price';
import { SHIPPING_ADDR_FORM } from '../../../config';
import { prepareFullName } from '../../../utils/customer';
import addressFieldGqlMapping from '../../../addressFieldGqlMapping';
import { addressConfig, addressTypeMapper } from '../../../utils/address';

export function modifySelectedShippingMethod(addressList) {
  const selectedMethod = _get(addressList, '0.selected_shipping_method');

  if (!selectedMethod) {
    return {};
  }

  const {
    amount: { value },
    method_code: methodCode,
    carrier_code: carrierCode,
  } = selectedMethod;
  const methodId = `${carrierCode}__${methodCode}`;

  return {
    id: methodId,
    carrierCode,
    methodCode,
    amount: value,
    price: formatPrice(value),
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
      price_incl_tax: { value: amount },
    } = method;

    const methodId = `${carrierCode}__${methodCode}`;

    accumulator[methodId] = {
      id: methodId,
      carrierCode,
      carrierTitle,
      methodCode,
      methodTitle,
      price: formatPrice(amount),
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

  const fieldsConfig = addressConfig[addressTypeMapper[SHIPPING_ADDR_FORM]];
  const shippingAddressData = {
    fullName: prepareFullName(shippingAddress),
  };

  _objToArray(fieldsConfig).forEach((config) => {
    const fieldName = addressFieldGqlMapping[config.code] || config.code;
    shippingAddressData[config.code] = _get(shippingAddress, fieldName) || '';
  });

  return shippingAddressData;
}

export default function setShippingAddressModifier(result) {
  const shippingAddresses = _get(
    result,
    'data.setShippingAddressesOnCart.cart.shipping_addresses',
    []
  );

  return modifyShippingAddressList(shippingAddresses);
}
