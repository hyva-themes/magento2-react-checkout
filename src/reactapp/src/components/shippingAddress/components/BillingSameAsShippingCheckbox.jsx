import React from 'react';

import Checkbox from '../../common/Form/Checkbox';
import {
  isCartAddressValid,
  isValidCustomerAddressId,
  billingSameAsShippingField,
} from '../../../utils/address';
import { __ } from '../../../i18n';
import { BILLING_ADDR_FORM } from '../../../config';
import LocalStorage from '../../../utils/localStorage';
import useAddressWrapper from '../../address/hooks/useAddressWrapper';
import useShippingAddressAppContext from '../hooks/useShippingAddressAppContext';
import useShippingAddressCartContext from '../hooks/useShippingAddressCartContext';
import useShippingAddressFormikContext from '../hooks/useShippingAddressFormikContext';

function BillingSameAsShippingCheckbox() {
  const {
    cartBillingAddress,
    cartShippingAddress,
    setCartBillingAddress,
    setCustomerAddressAsBillingAddress,
  } = useShippingAddressCartContext();
  const {
    setFieldValue,
    isBillingSame,
    shippingValues,
    selectedAddress,
    isFormSectionValid,
  } = useShippingAddressFormikContext();
  const { isLoggedIn, setPageLoader, setErrorMessage, setSuccessMessage } =
    useShippingAddressAppContext();
  const { setBillingSelected, setIsBillingCustomerAddress } =
    useAddressWrapper();

  const makeBillingSameAsShippingRequest = async () => {
    const billingIsSame = true;
    const isCustomerAddress = isValidCustomerAddressId(selectedAddress);
    const successMessage = __('Billing address made same as shipping address');

    try {
      if (!isLoggedIn || (isLoggedIn && !isCustomerAddress)) {
        setPageLoader(true);
        await setCartBillingAddress({ ...shippingValues });
        setFieldValue(BILLING_ADDR_FORM, {
          ...shippingValues,
          isSameAsShipping: billingIsSame,
        });
        setSuccessMessage(successMessage);
      } else if (isLoggedIn && isCustomerAddress) {
        setPageLoader(true);
        await setCustomerAddressAsBillingAddress(
          selectedAddress,
          billingIsSame
        );
        setSuccessMessage(successMessage);
      }

      setBillingSelected(selectedAddress);
      setIsBillingCustomerAddress(isCustomerAddress);

      LocalStorage.saveCustomerAddressInfo(
        selectedAddress,
        billingIsSame,
        false
      );
    } catch (error) {
      console.error(error);
      setErrorMessage(__('Billing address update failed. Please try again.'));
    } finally {
      setPageLoader(false);
    }
  };

  const toggleBillingEqualsShippingState = async () => {
    const newSameAsShipping = !isBillingSame;
    setFieldValue(billingSameAsShippingField, newSameAsShipping);
    LocalStorage.saveBillingSameAsShipping(newSameAsShipping);

    if (newSameAsShipping && isFormSectionValid) {
      await makeBillingSameAsShippingRequest();
    }
  };

  if (
    !isCartAddressValid(cartShippingAddress) &&
    isCartAddressValid(cartBillingAddress)
  ) {
    return null;
  }

  return (
    <Checkbox
      isChecked={isBillingSame}
      name={billingSameAsShippingField}
      onChange={toggleBillingEqualsShippingState}
      label={__('Use this address as my billing address')}
    />
  );
}

export default BillingSameAsShippingCheckbox;
