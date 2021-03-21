import React, { useCallback } from 'react';

import AddressBox from '../AddressBox';
import { modifyAddrObjListToArrayList } from '../../../../utils/address';
import useBillingAddrAppContext from '../../../../hook/app/useBillingAddrAppContext';
import useBillingAddrCartContext from '../../../../hook/cart/useBillingAddrCartContext';
import useBillingAddressContext from '../../../../hook/form/useBillingAddressContext';

function BillingAddressBox() {
  const {
    fields,
    selectedAddressId,
    setFormToEditMode,
    resetBillingAddressFormFields,
  } = useBillingAddressContext();
  const { cartBillingAddress } = useBillingAddrCartContext();
  const { isLoggedIn } = useBillingAddrAppContext();
  const addressList = modifyAddrObjListToArrayList({ cartBillingAddress });

  const newAddressClickHandler = useCallback(() => {
    resetBillingAddressFormFields();
    setFormToEditMode();
  }, [setFormToEditMode, resetBillingAddressFormFields]);

  return (
    <AddressBox
      fields={fields}
      isLoggedIn={isLoggedIn}
      selectedAddressId={selectedAddressId}
      addressList={addressList}
      actions={{
        newAddressClick: newAddressClickHandler,
        editAddresClick: setFormToEditMode,
      }}
    />
  );
}

export default BillingAddressBox;
