import React from 'react';
import { bool } from 'prop-types';

import AddressOptions from '../../address/components/AddressOptions';
import {
  isCartAddressValid,
  isValidCustomerAddressId,
  prepareFormAddressFromCartAddress,
} from '../../../utils/address';
import { __ } from '../../../i18n';
import LocalStorage from '../../../utils/localStorage';
import { billingAddrOtherOptionField } from '../utility';
import useBillingAddressAppContext from '../hooks/useBillingAddressAppContext';
import useAddressOtherOptions from '../../address/hooks/useAddressOtherOptions';
import useBillingAddressCartContext from '../hooks/useBillingAddressCartContext';
import useBillingAddressFormikContext from '../hooks/useBillingAddressFormikContext';

function BillingAddressOthers({ forceHide }) {
  const {
    setFieldValue,
    submitHandler,
    selectedAddress,
    setSelectedAddress,
    setCustomerAddressSelected,
    billingOtherOptionSelected,
    setBillingAddressFormFields,
  } = useBillingAddressFormikContext();
  const { cartBillingAddress } = useBillingAddressCartContext();
  const { isLoggedIn, customerAddressList } = useBillingAddressAppContext();
  const isCartBillingAddressValid = isCartAddressValid(cartBillingAddress);
  const mostRecentAddressList = LocalStorage.getMostlyRecentlyUsedAddressList();

  const addressOptions = useAddressOtherOptions({
    selectedAddress,
    cartAddress: cartBillingAddress,
  });

  /**
   * Perform when an other address option is changed.
   */
  const handleOptionChange = event => {
    const addressId = event.target.value;
    const customerAddress = customerAddressList[addressId];

    setFieldValue(billingAddrOtherOptionField, addressId);

    if (isCartBillingAddressValid) {
      return;
    }

    setSelectedAddress(addressId);
    setCustomerAddressSelected(isValidCustomerAddressId(addressId));

    if (mostRecentAddressList[addressId]) {
      setBillingAddressFormFields(mostRecentAddressList[addressId]);
    } else if (customerAddress) {
      setBillingAddressFormFields(
        prepareFormAddressFromCartAddress({ ...customerAddress })
      );
    }
  };

  /**
   * Executes when "Bill Here" button is pressed.
   */
  const handleShipToOtherOption = async () => {
    await submitHandler(billingOtherOptionSelected);
    setFieldValue(billingAddrOtherOptionField, '');
  };

  if (!isLoggedIn || forceHide) {
    return <></>;
  }

  return (
    <AddressOptions
      options={addressOptions}
      inputName={billingAddrOtherOptionField}
      selectedOption={billingOtherOptionSelected}
      actions={{ handleOptionChange, handleShipToOtherOption }}
      title={
        isCartBillingAddressValid
          ? __('OTHER ADDRESSES')
          : __('CHOOSE FROM THE ADDRESS LIST')
      }
    />
  );
}

BillingAddressOthers.propTypes = {
  forceHide: bool,
};

BillingAddressOthers.defaultProps = {
  forceHide: false,
};

export default BillingAddressOthers;
