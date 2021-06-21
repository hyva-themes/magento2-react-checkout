import _get from 'lodash.get';
import {
  formatAddressListToCardData,
  isCartAddressValid,
} from '../../../utils/address';
import { prepareFullName } from '../../../utils/customer';
import { SHIPPING_ADDR_FORM } from '../../../config';
import { _objToArray } from '../../../utils';

export const CART_SHIPPING_ADDRESS = 'cart_shipping_address';

export function prepareShippingAddressCardList(
  values,
  regionData,
  customerAddressList,
  customerAddressSelected
) {
  const cartShippingAddress = _get(values, SHIPPING_ADDR_FORM, {});
  const { country } = cartShippingAddress;
  let cartShippingAddrCardInfo = [];

  if (!customerAddressSelected && isCartAddressValid(cartShippingAddress)) {
    cartShippingAddrCardInfo = formatAddressListToCardData([
      {
        ...cartShippingAddress,
        fullName: prepareFullName(cartShippingAddress),
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
