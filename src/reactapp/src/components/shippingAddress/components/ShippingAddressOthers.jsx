import React from 'react';
import { __ } from '../../../i18n';
import { _cleanObjByKeys, _objToArray } from '../../../utils';
import {
  formatAddressListToCardData,
  isCartAddressValid,
  isValidCustomerAddressId,
  prepareFormAddressFromCartAddress,
} from '../../../utils/address';
import LocalStorage from '../../../utils/localStorage';
import AddressOptions from '../../address/components/AddressOptions';
import useShippingAddressAppContext from '../hooks/useShippingAddressAppContext';
import useShippingAddressCartContext from '../hooks/useShippingAddressCartContext';
import useShippingAddressFormikContext from '../hooks/useShippingAddressFormikContext';
import {
  CART_SHIPPING_ADDRESS,
  shippingAddrOtherOptionField,
} from '../utility';

function ShippingAddressOthers({ forceHide }) {
  const { isLoggedIn, customerAddressList } = useShippingAddressAppContext();
  const {
    selectedAddress,
    setFieldValue,
    setSelectedAddress,
    setCustomerAddressSelected,
    shippingOtherOptionSelected,
    setShippingAddressFormFields,
    submitHandler,
  } = useShippingAddressFormikContext();
  const { cartShippingAddress } = useShippingAddressCartContext();
  const isCartShippingAddressValid = isCartAddressValid(cartShippingAddress);
  const newAddrFromLocalStorage = LocalStorage.getNewShippingAddress();
  const customerAddrToConsider = isCartShippingAddressValid
    ? _cleanObjByKeys(customerAddressList, [selectedAddress])
    : customerAddressList;

  let addressOptions = formatAddressListToCardData(
    _objToArray(customerAddrToConsider)
  );

  if (
    newAddrFromLocalStorage &&
    (selectedAddress !== CART_SHIPPING_ADDRESS || !isCartShippingAddressValid)
  ) {
    const newAddressCardData = formatAddressListToCardData([
      { id: CART_SHIPPING_ADDRESS, ...newAddrFromLocalStorage },
    ]);
    addressOptions = [newAddressCardData[0], ...addressOptions];
  }

  const handleOptionChange = event => {
    const addressId = event.target.value;
    setFieldValue(shippingAddrOtherOptionField, addressId);
    const customerAddress = customerAddressList[addressId];

    if (isCartShippingAddressValid) {
      return;
    }

    setSelectedAddress(addressId);
    setCustomerAddressSelected(!!customerAddress);

    if (addressId === CART_SHIPPING_ADDRESS) {
      setShippingAddressFormFields(newAddrFromLocalStorage);
    } else if (customerAddress) {
      setShippingAddressFormFields(
        prepareFormAddressFromCartAddress({ ...customerAddress })
      );
    }
  };

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

export default ShippingAddressOthers;
