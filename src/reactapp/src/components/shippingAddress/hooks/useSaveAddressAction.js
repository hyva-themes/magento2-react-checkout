import { useCallback } from 'react';
import _get from 'lodash.get';
import { _emptyFunc, _makePromise } from '../../../utils';
import useShippingAddressAppContext from './useShippingAddressAppContext';
import useShippingAddressFormikContext from './useShippingAddressFormikContext';
import { SHIPPING_ADDR_FORM } from '../../../config';
import { CART_SHIPPING_ADDRESS } from '../utility';
import useShippingAddressWrapper from './useShippingAddressWrapper';
import useShippingAddressCartContext from './useShippingAddressCartContext';

function customerAddressOnEdit(addressId) {
  return addressId !== CART_SHIPPING_ADDRESS;
}

export default function useSaveAddressAction() {
  const { formSubmit } = useShippingAddressFormikContext();
  const { isLoggedIn, setSuccessMessage } = useShippingAddressAppContext();
  const {
    editMode,
    selectedAddress,
    regionData,
    setToViewMode,
  } = useShippingAddressWrapper();
  const { updateCustomerAddress } = useShippingAddressCartContext();

  return useCallback(
    async formikValues => {
      try {
        let updateCustomerAddrPromise = _emptyFunc();
        const updateCartAddressPromise = _makePromise(formSubmit, formikValues);

        if (isLoggedIn && customerAddressOnEdit(selectedAddress) && editMode) {
          updateCustomerAddrPromise = _makePromise(
            updateCustomerAddress,
            selectedAddress,
            _get(formikValues, SHIPPING_ADDR_FORM, {}),
            regionData
          );
        }

        await Promise.all([
          updateCustomerAddrPromise(),
          updateCartAddressPromise(),
        ]);

        setToViewMode(false);
        setSuccessMessage('Shipping address updated successfully.');
      } catch (error) {
        console.log({ error });
      }
    },
    [
      formSubmit,
      isLoggedIn,
      selectedAddress,
      editMode,
      updateCustomerAddress,
      setSuccessMessage,
      regionData,
      setToViewMode,
    ]
  );
}
