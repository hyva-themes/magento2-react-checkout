import React from 'react';

import ShippingAddressCardList from './ShippingAddressCardList';
import { CreateNewAddressLink, ORBox } from '../../address';
import useShippingAddressCartContext from '../hooks/useShippingAddressCartContext';
import useShippingAddressFormikContext from '../hooks/useShippingAddressFormikContext';

function ShippingAddressView() {
  const {
    editMode,
    setFormToEditMode,
    setBackupAddress,
    setCustomerAddressSelected,
    resetShippingAddressFormFields,
  } = useShippingAddressFormikContext();
  const { cartShippingAddress } = useShippingAddressCartContext();

  const newAddressClickHandler = () => {
    setBackupAddress({ ...cartShippingAddress });
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
