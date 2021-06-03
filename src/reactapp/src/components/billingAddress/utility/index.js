import _get from 'lodash.get';

import {
  formatAddressListToCardData,
  isCartAddressValid,
} from '../../../utils/address';
import { _cleanObjByKeys, _isObjEmpty, _objToArray } from '../../../utils';
import { BILLING_ADDR_FORM } from '../../../config';
import { prepareFullName } from '../../../utils/customer';

export const CART_BILLING_ADDRESS = 'cart_billing_address';
export const MY_CART_NEW_ADDRESS = `my_${CART_BILLING_ADDRESS}`;
export const GUEST_CART_NEW_ADDRESS = CART_BILLING_ADDRESS;

export const billingAddressFormInitValues = {
  company: '',
  firstname: '',
  lastname: '',
  street: [''],
  phone: '',
  zipcode: '',
  city: '',
  region: '',
  country: '',
  isSameAsBilling: true,
};

export function prepareFormAddressFromCartAddress(address, selectedAddressId) {
  const newAddress = { ...address };
  const { countryCode, regionCode } = address;

  if (countryCode) {
    newAddress.country = countryCode;
  }
  if (regionCode) {
    newAddress.region = regionCode;
  }
  if (selectedAddressId) {
    newAddress.selectedAddress = selectedAddressId;
  }

  const keysToRemove = [
    'countryCode',
    'fullName',
    'isDefaultBilling',
    'isDefaultShipping',
    'fullName',
    'middlename',
    'regionCode',
    'regionLabel',
  ];

  return {
    ...billingAddressFormInitValues,
    ..._cleanObjByKeys(newAddress, keysToRemove),
  };
}

export function prepareFormAddressFromAddressListById(
  billingAddressList,
  selectedAddressId
) {
  if (
    !selectedAddressId ||
    !billingAddressList ||
    _isObjEmpty(billingAddressList)
  ) {
    return;
  }

  const address = { ..._get(billingAddressList, selectedAddressId, {}) };

  // eslint-disable-next-line consistent-return
  return prepareFormAddressFromCartAddress(address, selectedAddressId);
}

export function prepareBillingAddressCardList(
  values,
  customerAddressList,
  regionData,
  customerAddressSelected,
  isLoggedIn
) {
  const cartBillingAddress = _get(values, BILLING_ADDR_FORM, {});
  const { country } = cartBillingAddress;
  let cartBillingAddrCardInfo = [];

  if (!customerAddressSelected && isCartAddressValid(cartBillingAddress)) {
    cartBillingAddrCardInfo = formatAddressListToCardData([
      {
        ...cartBillingAddress,
        fullName: prepareFullName(cartBillingAddress),
        id: isLoggedIn ? MY_CART_NEW_ADDRESS : CART_BILLING_ADDRESS,
        countryCode: country,
        regionLabel: _get(regionData, 'name'),
      },
    ]);
  }

  const customerAddressCardInfo = formatAddressListToCardData(
    _objToArray(customerAddressList)
  );

  return [...cartBillingAddrCardInfo, ...customerAddressCardInfo];
}
