import _get from 'lodash.get';

import { __ } from '../../../i18n';
import { BILLING_ADDR_FORM } from '../../../config';
import LocalStorage from '../../../utils/localStorage';
import { isValidCustomerAddressId } from '../../../utils/address';
import useAddressWrapper from '../../address/hooks/useAddressWrapper';
import useShippingAddressAppContext from './useShippingAddressAppContext';
import { _cleanObjByKeys, _emptyFunc, _makePromise } from '../../../utils';
import useShippingAddressCartContext from './useShippingAddressCartContext';
import { billingAddressFormInitValues } from '../../billingAddress/utility';

export default function useSaveAddressAction(shippingAddressFormContext) {
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
    setBillingSelected,
    setIsBillingCustomerAddress,
  } = useAddressWrapper();
  const {
    isLoggedIn,
    setPageLoader,
    setErrorMessage,
    setSuccessMessage,
    updateCustomerAddress,
  } = useShippingAddressAppContext();
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
        isSameAsShipping: true,
      });
    }

    setPageLoader(false);
  };

  return async addressId => {
    try {
      const addressIdContext = addressId || selectedAddress;
      const isCustomerAddress = isValidCustomerAddressId(addressIdContext);
      let updateCustomerAddrPromise = _emptyFunc();
      const updateCartAddressPromise = _makePromise(
        submitHandler,
        isCustomerAddress && addressId
      );

      if (isLoggedIn && customerAddressSelected && editMode) {
        updateCustomerAddrPromise = _makePromise(
          updateCustomerAddress,
          addressIdContext,
          shippingAddressToSave,
          regionData
        );
      }

      setPageLoader(true);
      await updateCartAddressPromise();

      // we don't need to await customer address update operation;
      // it can happen in background
      updateCustomerAddrPromise();

      setFormToViewMode(false);
      setSelectedAddress(addressIdContext);
      setCustomerAddressSelected(isValidCustomerAddressId(addressIdContext));

      if (isBillingSame) {
        setBillingSelected(addressIdContext);
        setIsBillingCustomerAddress(isValidCustomerAddressId(addressIdContext));
      }

      LocalStorage.saveCustomerAddressInfo(addressIdContext, isBillingSame);
      setSuccessMessage(__('Shipping address updated successfully'));
      setPageLoader(false);
    } catch (error) {
      console.error(error);
      setErrorMessage(__('Shipping address update failed. Please try again'));
      setPageLoader(false);
    }
  };
}
