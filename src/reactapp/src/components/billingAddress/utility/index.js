import { __ } from '../../../i18n';
import { _isObjEmpty } from '../../../utils';
import { BILLING_ADDR_FORM } from '../../../config';
import LocalStorage from '../../../utils/localStorage';
import { addressInitValues } from '../../../utils/address';

export const CART_BILLING_ADDRESS = 'cart_billing_address';
export const billingAddrOtherOptionField =
  'additional.billing_address_selected_other_option';

export const billingAddressFormInitValues = {
  ...addressInitValues(BILLING_ADDR_FORM),
  isSameAsShipping: LocalStorage.getBillingSameAsShippingInfo(),
  saveInBook: LocalStorage.getBillingSameAsShippingInfo(),
};

export function selectedAddressTitle(isLoggedIn, customerAddressList) {
  if (!isLoggedIn || (isLoggedIn && _isObjEmpty(customerAddressList))) {
    return __('BILLING ADDRESS');
  }

  return __('SELECTED ADDRESS');
}
