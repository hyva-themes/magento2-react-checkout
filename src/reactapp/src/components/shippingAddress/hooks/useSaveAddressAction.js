import { get as _get } from 'lodash-es';

import {
  prepareAddressForSaving,
  isValidCustomerAddressId,
  prepareFormAddressFromCartAddress,
} from '../../../utils/address';
import { __ } from '../../../i18n';
import { BILLING_ADDR_FORM } from '../../../config';
import LocalStorage from '../../../utils/localStorage';
import { _emptyFunc, _makePromise } from '../../../utils';
import useAddressWrapper from '../../address/hooks/useAddressWrapper';
import useShippingAddressAppContext from './useShippingAddressAppContext';
import useShippingAddressCartContext from './useShippingAddressCartContext';
import { billingAddressFormInitValues } from '../../billingAddress/utility';

export default function useSaveAddressAction(shippingAddressFormContext) {
  const {
    regionData,
    setFieldValue,
    isBillingSame,
    selectedAddress,
    setFormToViewMode,
    setSelectedAddress,
    setCustomerAddressSelected,
    setShippingAddressFormFields,
    shippingValues: shippingAddressToSave,
  } = shippingAddressFormContext;
  const {
    setCartBillingAddress,
    addCartShippingAddress,
    setCustomerAddressAsBillingAddress,
    setCustomerAddressAsShippingAddress,
  } = useShippingAddressCartContext();
  const { setMessage, setPageLoader, setErrorMessage, setSuccessMessage } =
    useShippingAddressAppContext();
  const { setBillingSelected, setIsBillingCustomerAddress } =
    useAddressWrapper();

  const submitHandler = async (customerAddressId) => {
    const mostRecentAddresses = LocalStorage.getMostRecentlyUsedAddressList();
    const recentAddressInUse = mostRecentAddresses[customerAddressId];
    const addressToSave = prepareAddressForSaving(
      recentAddressInUse || shippingAddressToSave,
      regionData
    );
    const useCustomerAddressInSave =
      isValidCustomerAddressId(customerAddressId) && !recentAddressInUse;

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

    const addressToSet = {
      ...prepareFormAddressFromCartAddress(
        _get(shippingAddrResponse, 'shipping_address')
      ),
      saveInBook: addressToSave?.saveInBook,
    };
    setShippingAddressFormFields(addressToSet);

    if (isBillingSame) {
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
    const updateCartAddressPromise = _makePromise(
      submitHandler,
      addressIdContext
    );

    try {
      setPageLoader(true);

      await updateCartAddressPromise();

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
