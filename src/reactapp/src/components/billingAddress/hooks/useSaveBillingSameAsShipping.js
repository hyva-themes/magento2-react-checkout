import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import useBillingAddressAppContext from './useBillingAddressAppContext';
import useBillingAddressCartContext from './useBillingAddressCartContext';
import useBillingAddressFormikContext from './useBillingAddressFormikContext';
import __ from '../../../i18n/__';
import { SHIPPING_ADDR_FORM } from '../../../config';
import {
  isCartAddressValid,
  isValidCustomerAddressId,
  saveCustomerAddressToLocalStorage,
} from '../../../utils/address';
import LocalStorage from '../../../utils/localStorage';

/**
 * When user click on "billing same as shipping" checkbox, then if there is valid
 * shipping address, then make both billing and shipping same.
 */
export default function useSaveBillingSameAsShipping() {
  const {
    isLoggedIn,
    setPageLoader,
    setSuccessMessage,
    setErrorMessage,
  } = useBillingAddressAppContext();
  const {
    setCartBillingAddress,
    setCustomerAddressAsBillingAddress,
  } = useBillingAddressCartContext();
  const { values } = useFormikContext();
  const { setCustomerAddressSelected } = useBillingAddressFormikContext();
  const shippingAddress = _get(values, SHIPPING_ADDR_FORM);
  const shippingAddressSelected = LocalStorage.getCustomerShippingAddressId();

  const makeBillingSameAsShippingRequest = async () => {
    try {
      if (!isCartAddressValid(shippingAddress)) {
        return;
      }

      const successMessage = __(
        'Billing address made same as shipping address'
      );

      if (
        !isLoggedIn ||
        (isLoggedIn && !isValidCustomerAddressId(shippingAddressSelected))
      ) {
        setPageLoader(true);
        await setCartBillingAddress({ ...shippingAddress });
        setCustomerAddressSelected(false);
        setSuccessMessage(successMessage);
        setPageLoader(true);
        return;
      }

      if (isLoggedIn && isValidCustomerAddressId(shippingAddressSelected)) {
        const billingIsSame = true;
        saveCustomerAddressToLocalStorage(
          shippingAddressSelected,
          billingIsSame
        );
        setPageLoader(true);
        await setCustomerAddressAsBillingAddress(
          shippingAddressSelected,
          billingIsSame
        );
        setCustomerAddressSelected(true);
        setSuccessMessage(successMessage);
        setPageLoader(false);
        return;
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(__('Billing address update failed. Please try later'));
    }
  };

  return { makeBillingSameAsShippingRequest };
}
