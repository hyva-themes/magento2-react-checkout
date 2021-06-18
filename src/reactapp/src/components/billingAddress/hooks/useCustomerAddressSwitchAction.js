import useBillingAddressAppContext from './useBillingAddressAppContext';
import useBillingAddressFormikContext from './useBillingAddressFormikContext';
import { CART_BILLING_ADDRESS } from '../utility';
import { _emptyFunc, _makePromise } from '../../../utils';

export default function useCustomerAddressSwitchAction() {
  const { editMode, submitHandler } = useBillingAddressFormikContext();
  const { isLoggedIn } = useBillingAddressAppContext();

  /**
   * Setting customer address to the cart address when user chose a customer address
   */
  return async addressId => {
    if (!isLoggedIn) {
      return;
    }

    let updateAddressPromise = _emptyFunc();

    // if address is new, then submit it with formik values; else use customer
    // address id to update the cart address
    if (!editMode) {
      updateAddressPromise = _makePromise(submitHandler, addressId);

      if (addressId === CART_BILLING_ADDRESS) {
        updateAddressPromise = _makePromise(submitHandler);
      }
    }

    await Promise.all([updateAddressPromise()]);
  };
}
