import _get from 'lodash.get';

import { useFormikContext } from 'formik';
import useBillingAddressAppContext from './useBillingAddressAppContext';
import useBillingAddressCartContext from './useBillingAddressCartContext';
import { _emptyFunc, _makePromise } from '../../../utils';
import { BILLING_ADDR_FORM } from '../../../config';
import { CART_BILLING_ADDRESS } from '../utility';
import { __ } from '../../../i18n';
import LocalStorage from '../../../utils/localStorage';

const isSameAsShippingField = `${BILLING_ADDR_FORM}.isSameAsShipping`;

export default function useSaveAddressAction(shippingFormikContext) {
  const { values } = useFormikContext();
  const { setCartBillingAddress } = useBillingAddressCartContext();
  const {
    isLoggedIn,
    setPageLoader,
    setSuccessMessage,
    setErrorMessage,
    updateCustomerAddress,
  } = useBillingAddressAppContext();
  const {
    editMode,
    selectedAddress,
    regionData,
    setFormToViewMode,
    customerAddressSelected,
    setSelectedAddress,
    setCustomerAddressSelected,
  } = shippingFormikContext;
  const billingAddrFieldValues = _get(values, BILLING_ADDR_FORM);

  return async () => {
    try {
      let customerAddressUsed = false;
      const isBillingSame = _get(values, isSameAsShippingField);
      let updateCustomerAddrPromise = _emptyFunc();
      const updateCartAddressPromise = _makePromise(
        setCartBillingAddress,
        billingAddrFieldValues
      );

      if (isLoggedIn && customerAddressSelected && editMode) {
        customerAddressUsed = true;
        updateCustomerAddrPromise = _makePromise(
          updateCustomerAddress,
          selectedAddress,
          billingAddrFieldValues,
          regionData
        );
      }

      if (customerAddressUsed) {
        LocalStorage.saveCustomerAddressInfo(selectedAddress, isBillingSame);
      } else {
        LocalStorage.saveCustomerAddressInfo('', isBillingSame);
        setSelectedAddress(CART_BILLING_ADDRESS);
        setCustomerAddressSelected(false);
      }

      setPageLoader(true);
      await Promise.all([
        updateCustomerAddrPromise(),
        updateCartAddressPromise(),
      ]);
      setFormToViewMode(false);
      setSuccessMessage(__('Billing address updated successfully.'));
      setPageLoader(false);
    } catch (error) {
      console.error(error);
      setErrorMessage(__('Billing address update failed. Please try again'));
      setPageLoader(false);
    }
  };
}
