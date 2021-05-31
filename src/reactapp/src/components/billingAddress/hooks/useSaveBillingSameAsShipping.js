import { useFormikContext } from 'formik';

import useBillingAddressAppContext from './useBillingAddressAppContext';
import useBillingAddressCartContext from './useBillingAddressCartContext';
import useBillingAddressFormikContext from './useBillingAddressFormikContext';
import __ from '../../../i18n/__';
import {
  isCartAddressValid,
  isValidCustomerAddressId,
  prepareFormAddressFromCartAddress,
  saveCustomerAddressToLocalStorage,
} from '../../../utils/address';
import LocalStorage from '../../../utils/localStorage';
import { BILLING_ADDR_FORM } from '../../../config';

/**
 * When user click on "billing same as shipping" checkbox, then if there is valid
 * shipping address, then make both billing and shipping same.
 */
export default function useSaveBillingSameAsShipping() {
  const { setFieldValue } = useFormikContext();
  const {
    isLoggedIn,
    setPageLoader,
    setSuccessMessage,
    setErrorMessage,
  } = useBillingAddressAppContext();
  const {
    cartShippingAddress,
    setCartBillingAddress,
    setCustomerAddressAsBillingAddress,
  } = useBillingAddressCartContext();
  const { setCustomerAddressSelected } = useBillingAddressFormikContext();
  const shippingAddressSelected = LocalStorage.getCustomerShippingAddressId();

  const makeBillingSameAsShippingRequest = async () => {
    try {
      if (!isCartAddressValid(cartShippingAddress)) {
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
        await setCartBillingAddress({ ...cartShippingAddress });
        setFieldValue(
          BILLING_ADDR_FORM,
          prepareFormAddressFromCartAddress(cartShippingAddress)
        );
        setCustomerAddressSelected(false);
        setSuccessMessage(successMessage);
        setPageLoader(false);
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
