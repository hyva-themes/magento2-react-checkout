/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useFormikContext } from 'formik';

import { AddressCard } from '../../address';
import useShippingAddressWrapper from '../hooks/useShippingAddressWrapper';
import useCustomerAddressSwitchAction from '../hooks/useCustomerAddressSwitchAction';
import useShippingAddressAppContext from '../hooks/useShippingAddressAppContext';
import useShippingAddressCartContext from '../hooks/useShippingAddressCartContext';
import { _toString } from '../../../utils';
import { prepareShippingAddressCardList } from '../utility';

function ShippingAddressCardList() {
  const { values } = useFormikContext();
  const { customerAddressList } = useShippingAddressAppContext();
  const { cartShippingAddress } = useShippingAddressCartContext();
  const performCustomerAddressSwitching = useCustomerAddressSwitchAction();
  const {
    regionData,
    selectedAddress,
    customerAddressSelected,
    setSelectedAddress,
    setToEditMode,
    setBackupAddress,
  } = useShippingAddressWrapper();
  const addressList = prepareShippingAddressCardList(
    values,
    customerAddressList,
    regionData,
    customerAddressSelected
  );

  const performAddressEdit = () => {
    setBackupAddress({ ...cartShippingAddress });
    setToEditMode();
  };

  // when the address box radio button is clicked, this will be fired
  // use to update the cart address with the customer address
  const performAddressSwitching = async addressId => {
    if (addressId === selectedAddress) {
      return;
    }

    setSelectedAddress(_toString(addressId));
    await performCustomerAddressSwitching(addressId, values);
  };

  return (
    <div className="mx-2 space-y-3">
      {addressList.map(address => (
        <AddressCard
          key={address.id}
          inputName="shippingAddressChooser"
          address={address}
          isSelected={selectedAddress === address.id}
          actions={{ performAddressSwitching, performAddressEdit }}
        />
      ))}
    </div>
  );
}

export default ShippingAddressCardList;
