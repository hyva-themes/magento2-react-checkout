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
  } = useShippingAddressFormikContext();
  const {
    isLoggedIn,
    setPageLoader,
    setErrorMessage,
    setSuccessMessage,
  } = useShippingAddressAppContext();

  const makeBillingSameAsShippingRequest = async () => {
    const billingIsSame = true;
    const successMessage = __('Billing address made same as shipping address');

    try {
      if (
        !isLoggedIn ||
        (isLoggedIn && !isValidCustomerAddressId(selectedAddress))
      ) {
        setPageLoader(true);
        await setCartBillingAddress({ ...shippingValues });
        setFieldValue(BILLING_ADDR_FORM, {
          ...shippingValues,
          isSameAsShipping: billingIsSame,
        });
        setSuccessMessage(successMessage);
        setPageLoader(false);
        return;
      }

      if (isLoggedIn && isValidCustomerAddressId(selectedAddress)) {
        LocalStorage.saveCustomerAddressInfo(
          selectedAddress,
          billingIsSame,
          false
        );
        setPageLoader(true);
        await setCustomerAddressAsBillingAddress(
          selectedAddress,
          billingIsSame
        );
        setSuccessMessage(successMessage);
        setPageLoader(false);
        return;
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(__('Billing address update failed. Please try later'));
    }
  };

  const toggleBillingEqualsShippingState = async () => {
    const newSameAsShipping = !isBillingSame;
    setFieldValue(billingSameAsShippingField, newSameAsShipping);
    LocalStorage.saveBillingSameAsShipping(newSameAsShipping);

    if (newSameAsShipping) {
      await makeBillingSameAsShippingRequest();
    }
  };

  if (
    !isCartAddressValid(cartShippingAddress) &&
    isCartAddressValid(cartBillingAddress)
  ) {
    return <></>;
  }

  return (
    <div className="flex items-center h-10 px-3 pb-4 mt-3 -mx-4 -mb-4 bg-gray-200">
      <Checkbox
        isChecked={isBillingSame}
        name={billingSameAsShippingField}
        onChange={toggleBillingEqualsShippingState}
        label={__('Use this address as my billing address')}
      />
    </div>
  );
}

export default BillingSameAsShippingCheckbox;
