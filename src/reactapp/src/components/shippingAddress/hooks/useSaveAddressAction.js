import _get from 'lodash.get';

import { __ } from '../../../i18n';
import { CART_SHIPPING_ADDRESS } from '../utility';
import { BILLING_ADDR_FORM } from '../../../config';
import LocalStorage from '../../../utils/localStorage';
import { isValidCustomerAddressId } from '../../../utils/address';
import useShippingAddressAppContext from './useShippingAddressAppContext';
import { _cleanObjByKeys, _emptyFunc, _makePromise } from '../../../utils';
import useShippingAddressCartContext from './useShippingAddressCartContext';
import { billingAddressFormInitValues } from '../../billingAddress/utility';

export default function useSaveAddressAction(shippingAddressFormContext) {
  const {
    isLoggedIn,
    setPageLoader,
    setErrorMessage,
    setSuccessMessage,
    updateCustomerAddress,
  } = useShippingAddressAppContext();
  const {
    editMode,
    regionData,
    setFieldValue,
    isBillingSame,
    selectedAddress,
    setFormToViewMode,
    setSelectedAddress,
    customerAddressSelected,
    setCustomerAddressSelected,
    shippingValues: shippingAddressToSave,
  } = shippingAddressFormContext;
  const {
    setCartBillingAddress,
    addCartShippingAddress,
    setCustomerAddressAsBillingAddress,
    setCustomerAddressAsShippingAddress,
  } = useShippingAddressCartContext();

  const submitHandler = async customerAddressId => {
    const mostRecentAddresses = LocalStorage.getMostlyRecentlyUsedAddressList();
    const recentAddressInUse = mostRecentAddresses[customerAddressId];
    const addressToSave = recentAddressInUse || shippingAddressToSave;
    const useCustomerAddressInSave = customerAddressId && !recentAddressInUse;

    setPageLoader(true);

    let updateBillingAddress = _emptyFunc();
    let updateShippingAddress = _makePromise(
      addCartShippingAddress,
      addressToSave,
      isBillingSame
    );

    if (useCustomerAddressInSave) {
      updateShippingAddress = _makePromise(
        setCustomerAddressAsShippingAddress,
        Number(customerAddressId),
        isBillingSame
      );
    }

    if (isBillingSame) {
      if (useCustomerAddressInSave) {
        updateBillingAddress = _makePromise(
          setCustomerAddressAsBillingAddress,
          Number(customerAddressId),
          isBillingSame
        );
      } else {
        updateBillingAddress = _makePromise(setCartBillingAddress, {
          ...addressToSave,
          isSameAsShipping: true,
        });
      }
    }

    const shippingAddrResponse = await updateShippingAddress();
    await updateBillingAddress();

    if (isBillingSame) {
      const addressToSet = _cleanObjByKeys(
        _get(shippingAddrResponse, 'shipping_address'),
        ['fullName']
      );
      setFieldValue(BILLING_ADDR_FORM, {
        ...billingAddressFormInitValues,
        ...addressToSet,
      });
    }

    setPageLoader(false);
  };

  return async addressId => {
    try {
      let customerAddressNeeded = false;
      const addressIdContext = addressId || selectedAddress;
      const hasCustomerAddr =
        addressIdContext && addressIdContext !== CART_SHIPPING_ADDRESS;
      let updateCustomerAddrPromise = _emptyFunc();
      const updateCartAddressPromise = _makePromise(
        submitHandler,
        hasCustomerAddr && addressId
      );

      if (isLoggedIn && customerAddressSelected && editMode) {
        customerAddressNeeded = true;
        updateCustomerAddrPromise = _makePromise(
          updateCustomerAddress,
          addressIdContext,
          shippingAddressToSave,
          regionData
        );
      }

      setPageLoader(true);
      await Promise.all([
        updateCustomerAddrPromise(),
        updateCartAddressPromise(),
      ]);
      setFormToViewMode(false);
      setSelectedAddress(
        hasCustomerAddr ? addressIdContext : CART_SHIPPING_ADDRESS
      );
      setSuccessMessage(__('Shipping address updated successfully'));

      if (hasCustomerAddr) {
        LocalStorage.saveCustomerAddressInfo(addressIdContext, isBillingSame);
        setCustomerAddressSelected(isValidCustomerAddressId(addressIdContext));
      } else if (customerAddressNeeded) {
        LocalStorage.saveCustomerAddressInfo(addressIdContext, isBillingSame);
        setCustomerAddressSelected(isValidCustomerAddressId(addressIdContext));
      } else {
        LocalStorage.saveCustomerAddressInfo('', isBillingSame);
        setCustomerAddressSelected(false);
      }

      setPageLoader(false);
    } catch (error) {
      console.error(error);
      setErrorMessage(__('Shipping address update failed. Please try again'));
      setPageLoader(false);
    }
  };
}
