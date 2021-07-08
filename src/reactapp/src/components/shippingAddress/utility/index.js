import _get from 'lodash.get';

import {
  formatAddressListToCardData,
  isCartAddressValid,
} from '../../../utils/address';
import { _isObjEmpty, _objToArray } from '../../../utils';
import { prepareFullName } from '../../../utils/customer';
import { __ } from '../../../i18n';

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
