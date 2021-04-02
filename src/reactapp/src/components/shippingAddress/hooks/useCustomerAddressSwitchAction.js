import { useCallback } from 'react';
import _get from 'lodash.get';

import { _emptyFunc, _makePromise } from '../../../utils';
import useShippingAddressAppContext from './useShippingAddressAppContext';
import useShippingAddressFormikContext from './useShippingAddressFormikContext';
import useShippingAddressWrapper from './useShippingAddressWrapper';
import { saveCustomerAddressToLocalStorage } from '../utility';
import { BILLING_ADDR_FORM } from '../../../config';

const isSameAsShippingField = `${BILLING_ADDR_FORM}.isSameAsShipping`;

export default function useCustomerAddressSwitchAction() {
  const { isLoggedIn, setSuccessMessage } = useShippingAddressAppContext();
  const { formSubmit } = useShippingAddressFormikContext();
  const { editMode } = useShippingAddressWrapper();

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
          formSubmit,
          formikValues,
          addressId
        );

        if (addressId === 'new') {
          updateAddressPromise = _makePromise(formSubmit, formikValues);
        }
      }

      try {
        await Promise.all([updateAddressPromise()]);
        setSuccessMessage('Shipping address updated successfully');

        // need to update local storage values of customer address id opted.
        // because there is no other way to understand the opted customer
        // address id from the cart address details.
        saveCustomerAddressToLocalStorage(addressId, isBillingSame);
      } catch (error) {
        console.log({ error });
      }
    },
    [isLoggedIn, editMode, formSubmit, setSuccessMessage]
  );
}
