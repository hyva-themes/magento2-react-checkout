import { __ } from '../../../i18n';
import { _isObjEmpty } from '../../../utils';
import { BILLING_ADDR_FORM } from '../../../config';
import LocalStorage from '../../../utils/localStorage';
import { addressInitValues, initialCountry } from '../../../utils/address';

export const CART_BILLING_ADDRESS = 'cart_billing_address';
export const billingAddrOtherOptionField =
  'additional.billing_address_selected_other_option';

export const billingAddressFormInitValues = {
  ...addressInitValues(BILLING_ADDR_FORM),
  country_id: initialCountry,
  isSameAsShipping: LocalStorage.getBillingSameAsShippingInfo(),
  saveInBook: false,
};

export function selectedAddressTitle(isLoggedIn, customerAddressList) {
  if (!isLoggedIn || (isLoggedIn && _isObjEmpty(customerAddressList))) {
    return __('BILLING ADDRESS');
  }

  return __('SELECTED ADDRESS');
}
