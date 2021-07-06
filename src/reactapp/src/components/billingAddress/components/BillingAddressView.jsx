import React from 'react';

import BillingAddressCardList from './BillingAddressCardList';
import BillingSameAsShippingCheckbox from './BillingSameAsShippingCheckbox';
import { CreateNewAddressLink } from '../../address';
import useBillingAddressCartContext from '../hooks/useBillingAddressCartContext';
import useBillingAddressFormikContext from '../hooks/useBillingAddressFormikContext';

function BillingAddressView() {
  const {
    editMode,
    setFormToEditMode,
    setBackupAddress,
    setCustomerAddressSelected,
    resetBillingAddressFormFields,
  } = useBillingAddressFormikContext();
  const { cartBillingAddress } = useBillingAddressCartContext();

  const newAddressClickHandler = () => {
    setBackupAddress({ ...cartBillingAddress });
    resetBillingAddressFormFields();
    setCustomerAddressSelected(false);
    setFormToEditMode();
  };

  if (editMode) {
    return <></>;
  }

  return (
    <div className="py-2">
      <CreateNewAddressLink addOR actions={{ click: newAddressClickHandler }} />
      <BillingSameAsShippingCheckbox addOR />
      <BillingAddressCardList />
    </div>
  );
}

export default BillingAddressView;
