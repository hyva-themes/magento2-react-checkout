import React from 'react';
import _get from 'lodash.get';

import { AddressCard } from '../../address';
import BillingSameAsShippingCheckbox from './BillingSameAsShippingCheckbox';
import {
  useShippingAddressAppContext,
  useShippingAddressCartContext,
  useShippingAddressFormikContext,
} from '../../../../code/shippingAddress/hooks';
import {
  isCartAddressValid,
  formatAddressListToCardData,
} from '../../../../../utils/address';
import { selectedAddressTitle } from '../utility';

function ShippingAddressSelected() {
  const {
    shippingValues,
    selectedAddress,
    setBackupAddress,
    setFormToEditMode,
  } = useShippingAddressFormikContext();
  const { stateList, isLoggedIn, customerAddressList } =
    useShippingAddressAppContext();
  const { cartShippingAddress } = useShippingAddressCartContext();
  const addressInfo = formatAddressListToCardData(
    [{ id: selectedAddress, ...cartShippingAddress }],
    stateList
  );

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
      billingSameCheckbox={<BillingSameAsShippingCheckbox />}
      title={selectedAddressTitle(isLoggedIn, customerAddressList)}
    />
  );
}

export default ShippingAddressSelected;
