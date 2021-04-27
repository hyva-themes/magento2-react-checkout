import React from 'react';

import BillingAddressCardList from './BillingAddressCardList';
import { CreateNewAddressLink, ORBox } from '../../address';
import useBillingAddressWrapper from '../hooks/useBillingAddressWrapper';
import useBillingAddressFormikContext from '../hooks/useBillingAddressFormikContext';
import useBillingAddressCartContext from '../hooks/useBillingAddressCartContext';

function BillingAddressView() {
  const {
    editMode,
    setToEditMode,
    setBackupAddress,
    setCustomerAddressSelected,
  } = useBillingAddressWrapper();
  const { resetBillingAddressFormFields } = useBillingAddressFormikContext();
  const { cartBillingAddress } = useBillingAddressCartContext();

  const newAddressClickHandler = () => {
    setBackupAddress({ ...cartBillingAddress });
    resetBillingAddressFormFields();
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
      <BillingAddressCardList />
    </div>
  );
}

export default BillingAddressView;
