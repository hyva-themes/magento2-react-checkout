import { useCallback } from 'react';
import { get as _get } from 'lodash-es';

import { __ } from '../../../i18n';
import { _makePromise } from '../../../utils';
import { BILLING_ADDR_FORM } from '../../../config';
import LocalStorage from '../../../utils/localStorage';
import { isAddressSame } from '../../placeOrder/utility';
import { isValidCustomerAddressId } from '../../../utils/address';
import useBillingAddressAppContext from './useBillingAddressAppContext';
import useBillingAddressCartContext from './useBillingAddressCartContext';

/**
 * This custom hook is used to perform billing address save when "place order"
 * button is pressed and there are some unsaved data present in the billing
 * address.
 */
export default function usePlaceOrderBillingSaveAction() {
  const { setErrorMessage, isLoggedIn } = useBillingAddressAppContext();
  const { cartBillingAddress, setCartBillingAddress } =
    useBillingAddressCartContext();

  return useCallback(
    async (formikData) => {
      try {
        const { values } = formikData;
        const billingAddress = _get(values, BILLING_ADDR_FORM);
        const isBillingSame = billingAddress.isSameAsShipping;
        const billingAddrSelected = LocalStorage.getCustomerBillingAddressId();

        // Shipping address update will take care of this occasion.
        if (isBillingSame) {
          return;
        }

        // When a customer address is opted, then it is already updated in the backend.
        if (isLoggedIn && isValidCustomerAddressId(billingAddrSelected)) {
          return;
        }

        // If cart and formik states same, then the backend is uptodate.
        if (isAddressSame(cartBillingAddress, billingAddress)) {
          return;
        }

        const setCartBillingAddressPromise = _makePromise(
          setCartBillingAddress,
          billingAddress
        );
        await setCartBillingAddressPromise();
      } catch (error) {
        console.error(error);
        setErrorMessage(__('Address update failed. Please try again.'));
      }
    },
    [cartBillingAddress, isLoggedIn, setCartBillingAddress, setErrorMessage]
  );
}
