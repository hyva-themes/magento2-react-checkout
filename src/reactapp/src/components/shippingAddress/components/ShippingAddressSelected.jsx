import React from 'react';
import _get from 'lodash.get';

import { AddressCard } from '../../address';
import {
  isCartAddressValid,
  formatAddressListToCardData,
} from '../../../utils/address';
import { selectedAddressTitle } from '../utility';
import useShippingAddressAppContext from '../hooks/useShippingAddressAppContext';
import useShippingAddressCartContext from '../hooks/useShippingAddressCartContext';
import useShippingAddressFormikContext from '../hooks/useShippingAddressFormikContext';

function ShippingAddressSelected() {
  const {
    isBillingSame,
    shippingValues,
    selectedAddress,
    setBackupAddress,
    setFormToEditMode,
  } = useShippingAddressFormikContext();
  const {
    stateList,
    isLoggedIn,
    customerAddressList,
  } = useShippingAddressAppContext();
  const { cartShippingAddress } = useShippingAddressCartContext();
  const addressInfo = formatAddressListToCardData(
    [{ id: selectedAddress, ...cartShippingAddress }],
    stateList
  );

  console.log({ isBillingSame })

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
      isBillingSame={isBillingSame}
      showBillingSameCheckbox
      address={addressInfo[0]}
      actions={{ performAddressEdit }}
      title={selectedAddressTitle(isLoggedIn, customerAddressList)}
    />
  );
}

export default ShippingAddressSelected;
