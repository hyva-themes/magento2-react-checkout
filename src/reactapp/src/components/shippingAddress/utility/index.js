import _get from 'lodash.get';

import {
  formatAddressListToCardData,
  isCartAddressValid,
} from '../../../utils/address';
import { __ } from '../../../i18n';
import LocalStorage from '../../../utils/localStorage';
import { prepareFullName } from '../../../utils/customer';
import { _cleanObjByKeys, _isObjEmpty, _objToArray } from '../../../utils';

export const CART_SHIPPING_ADDRESS = 'cart_shipping_address';
export const shippingAddrOtherOptionField =
  'additional.shipping_address_selected_other_option';

export function prepareShippingAddressCardList(
  shippingValues,
  regionData,
  customerAddressList,
  customerAddressSelected
) {
  const { country } = shippingValues;
  let cartShippingAddrCardInfo = [];

  if (!customerAddressSelected && isCartAddressValid(shippingValues)) {
    cartShippingAddrCardInfo = formatAddressListToCardData([
      {
        ...shippingValues,
        fullName: prepareFullName(shippingValues),
        id: CART_SHIPPING_ADDRESS,
        countryCode: country,
        regionLabel: _get(regionData, 'name'),
      },
    ]);
  }

  const customerAddressCardInfo = formatAddressListToCardData(
    _objToArray(customerAddressList)
  );

  return [...cartShippingAddrCardInfo, ...customerAddressCardInfo];
}

export function selectedAddressTitle(isLoggedIn, customerAddressList) {
  if (!isLoggedIn || (isLoggedIn && _isObjEmpty(customerAddressList))) {
    return __('SHIPPING ADDRESS');
  }

  return __('SELECTED ADDRESS');
}

export function prepareAddressOtherOptions({
  stateList,
  selectedAddress,
  cartShippingAddress,
  customerAddressList,
}) {
  const mostRecentAddressList = LocalStorage.getMostlyRecentlyUsedAddressList();

  // prepare address options from customer address list
  const isCartShippingAddressValid = isCartAddressValid(cartShippingAddress);
  const customerAddrToConsider = isCartShippingAddressValid
    ? _cleanObjByKeys(customerAddressList, [selectedAddress])
    : customerAddressList;
  let addressOptions = formatAddressListToCardData(
    _objToArray(customerAddrToConsider)
  );

  // prepare address options from the local storage addresses
  if (!_isObjEmpty(mostRecentAddressList)) {
    const mostRecentAddrOptions = formatAddressListToCardData(
      _objToArray(_cleanObjByKeys(mostRecentAddressList, [selectedAddress])),
      stateList
    );
    addressOptions = [...mostRecentAddrOptions, ...addressOptions];
  }

  return addressOptions;
}
