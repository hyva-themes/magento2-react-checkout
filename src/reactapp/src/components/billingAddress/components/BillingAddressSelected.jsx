import React from 'react';
import _get from 'lodash.get';

import { AddressCard } from '../../address';
import {
  isCartAddressValid,
  selectedAddressTitle,
  formatAddressListToCardData,
} from '../../../utils/address';
import useBillingAddressAppContext from '../hooks/useBillingAddressAppContext';
import useBillingAddressCartContext from '../hooks/useBillingAddressCartContext';
import useBillingAddressFormikContext from '../hooks/useBillingAddressFormikContext';

function BillingAddressSelected() {
  const {
    billingValues,
    selectedAddress,
    setBackupAddress,
    setFormToEditMode,
  } = useBillingAddressFormikContext();
  const {
    stateList,
    isLoggedIn,
    customerAddressList,
  } = useBillingAddressAppContext();
  const { cartBillingAddress } = useBillingAddressCartContext();
  const addressInfo = formatAddressListToCardData(
    [{ id: selectedAddress, ...cartBillingAddress }],
    stateList
  );

  const performAddressEdit = () => {
    const customerAddress = _get(customerAddressList, selectedAddress);
    const addressToBackup = customerAddress || billingValues;

    setBackupAddress({ ...addressToBackup });
    setFormToEditMode();
  };

  if (!isCartAddressValid(cartBillingAddress)) {
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

export default BillingAddressSelected;
