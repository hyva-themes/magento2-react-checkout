import React from 'react';

import ShippingAddressCardList from './ShippingAddressCardList';
import { CreateNewAddressLink, ORBox } from '../../address';
import { CART_SHIPPING_ADDRESS } from '../utility';
import useShippingAddressCartContext from '../hooks/useShippingAddressCartContext';
import useShippingAddressFormikContext from '../hooks/useShippingAddressFormikContext';

function ShippingAddressView() {
  const {
    editMode,
    selectedAddress,
    setBackupAddress,
    setFormToEditMode,
    setSelectedAddress,
    setBackupSelectedAddress,
    setCustomerAddressSelected,
    resetShippingAddressFormFields,
  } = useShippingAddressFormikContext();
  const { cartShippingAddress } = useShippingAddressCartContext();

  const newAddressClickHandler = () => {
    setBackupSelectedAddress(selectedAddress);
    setBackupAddress({ ...cartShippingAddress });
    setSelectedAddress(CART_SHIPPING_ADDRESS);
    resetShippingAddressFormFields();
    setCustomerAddressSelected(false);
    setFormToEditMode();
  };

  if (editMode) {
    return <></>;
  }

  return (
    <div className="py-2">
      <CreateNewAddressLink actions={{ click: newAddressClickHandler }} />
      <ORBox />
      <ShippingAddressCardList />
    </div>
  );
}

export default ShippingAddressView;
