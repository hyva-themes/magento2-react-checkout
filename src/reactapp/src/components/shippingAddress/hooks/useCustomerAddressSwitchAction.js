import { useCallback } from 'react';
import _get from 'lodash.get';

import { _emptyFunc, _makePromise } from '../../../utils';
import useShippingAddressAppContext from './useShippingAddressAppContext';
import useShippingAddressFormikContext from './useShippingAddressFormikContext';
import useShippingAddressWrapper from './useShippingAddressWrapper';
import {
  CART_SHIPPING_ADDRESS,
  saveCustomerAddressToLocalStorage,
} from '../utility';
import { BILLING_ADDR_FORM } from '../../../config';

const isSameAsShippingField = `${BILLING_ADDR_FORM}.isSameAsShipping`;

export default function useCustomerAddressSwitchAction() {
  const { submitHandler } = useShippingAddressFormikContext();
  const { editMode } = useShippingAddressWrapper();
  const {
    isLoggedIn,
    setSuccessMessage,
    setErrorMessage,
    setPageLoader,
  } = useShippingAddressAppContext();

  /**
   * Setting customer address to the cart address when user opt out the address
   */
  return useCallback(
    async (addressId, formikValues) => {
      if (!isLoggedIn) {
        return;
      }

      let updateAddressPromise = _emptyFunc();
      const isBillingSame = _get(formikValues, isSameAsShippingField);

      // if address is new, then submit it with formik values; else use customer
      // address id to update the cart address
      if (!editMode) {
        updateAddressPromise = _makePromise(
          submitHandler,
          formikValues,
          addressId
        );

        if (addressId === CART_SHIPPING_ADDRESS) {
          updateAddressPromise = _makePromise(submitHandler, formikValues);
        }
      }

      try {
        // keep this always performing the update operation; otherwise
        // memory leakage happens and you wont see the radio button switching
        // in frontend
        saveCustomerAddressToLocalStorage(addressId, isBillingSame);
        await Promise.all([updateAddressPromise()]);
        setSuccessMessage('Shipping address updated successfully');
      } catch (error) {
        console.log({ error });
        setErrorMessage('Address switching failed, sorry.');
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
