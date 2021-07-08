import React from 'react';
import _get from 'lodash.get';
import {
  formatAddressListToCardData,
  isCartAddressValid,
} from '../../../utils/address';
import useShippingAddressCartContext from '../hooks/useShippingAddressCartContext';
import useShippingAddressFormikContext from '../hooks/useShippingAddressFormikContext';
import useShippingAddressAppContext from '../hooks/useShippingAddressAppContext';
import { AddressCard } from '../../address';
import { selectedAddressTitle } from '../utility';

function ShippingAddressSelected() {
  const {
    shippingValues,
    setBackupAddress,
    selectedAddress,
    setFormToEditMode,
  } = useShippingAddressFormikContext();
  const { customerAddressList, isLoggedIn } = useShippingAddressAppContext();
  const { cartShippingAddress } = useShippingAddressCartContext();
  const addressInfo = formatAddressListToCardData([
    { id: selectedAddress, ...cartShippingAddress },
  ]);

  const performAddressEdit = () => {
    const customerAddress = _get(customerAddressList, selectedAddress);
    const addressToBackup = customerAddress || shippingValues;

    setBackupAddress({ ...addressToBackup });
    setFormToEditMode();
  };

  if (!isCartAddressValid(cartShippingAddress)) {
    return <></>;
  }

  return (
    <AddressCard
      address={addressInfo[0]}
      actions={{ performAddressEdit }}
      title={selectedAddressTitle(isLoggedIn, customerAddressList)}
    />
  );
}

export default ShippingAddressSelected;
