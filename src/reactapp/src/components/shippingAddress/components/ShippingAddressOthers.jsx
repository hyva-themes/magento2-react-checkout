import React from 'react';
import { bool } from 'prop-types';

import AddressOptions from '../../address/components/AddressOptions';
import {
  prepareAddressOtherOptions,
  shippingAddrOtherOptionField,
} from '../utility';
import {
  isCartAddressValid,
  isValidCustomerAddressId,
  prepareFormAddressFromCartAddress,
} from '../../../utils/address';
import { __ } from '../../../i18n';
import LocalStorage from '../../../utils/localStorage';
import useShippingAddressAppContext from '../hooks/useShippingAddressAppContext';
import useShippingAddressCartContext from '../hooks/useShippingAddressCartContext';
import useShippingAddressFormikContext from '../hooks/useShippingAddressFormikContext';

function ShippingAddressOthers({ forceHide }) {
  const {
    stateList,
    isLoggedIn,
    customerAddressList,
  } = useShippingAddressAppContext();
  const {
    setFieldValue,
    submitHandler,
    selectedAddress,
    setSelectedAddress,
    setCustomerAddressSelected,
    shippingOtherOptionSelected,
    setShippingAddressFormFields,
  } = useShippingAddressFormikContext();
  const { cartShippingAddress } = useShippingAddressCartContext();
  const isCartShippingAddressValid = isCartAddressValid(cartShippingAddress);
  const mostRecentAddressList = LocalStorage.getMostlyRecentlyUsedAddressList();

  const addressOptions = prepareAddressOtherOptions({
    stateList,
    selectedAddress,
    cartShippingAddress,
    customerAddressList,
  });

  /**
   * Perform when an other address option is changed.
   */
  const handleOptionChange = event => {
    const addressId = event.target.value;
    const customerAddress = customerAddressList[addressId];

    setFieldValue(shippingAddrOtherOptionField, addressId);

    if (isCartShippingAddressValid) {
      return;
    }

    setSelectedAddress(addressId);
    setCustomerAddressSelected(isValidCustomerAddressId(addressId));

    if (mostRecentAddressList[addressId]) {
      setShippingAddressFormFields(mostRecentAddressList[addressId]);
    } else if (customerAddress) {
      setShippingAddressFormFields(
        prepareFormAddressFromCartAddress({ ...customerAddress })
      );
    }
  };

  /**
   * Executes when "Ship Here" button is pressed.
   */
  const handleShipToOtherOption = async () => {
    await submitHandler(shippingOtherOptionSelected);
    setFieldValue(shippingAddrOtherOptionField, '');
  };

  if (!isLoggedIn || forceHide) {
    return <></>;
  }

  return (
    <AddressOptions
      options={addressOptions}
      inputName={shippingAddrOtherOptionField}
      selectedOption={shippingOtherOptionSelected}
      actions={{ handleOptionChange, handleShipToOtherOption }}
      title={
        isCartShippingAddressValid
          ? __('OTHER ADDRESSES')
          : __('CHOOSE FROM THE ADDRESS LIST')
      }
    />
  );
}

ShippingAddressOthers.propTypes = {
  forceHide: bool,
};

ShippingAddressOthers.defaultProps = {
  forceHide: false,
};

export default ShippingAddressOthers;
