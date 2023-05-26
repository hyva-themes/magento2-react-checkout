import React from 'react';
import { get as _get } from 'lodash-es';

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
    return null;
  }

  return (
    <AddressCard
      address={addressInfo[0]}
      actions={{ performAddressEdit }}
      title={selectedAddressTitle(isLoggedIn, customerAddressList)}
      billingSameCheckbox={
        <div className="flex items-center h-10 px-3 pb-4 mt-3 -mx-4 -mb-4 bg-gray-200">
          <BillingSameAsShippingCheckbox />
        </div>
      }
    />
  );
}

export default ShippingAddressSelected;
