import React from 'react';

import BillingAddressCardList from './BillingAddressCardList';
import BillingSameAsShippingCheckbox from './BillingSameAsShippingCheckbox';
import useBillingAddressWrapper from '../hooks/useBillingAddressWrapper';
import useBillingAddressFormikContext from '../hooks/useBillingAddressFormikContext';
import useBillingAddressCartContext from '../hooks/useBillingAddressCartContext';
import { isCartAddressValid } from '../../../utils/address';
import { CreateNewAddressLink, ORBox } from '../../address';

function BillingAddressView() {
  const {
    editMode,
    setToEditMode,
    setBackupAddress,
    setCustomerAddressSelected,
  } = useBillingAddressWrapper();
  const { resetBillingAddressFormFields } = useBillingAddressFormikContext();
  const {
    cartBillingAddress,
    cartShippingAddress,
  } = useBillingAddressCartContext();

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
      <BillingSameAsShippingCheckbox />
      {isCartAddressValid(cartShippingAddress) && <ORBox />}
      <BillingAddressCardList />
    </div>
  );
}

export default BillingAddressView;
