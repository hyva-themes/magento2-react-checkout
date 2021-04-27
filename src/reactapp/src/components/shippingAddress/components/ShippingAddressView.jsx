import React from 'react';

import ShippingAddressCardList from './ShippingAddressCardList';
import { CreateNewAddressLink, ORBox } from '../../address';
import useShippingAddressWrapper from '../hooks/useShippingAddressWrapper';
import useShippingAddressFormikContext from '../hooks/useShippingAddressFormikContext';
import useShippingAddressCartContext from '../hooks/useShippingAddressCartContext';

function ShippingAddressView() {
  const {
    editMode,
    setToEditMode,
    setBackupAddress,
    setCustomerAddressSelected,
  } = useShippingAddressWrapper();
  const { resetShippingAddressFormFields } = useShippingAddressFormikContext();
  const { cartShippingAddress } = useShippingAddressCartContext();

  const newAddressClickHandler = () => {
    setBackupAddress({ ...cartShippingAddress });
    resetShippingAddressFormFields();
    setCustomerAddressSelected(false);
    setToEditMode();
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
