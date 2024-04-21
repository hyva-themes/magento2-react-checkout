import { useCallback } from 'react';
import { get as _get } from 'lodash-es';

import {
  SHIPPING_METHOD,
  BILLING_ADDR_FORM,
  SHIPPING_ADDR_FORM,
} from '../../../config';
import {
  isAddressSame,
  ShippingMethodRequiredException,
} from '../../placeOrder/utility';
import { __ } from '../../../i18n';
import { _makePromise } from '../../../utils';
import LocalStorage from '../../../utils/localStorage';
import { isValidCustomerAddressId } from '../../../utils/address';
import useShippingAddressAppContext from './useShippingAddressAppContext';
import useShippingAddressCartContext from './useShippingAddressCartContext';

/**
 * This custom hook is used to perform shipping address save when "place order"
 * button is pressed and there are some unsaved data present in the shipping
 * address.
 */
export default function usePlaceOrderShippingSaveAction() {
  const {
    isVirtualCart,
    setShippingMethod,
    cartShippingAddress,
    setCartBillingAddress,
    addCartShippingAddress,
  } = useShippingAddressCartContext();
  const { isLoggedIn, setErrorMessage } = useShippingAddressAppContext();

  return useCallback(
    async (formikData) => {
      try {
        const { values } = formikData;
        const shippingAddress = _get(values, SHIPPING_ADDR_FORM);
        const shippingAddrSelected =
          LocalStorage.getCustomerShippingAddressId();

        // When a customer address is opted, then it is already updated in the backend.
        if (isLoggedIn && isValidCustomerAddressId(shippingAddrSelected)) {
          return;
        }

        // If cart and formik states same, then the backend is uptodate.
        if (isAddressSame(cartShippingAddress, shippingAddress)) {
          return;
        }

        const isBillingSame = LocalStorage.getBillingSameAsShippingInfo();
        let setCartShippingAddressPromise = _makePromise(
          addCartShippingAddress,
          shippingAddress,
          isBillingSame
        );

        if (isBillingSame) {
          const billingAddress = _get(values, BILLING_ADDR_FORM);
          setCartShippingAddressPromise = _makePromise(
            setCartBillingAddress,
            billingAddress,
            isVirtualCart
          );
        }

        const cartInfo = await setCartShippingAddressPromise();

        /**
         * SHIPPING METHOD UPDATE STARTS....
         *
         * If there is shipping address update, then shipping method data will be reset.
         * So we need to update the shipping method again;
         * If the selected shipping method is no longer available, then stop place order process.
         */
        const selectedShippingMethod = _get(values, SHIPPING_METHOD);
        const { carrierCode, methodCode } = selectedShippingMethod;
        const newShippingMethods = _get(cartInfo, 'shipping_methods');

        if (!_get(newShippingMethods, `${carrierCode}__${methodCode}`)) {
          // this means selected shipping method is not available
          throw new ShippingMethodRequiredException(
            'Selected shipping method is not available due to the shipping address change. Please select from the available methods.'
          );
        }

        if (carrierCode && methodCode) {
          await setShippingMethod(selectedShippingMethod);
        }
        // SHIPPING METHOD UPDATE ENDS.

        LocalStorage.saveCustomerAddressInfo('', isBillingSame);
      } catch (error) {
        console.error(error);
        if (error instanceof ShippingMethodRequiredException) {
          setErrorMessage(__(error.message));
        } else {
          setErrorMessage(__('Address update failed. Please try again.'));
        }
      }
    },
    [
      isLoggedIn,
      isVirtualCart,
      setErrorMessage,
      setShippingMethod,
      cartShippingAddress,
      setCartBillingAddress,
      addCartShippingAddress,
    ]
  );
}
