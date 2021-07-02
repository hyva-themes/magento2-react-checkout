import { __ } from '../../../i18n';
import { CART_BILLING_ADDRESS } from '../utility';
import LocalStorage from '../../../utils/localStorage';
import { _emptyFunc, _makePromise } from '../../../utils';
import useBillingAddressAppContext from './useBillingAddressAppContext';
import useBillingAddressCartContext from './useBillingAddressCartContext';

export default function useSaveAddressAction(billingFormikContext) {
  const {
    setCartBillingAddress,
    setCustomerAddressAsBillingAddress,
  } = useBillingAddressCartContext();
  const {
    isLoggedIn,
    setPageLoader,
    setErrorMessage,
    setSuccessMessage,
    updateCustomerAddress,
  } = useBillingAddressAppContext();
  const {
    editMode,
    regionData,
    selectedAddress,
    setFormToViewMode,
    setSelectedAddress,
    customerAddressSelected,
    setCustomerAddressSelected,
    isBillingAddressSameAsShipping: isBillingSame,
    billingValues,
  } = billingFormikContext;

  return async addressId => {
    try {
      let customerAddressUsed = false;
      const hasCustomerAddr = addressId && addressId !== CART_BILLING_ADDRESS;
      let updateCustomerAddrPromise = _emptyFunc();
      let updateCartAddressPromise = _makePromise(
        setCartBillingAddress,
        billingValues
      );

      if (hasCustomerAddr) {
        updateCartAddressPromise = _makePromise(
          setCustomerAddressAsBillingAddress,
          addressId,
          isBillingSame
        );
      }

      if (isLoggedIn && customerAddressSelected && editMode) {
        customerAddressUsed = true;
        updateCustomerAddrPromise = _makePromise(
          updateCustomerAddress,
          selectedAddress,
          billingValues,
          regionData
        );
      }

      if (hasCustomerAddr) {
        LocalStorage.saveCustomerAddressInfo(addressId, isBillingSame, false);
        setSelectedAddress(addressId);
        setCustomerAddressSelected(true);
      } else if (customerAddressUsed) {
        LocalStorage.saveCustomerAddressInfo(
          selectedAddress,
          isBillingSame,
          false
        );
      } else {
        LocalStorage.saveCustomerAddressInfo('', isBillingSame, false);
        setSelectedAddress(CART_BILLING_ADDRESS);
        setCustomerAddressSelected(false);
      }

      setPageLoader(true);
      await Promise.all([
        updateCustomerAddrPromise(),
        updateCartAddressPromise(),
      ]);
      setFormToViewMode(false);
      setSuccessMessage(__('Billing address updated successfully.'));
      setPageLoader(false);
    } catch (error) {
      console.error(error);
      setErrorMessage(__('Billing address update failed. Please try again'));
      setPageLoader(false);
    }
  };
}
