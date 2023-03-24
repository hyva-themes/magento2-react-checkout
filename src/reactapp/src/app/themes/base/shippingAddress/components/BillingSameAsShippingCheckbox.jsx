import React from 'react';

import { Checkbox } from '../../../../code/common/Form';
import {
  isCartAddressValid,
  isValidCustomerAddressId,
  billingSameAsShippingField,
} from '../../../../../utils/address';
import {
  useShippingAddressAppContext,
  useShippingAddressCartContext,
  useShippingAddressFormikContext,
} from '../../../../code/shippingAddress/hooks';
import { __ } from '../../../../../i18n';
import { useAddressWrapper } from '../../address/hooks';
import { BILLING_ADDR_FORM } from '../../../../../config';
import LocalStorage from '../../../../../utils/localStorage';

function BillingSameAsShippingCheckbox() {
  const {
    cartBillingAddress,
    cartShippingAddress,
    setCartBillingAddress,
    setCustomerAddressAsBillingAddress,
  } = useShippingAddressCartContext();
  const { setFieldValue, isBillingSame, shippingValues, selectedAddress } =
    useShippingAddressFormikContext();
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

    if (newSameAsShipping) {
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
