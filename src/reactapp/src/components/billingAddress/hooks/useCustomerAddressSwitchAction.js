import { useCallback } from 'react';
import _get from 'lodash.get';

import { _emptyFunc, _makePromise } from '../../../utils';
import useBillingAddressAppContext from './useBillingAddressAppContext';
import useBillingAddressFormikContext from './useBillingAddressFormikContext';
import useBillingAddressWrapper from './useBillingAddressWrapper';
import { CART_BILLING_ADDRESS } from '../utility';
import { BILLING_ADDR_FORM } from '../../../config';
import LocalStorage from '../../../utils/localStorage';
import { __ } from '../../../i18n';

export function saveCustomerAddressToLocalStorage(addressId, isBillingSame) {
  LocalStorage.saveBillingSameAsShipping(isBillingSame);
  LocalStorage.saveCustomerBillingAddressId(addressId);

  if (isBillingSame) {
    LocalStorage.saveCustomerBillingAddressId(addressId);
  }
}

const isSameAsBillingField = `${BILLING_ADDR_FORM}.isSameAsBilling`;

export default function useCustomerAddressSwitchAction() {
  const { submitHandler } = useBillingAddressFormikContext();
  const { editMode } = useBillingAddressWrapper();
  const {
    isLoggedIn,
    setSuccessMessage,
    setErrorMessage,
    setPageLoader,
  } = useBillingAddressAppContext();

  /**
   * Setting customer address to the cart address when user opt out the address
   */
  return useCallback(
    async (addressId, formikValues) => {
      if (!isLoggedIn) {
        return;
      }

      let updateAddressPromise = _emptyFunc();
      const isBillingSame = _get(formikValues, isSameAsBillingField);

      // if address is new, then submit it with formik values; else use customer
      // address id to update the cart address
      if (!editMode) {
        updateAddressPromise = _makePromise(
          submitHandler,
          formikValues,
          addressId
        );

        if (addressId === CART_BILLING_ADDRESS) {
          updateAddressPromise = _makePromise(submitHandler, formikValues);
        }
      }

      try {
        // keep this always performing the update operation; otherwise
        // memory leakage happens and you wont see the radio button switching
        // in frontend
        saveCustomerAddressToLocalStorage(addressId, isBillingSame);
        await Promise.all([updateAddressPromise()]);
        setSuccessMessage(__('Billing address updated successfully'));
      } catch (error) {
        console.log({ error });
        setErrorMessage(__('Address switching failed, sorry.'));
        setPageLoader(false);
      }
    },
    [
      isLoggedIn,
      editMode,
      submitHandler,
      setSuccessMessage,
      setErrorMessage,
      setPageLoader,
    ]
  );
}
