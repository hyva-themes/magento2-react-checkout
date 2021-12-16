import {
  isValidCustomerAddressId,
  billingSameAsShippingField,
  prepareFormAddressFromCartAddress,
} from '../../../utils/address';
import { __ } from '../../../i18n';
import LocalStorage from '../../../utils/localStorage';
import { _emptyFunc, _makePromise } from '../../../utils';
import useBillingAddressAppContext from './useBillingAddressAppContext';
import useBillingAddressCartContext from './useBillingAddressCartContext';

export default function useSaveAddressAction(billingFormikContext) {
  const { setCartBillingAddress, setCustomerAddressAsBillingAddress } =
    useBillingAddressCartContext();
  const {
    isLoggedIn,
    setMessage,
    setPageLoader,
    setErrorMessage,
    setSuccessMessage,
    updateCustomerAddress,
  } = useBillingAddressAppContext();
  const {
    editMode,
    regionData,
    billingValues,
    isBillingSame,
    setFieldValue,
    selectedAddress,
    setFormToViewMode,
    setSelectedAddress,
    customerAddressSelected,
    setCustomerAddressSelected,
    setBillingAddressFormFields,
  } = billingFormikContext;

  return async (addressId) => {
    setMessage(false);

    const addressIdContext = addressId || selectedAddress;
    const isCustomerAddress = isValidCustomerAddressId(addressId);
    const mostRecentAddresses = LocalStorage.getMostlyRecentlyUsedAddressList();
    const recentAddressInUse = mostRecentAddresses[addressId];
    const billingToSave = recentAddressInUse || billingValues;
    let updateCustomerAddrPromise = _emptyFunc();
    let updateCartAddressPromise = _makePromise(
      setCartBillingAddress,
      billingToSave
    );

    if (isCustomerAddress) {
      updateCartAddressPromise = _makePromise(
        setCustomerAddressAsBillingAddress,
        addressIdContext,
        isBillingSame
      );
    }

    if (isLoggedIn && customerAddressSelected && editMode) {
      updateCustomerAddrPromise = _makePromise(
        updateCustomerAddress,
        selectedAddress,
        billingValues,
        regionData
      );
    }

    try {
      setPageLoader(true);
      const result = await updateCartAddressPromise();
      const addressToSet = prepareFormAddressFromCartAddress(
        result?.billing_address
      );
      setBillingAddressFormFields(addressToSet);

      // we don't need to await customer address update operation;
      // it can happen in background
      updateCustomerAddrPromise();

      setFormToViewMode(false);
      setSelectedAddress(addressIdContext);
      setCustomerAddressSelected(isValidCustomerAddressId(addressIdContext));

      LocalStorage.saveCustomerAddressInfo(
        addressIdContext,
        isBillingSame,
        false
      );

      // When we switch address from billing address section, there is chance to
      // set same customer address which is been used as the current shipping address.
      // In this case, we will force set billing === shipping
      const billingIdInStorage = LocalStorage.getCustomerBillingAddressId();
      const shippingIdInStorage = LocalStorage.getCustomerShippingAddressId();
      if (billingIdInStorage === shippingIdInStorage) {
        setFieldValue(billingSameAsShippingField, true);
      }

      setSuccessMessage(__('Billing address updated successfully.'));
      setPageLoader(false);
    } catch (error) {
      console.error(error);
      setErrorMessage(__('Billing address update failed. Please try again.'));
      setPageLoader(false);
    }
  };
}
