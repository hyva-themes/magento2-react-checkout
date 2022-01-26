import { __ } from '../../../i18n';
import { _isObjEmpty } from '../../../utils';
import LocalStorage from '../../../utils/localStorage';
import { initialCountry } from '../../../utils/address';

export const CART_BILLING_ADDRESS = 'cart_billing_address';
export const billingAddrOtherOptionField =
  'additional.billing_address_selected_other_option';

export const billingAddressFormInitValues = {
  company: '',
  firstname: '',
  lastname: '',
  street: [''],
  phone: '',
  zipcode: '',
  city: '',
  region: '',
  country: initialCountry,
  isSameAsShipping: LocalStorage.getBillingSameAsShippingInfo(),
  saveInBook: false,
};

export function selectedAddressTitle(isLoggedIn, customerAddressList) {
  if (!isLoggedIn || (isLoggedIn && _isObjEmpty(customerAddressList))) {
    return __('BILLING ADDRESS');
  }

  return __('SELECTED ADDRESS');
}
