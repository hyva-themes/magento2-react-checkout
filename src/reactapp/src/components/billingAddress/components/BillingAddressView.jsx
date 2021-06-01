import React from 'react';

import BillingAddressCardList from './BillingAddressCardList';
import BillingSameAsShippingCheckbox from './BillingSameAsShippingCheckbox';
import useBillingAddressWrapper from '../hooks/useBillingAddressWrapper';
import useBillingAddressFormikContext from '../hooks/useBillingAddressFormikContext';
import useBillingAddressCartContext from '../hooks/useBillingAddressCartContext';
import { CreateNewAddressLink } from '../../address';

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
      <CreateNewAddressLink addOR actions={{ click: newAddressClickHandler }} />
      <BillingSameAsShippingCheckbox addOR />
      <BillingAddressCardList />
    </div>
  );
}

export default BillingAddressView;
