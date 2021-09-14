import { __ } from '../../../i18n';
import { _isObjEmpty } from '../../../utils';

export const CART_SHIPPING_ADDRESS = 'cart_shipping_address';
export const shippingAddrOtherOptionField =
  'additional.shipping_address_selected_other_option';

export function selectedAddressTitle(isLoggedIn, customerAddressList) {
  if (!isLoggedIn || (isLoggedIn && _isObjEmpty(customerAddressList))) {
    return __('SHIPPING ADDRESS');
  }

  return __('SELECTED ADDRESS');
}
