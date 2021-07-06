import _get from 'lodash.get';

import {
  formatAddressListToCardData,
  isCartAddressValid,
} from '../../../utils/address';
import { _objToArray } from '../../../utils';
import { prepareFullName } from '../../../utils/customer';

export const CART_SHIPPING_ADDRESS = 'cart_shipping_address';

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
