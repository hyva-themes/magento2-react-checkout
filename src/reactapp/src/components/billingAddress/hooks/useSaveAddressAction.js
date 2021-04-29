import { useCallback } from 'react';
import _get from 'lodash.get';

import { _emptyFunc, _makePromise } from '../../../utils';
import { BILLING_ADDR_FORM, SHIPPING_ADDR_FORM } from '../../../config';
import { CART_BILLING_ADDRESS } from '../utility';
import useBillingAddressWrapper from './useBillingAddressWrapper';
import useBillingAddressAppContext from './useBillingAddressAppContext';
import useBillingAddressFormikContext from './useBillingAddressFormikContext';
import { saveCustomerAddressToLocalStorage } from '../../../utils/address';

export default function useSaveAddressAction() {
  const { submitHandler } = useBillingAddressFormikContext();
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
    setToViewMode,
    customerAddressSelected,
    setSelectedAddress,
    setCustomerAddressSelected,
  } = useBillingAddressWrapper();

  const isSameAsBillingField = `${BILLING_ADDR_FORM}.isSameAsBilling`;

  return useCallback(
    async formikValues => {
      try {
        let customerAddressUsed = false;
        const isBillingSame = _get(formikValues, isSameAsBillingField);
        let updateCustomerAddrPromise = _emptyFunc();
        const updateCartAddressPromise = _makePromise(
          submitHandler,
          formikValues
        );

        if (isLoggedIn && customerAddressSelected && editMode) {
          customerAddressUsed = true;
          updateCustomerAddrPromise = _makePromise(
            updateCustomerAddress,
            selectedAddress,
            _get(formikValues, SHIPPING_ADDR_FORM, {}),
            regionData
          );
        }

        if (customerAddressUsed) {
          saveCustomerAddressToLocalStorage(selectedAddress, isBillingSame);
        } else {
          saveCustomerAddressToLocalStorage('', isBillingSame);
          setSelectedAddress(CART_BILLING_ADDRESS);
          setCustomerAddressSelected(false);
        }

        setPageLoader(true);
        await Promise.all([
          updateCustomerAddrPromise(),
          updateCartAddressPromise(),
        ]);
        setToViewMode(false);
        setSuccessMessage('Billing address updated successfully.');
        setPageLoader(false);
      } catch (error) {
        console.log({ error });
        setErrorMessage('Billing address update failed. Please try again');
        setPageLoader(false);
      }
    },
    [
      isSameAsBillingField,
      submitHandler,
      isLoggedIn,
      selectedAddress,
      editMode,
      updateCustomerAddress,
      setSuccessMessage,
      setErrorMessage,
      regionData,
      setToViewMode,
      setPageLoader,
      setSelectedAddress,
      setCustomerAddressSelected,
      customerAddressSelected,
    ]
  );
}
