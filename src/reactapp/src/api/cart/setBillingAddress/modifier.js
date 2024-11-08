import { get as _get } from 'lodash-es';

import {
  addressConfig,
  addressTypeMapper,
  isCartAddressValid,
} from '../../../utils/address';
import { _objToArray } from '../../../utils';
import { BILLING_ADDR_FORM } from '../../../config';
import LocalStorage from '../../../utils/localStorage';
import { prepareFullName } from '../../../utils/customer';
import addressFieldGqlMapping from '../../../addressFieldGqlMapping';

export function modifyBillingAddressData(billingAddress) {
  if (!isCartAddressValid(billingAddress)) {
    return {};
  }

  const fieldsConfig = addressConfig[addressTypeMapper[BILLING_ADDR_FORM]];
  const billingAddressData = {
    id: LocalStorage.getCustomerBillingAddressId(),
    fullName: prepareFullName(billingAddress),
    isSameAsShipping: LocalStorage.getBillingSameAsShippingInfo(),
  };

  _objToArray(fieldsConfig).forEach((config) => {
    const fieldName = addressFieldGqlMapping[config.code] || config.code;
    billingAddressData[config.code] = _get(billingAddress, fieldName) || '';
  });

  return billingAddressData;
}

export default function setBillingAddressModifier(response) {
  const billingAddress = _get(
    response,
    'data.setBillingAddressOnCart.cart.billing_address',
    {}
  );

  return modifyBillingAddressData(billingAddress);
}
