import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import useShippingAddressAppContext from './useShippingAddressAppContext';
import useShippingAddressCartContext from './useShippingAddressCartContext';
import { __ } from '../../../i18n';
import { CART_SHIPPING_ADDRESS } from '../utility';
import LocalStorage from '../../../utils/localStorage';
import { BILLING_ADDR_FORM, SHIPPING_ADDR_FORM } from '../../../config';
import { _cleanObjByKeys, _emptyFunc, _makePromise } from '../../../utils';
import { billingAddressFormInitValues } from '../../billingAddress/utility';

const isSameAsShippingField = `${BILLING_ADDR_FORM}.isSameAsShipping`;

export default function useSaveAddressAction(shippingAddressFormContext) {
  const { values, setFieldValue } = useFormikContext();
  const {
    isLoggedIn,
    setPageLoader,
    setSuccessMessage,
    setErrorMessage,
    updateCustomerAddress,
  } = useShippingAddressAppContext();
  const {
    editMode,
    selectedAddress,
    regionData,
    setFormToViewMode,
    customerAddressSelected,
    setSelectedAddress,
    setCustomerAddressSelected,
  } = shippingAddressFormContext;
  const {
    addCartShippingAddress,
    setCartBillingAddress,
    setCustomerAddressAsBillingAddress,
    setCustomerAddressAsShippingAddress,
  } = useShippingAddressCartContext();

  const submitHandler = async customerAddressId => {
    try {
      setPageLoader(true);

      const isBillingSame = _get(values, isSameAsShippingField);
      const shippingAddressToSave = _get(values, SHIPPING_ADDR_FORM);
      let updateBillingAddress = _emptyFunc();
      let updateShippingAddress = _makePromise(
        addCartShippingAddress,
        shippingAddressToSave,
        isBillingSame
      );

      if (customerAddressId) {
        updateShippingAddress = _makePromise(
          setCustomerAddressAsShippingAddress,
          Number(customerAddressId),
          isBillingSame
        );
      }

      if (isBillingSame) {
        if (customerAddressId) {
          updateBillingAddress = _makePromise(
            setCustomerAddressAsBillingAddress,
            Number(customerAddressId),
            isBillingSame
          );
        } else {
          updateBillingAddress = _makePromise(setCartBillingAddress, {
            ...shippingAddressToSave,
            isSameAsShipping: true,
          });
        }
      }

      const [shippingAddrResponse] = await Promise.all([
        updateShippingAddress(),
        updateBillingAddress(),
      ]);

      if (isBillingSame) {
        const addressToSet = _cleanObjByKeys(
          _get(shippingAddrResponse, 'shipping_addresses'),
          ['fullName']
        );
        setFieldValue(BILLING_ADDR_FORM, {
          ...billingAddressFormInitValues,
          ...addressToSet,
        });
      }

      setPageLoader(false);
    } catch (error) {
      console.error(error);
      setPageLoader(false);
    }
  };

  return async addressId => {
    try {
      let customerAddressNeeded = false;
      const isBillingSame = _get(values, isSameAsShippingField);
      const hasCustomerAddr = addressId && addressId !== CART_SHIPPING_ADDRESS;
      let updateCustomerAddrPromise = _emptyFunc();
      const updateCartAddressPromise = _makePromise(
        submitHandler,
        hasCustomerAddr && addressId
      );

      if (isLoggedIn && customerAddressSelected && editMode) {
        customerAddressNeeded = true;
        updateCustomerAddrPromise = _makePromise(
          updateCustomerAddress,
          selectedAddress,
          _get(values, SHIPPING_ADDR_FORM, {}),
          regionData
        );
      }

      if (hasCustomerAddr) {
        LocalStorage.saveCustomerAddressInfo(addressId, isBillingSame);
        setCustomerAddressSelected(true);
      } else if (customerAddressNeeded) {
        LocalStorage.saveCustomerAddressInfo(selectedAddress, isBillingSame);
        setCustomerAddressSelected(true);
      } else {
        LocalStorage.saveCustomerAddressInfo('', isBillingSame);
        setCustomerAddressSelected(false);
      }

      setPageLoader(true);
      await Promise.all([
        updateCustomerAddrPromise(),
        updateCartAddressPromise(),
      ]);
      setFormToViewMode(false);
      setSelectedAddress(hasCustomerAddr ? addressId : CART_SHIPPING_ADDRESS);
      setSuccessMessage(__('Shipping address updated successfully'));
      setPageLoader(false);
    } catch (error) {
      console.error(error);
      setErrorMessage(__('Shipping address update failed. Please try again'));
      setPageLoader(false);
    }
  };
}
