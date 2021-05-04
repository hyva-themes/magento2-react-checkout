/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useFormikContext } from 'formik';

import { AddressCard } from '../../address';
import useBillingAddressWrapper from '../hooks/useBillingAddressWrapper';
import useCustomerAddressSwitchAction from '../hooks/useCustomerAddressSwitchAction';
import useBillingAddressAppContext from '../hooks/useBillingAddressAppContext';
import useBillingAddressCartContext from '../hooks/useBillingAddressCartContext';
import { _toString } from '../../../utils';
import { prepareBillingAddressCardList } from '../utility';

function BillingAddressCardList() {
  const { values } = useFormikContext();
  const { customerAddressList } = useBillingAddressAppContext();
  const { cartBillingAddress } = useBillingAddressCartContext();
  const performCustomerAddressSwitching = useCustomerAddressSwitchAction();
  const {
    regionData,
    selectedAddress,
    customerAddressSelected,
    setSelectedAddress,
    setToEditMode,
    setBackupAddress,
  } = useBillingAddressWrapper();
  const addressList = prepareBillingAddressCardList(
    values,
    customerAddressList,
    regionData,
    customerAddressSelected
  );

  const performAddressEdit = () => {
    setBackupAddress({ ...cartBillingAddress });
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
          address={address}
          isSelected={selectedAddress === address.id}
          actions={{ performAddressSwitching, performAddressEdit }}
        />
      ))}
    </div>
  );
}

export default BillingAddressCardList;
