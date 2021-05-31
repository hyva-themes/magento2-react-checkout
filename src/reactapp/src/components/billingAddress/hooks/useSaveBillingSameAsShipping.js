import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import { useCallback } from 'react';
import { SHIPPING_ADDR_FORM } from '../../../config';
import {
  isCartAddressValid,
  isValidCustomerAddressId,
} from '../../../utils/address';
import LocalStorage from '../../../utils/localStorage';
import useBillingAddressAppContext from './useBillingAddressAppContext';
import useBillingAddressCartContext from './useBillingAddressCartContext';

/**
 * When user click on "billing same as shipping" checkbox, then if there is valid
 * shipping address, then make both billing and shipping same.
 */
export default function useSaveBillingSameAsShipping() {
  const { values } = useFormikContext();
  const { isLoggedIn } = useBillingAddressAppContext();
  const {
    setCartBillingAddress,
    setCustomerAddressAsBillingAddress,
  } = useBillingAddressCartContext();
  const shippingAddress = _get(values, SHIPPING_ADDR_FORM);
  const shippingAddressSelected = LocalStorage.getCustomerShippingAddressId();

  const makeBillingSameAsShippingRequest = useCallback(async () => {
    try {
      if (!isCartAddressValid(shippingAddress)) {
        return;
      }

      if (
        !isLoggedIn ||
        (isLoggedIn && !isValidCustomerAddressId(shippingAddressSelected))
      ) {
        await setCartBillingAddress({ ...shippingAddress });
        return;
      }

      if (isLoggedIn && isValidCustomerAddressId(shippingAddressSelected)) {
        await setCustomerAddressAsBillingAddress(shippingAddressSelected, true);
        return;
      }
    } catch (error) {
      console.error(error);
    }
  }, [
    shippingAddress,
    isLoggedIn,
    shippingAddressSelected,
    setCartBillingAddress,
    setCustomerAddressAsBillingAddress,
  ]);

  return { makeBillingSameAsShippingRequest };
}
