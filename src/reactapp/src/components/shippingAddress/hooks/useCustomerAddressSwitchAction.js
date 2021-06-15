import useShippingAddressAppContext from './useShippingAddressAppContext';
import useShippingAddressFormikContext from './useShippingAddressFormikContext';
import { CART_SHIPPING_ADDRESS } from '../utility';
import { _emptyFunc, _makePromise } from '../../../utils';

export default function useCustomerAddressSwitchAction() {
  const { editMode, submitHandler } = useShippingAddressFormikContext();
  const { isLoggedIn } = useShippingAddressAppContext();

  /**
   * Setting customer address to the cart address when user opt out the address
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

      if (addressId === CART_SHIPPING_ADDRESS) {
        updateAddressPromise = _makePromise(submitHandler);
      }
    }

    await Promise.all([updateAddressPromise()]);
  };
}
