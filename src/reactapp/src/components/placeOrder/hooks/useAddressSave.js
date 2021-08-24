import _get from 'lodash.get';

import {
  SHIPPING_METHOD,
  BILLING_ADDR_FORM,
  SHIPPING_ADDR_FORM,
} from '../../../config';
import { __mt } from '../../../i18n';
import LocalStorage from '../../../utils/localStorage';
import { _emptyFunc, _makePromise } from '../../../utils';
import usePlaceOrderAppContext from './usePlaceOrderAppContext';
import { isValidCustomerAddressId } from '../../../utils/address';
import usePlaceOrderCartContext from './usePlaceOrderCartContext';
import { isAddressSame, ShippingMethodRequiredException } from '../utility';

export default function useAddressSave() {
  const { setErrorMessage } = usePlaceOrderAppContext();
  const {
    setShippingMethod,
    setCartBillingAddress,
    addCartShippingAddress,
    billingAddress: cartBillingAddress,
    shippingAddress: cartShippingAddress,
    hasBillingAddress: hasCartBillingAddress,
    hasShippingAddress: hasCartShippingAddress,
  } = usePlaceOrderCartContext();

  return async (values) => {
    try {
      let needToUpdateShippingMethod = false;
      let setCartBillingAddressPromise = _emptyFunc();
      let setCartShippingAddressPromise = _emptyFunc();
      const billingAddress = _get(values, BILLING_ADDR_FORM);
      const shippingAddress = _get(values, SHIPPING_ADDR_FORM);
      const isBillingSame = LocalStorage.getBillingSameAsShippingInfo();
      const billingAddrSelected = LocalStorage.getCustomerBillingAddressId();
      const shippingAddrSelected = LocalStorage.getCustomerShippingAddressId();

      if (
        !isBillingSame &&
        (!hasCartBillingAddress ||
          (!isValidCustomerAddressId(billingAddrSelected) &&
            !isAddressSame(cartBillingAddress, billingAddress)))
      ) {
        setCartBillingAddressPromise = _makePromise(
          setCartBillingAddress,
          billingAddress
        );
      }

      if (
        !hasCartShippingAddress ||
        (isValidCustomerAddressId(shippingAddrSelected) &&
          !isAddressSame(cartShippingAddress, shippingAddress))
      ) {
        needToUpdateShippingMethod = true;
        setCartShippingAddressPromise = _makePromise(
          addCartShippingAddress,
          shippingAddress,
          isBillingSame
        );

        if (isBillingSame) {
          setCartBillingAddressPromise = _makePromise(
            setCartBillingAddress,
            billingAddress
          );
        }
      }

      // cannot perform these two operations together; because they are trying to
      // write into same tables which will cause errors
      await setCartBillingAddressPromise();
      const cartInfo = await setCartShippingAddressPromise();

      // if there is shipping address update, then shipping method data will be reset.
      // so we need to update the shipping method again;
      // if the selected shipping method is no longer available, then stop place order process.
      if (needToUpdateShippingMethod) {
        const selectedShippingMethod = _get(values, SHIPPING_METHOD);
        const { carrierCode, methodCode } = selectedShippingMethod;
        const newShippingMethods = _get(cartInfo, 'shipping_methods');

        if (!_get(newShippingMethods, `${carrierCode}__mt${methodCode}`)) {
          // this means selected shipping method is not available
          throw new ShippingMethodRequiredException(
            'Selected shipping method is not available due to the shipping address change. Please select from the available methods.'
          );
        }

        if (carrierCode && methodCode) {
          await setShippingMethod(selectedShippingMethod);
        }
      }

      LocalStorage.saveCustomerAddressInfo('', isBillingSame);
    } catch (error) {
      console.error(error);
      if (error instanceof ShippingMethodRequiredException) {
        setErrorMessage(__mt(error.message));
      } else {
        setErrorMessage(__mt('Address update failed. Please try again.'));
      }
    }
  };
}
