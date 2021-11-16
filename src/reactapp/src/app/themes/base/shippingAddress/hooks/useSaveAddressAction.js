import _get from 'lodash.get';

import {
  _emptyFunc,
  _makePromise,
  _cleanObjByKeys,
} from '../../../../../utils';
import {
  useShippingAddressAppContext,
  useShippingAddressCartContext,
} from '../../../../code/shippingAddress/hooks';
import { __ } from '../../../../../i18n';
import { useAddressWrapper } from '../../address/hooks';
import { BILLING_ADDR_FORM } from '../../../../../config';
import LocalStorage from '../../../../../utils/localStorage';
import { isValidCustomerAddressId } from '../../../../../utils/address';
import { billingAddressFormInitValues } from '../../billingAddress/utility';

const emptyCallback = _emptyFunc();

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
  const { setBillingSelected, setIsBillingCustomerAddress } =
    useAddressWrapper();
  const {
    isLoggedIn,
    setMessage,
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

  const submitHandler = async (customerAddressId) => {
    const mostRecentAddresses = LocalStorage.getMostlyRecentlyUsedAddressList();
    const recentAddressInUse = mostRecentAddresses[customerAddressId];
    const addressToSave = recentAddressInUse || shippingAddressToSave;
    const useCustomerAddressInSave = customerAddressId && !recentAddressInUse;

    setPageLoader(true);

    let updateBillingAddress = emptyCallback;
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

  return async (addressId) => {
    setMessage(false);

    const addressIdContext = addressId || selectedAddress;
    const isCustomerAddress = isValidCustomerAddressId(addressIdContext);
    let updateCustomerAddrPromise = emptyCallback;
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

    try {
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
      setSuccessMessage(__('Shipping address updated successfully.'));
      setPageLoader(false);
    } catch (error) {
      console.error(error);
      setErrorMessage(__('Shipping address update failed. Please try again'));
      setPageLoader(false);
    }
  };
}
