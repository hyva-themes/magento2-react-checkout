/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import { _toString } from '../../../utils';
import { AddressCard } from '../../address';
import { prepareShippingAddressCardList } from '../utility';
import useShippingAddressAppContext from '../hooks/useShippingAddressAppContext';
import useCustomerAddressSwitchAction from '../hooks/useCustomerAddressSwitchAction';
import useShippingAddressFormikContext from '../hooks/useShippingAddressFormikContext';

function ShippingAddressCardList() {
  const { values } = useFormikContext();
  const { customerAddressList, isLoggedIn } = useShippingAddressAppContext();
  const performCustomerAddressSwitching = useCustomerAddressSwitchAction();
  const {
    regionData,
    selectedAddress,
    setBackupAddress,
    setFormToEditMode,
    setSelectedAddress,
    customerAddressSelected,
  } = useShippingAddressFormikContext();
  const addressList = prepareShippingAddressCardList(
    values,
    regionData,
    customerAddressList,
    customerAddressSelected
  );

  const performAddressEdit = addressId => {
    const addressToBackup = _get(customerAddressList, addressId);
    if (isLoggedIn && !addressToBackup) {
      return;
    }
    setBackupAddress({ ...addressToBackup });
    setFormToEditMode();
  };

  // when the address box radio button is clicked, this will be fired
  // use to update the cart address with the customer address
  const performAddressSwitching = async addressId => {
    if (addressId === selectedAddress) {
      return;
    }

    await performCustomerAddressSwitching(addressId);

    setSelectedAddress(_toString(addressId));
  };

  return (
    <div className="mx-2 space-y-3">
      {addressList.map(address => (
        <AddressCard
          key={address.id}
          address={address}
          inputName="shippingAddressChooser"
          isSelected={selectedAddress === address.id}
          actions={{ performAddressSwitching, performAddressEdit }}
        />
      ))}
    </div>
  );
}

export default ShippingAddressCardList;
