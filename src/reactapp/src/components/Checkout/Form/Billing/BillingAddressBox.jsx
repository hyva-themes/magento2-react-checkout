import React, { useCallback } from 'react';

import AddressBox from '../AddressBox';
import { modifyAddrObjListToArrayList } from '../../../../utils/address';
import useBillingAddrAppContext from '../../../../hook/app/useBillingAddrAppContext';
import useBillingAddressContext from '../../../../hook/form/useBillingAddressContext';

function BillingAddressBox() {
  const {
    fields,
    addressList,
    selectedAddressId,
    setFormToEditMode,
    resetBillingAddressFormFields,
    mapCartBillingAddressToBillingForm,
  } = useBillingAddressContext();
  const { isLoggedIn } = useBillingAddrAppContext();

  const newAddressClickHandler = useCallback(() => {
    resetBillingAddressFormFields();
    setFormToEditMode();
  }, [setFormToEditMode, resetBillingAddressFormFields]);

  const editAddressClickHandler = useCallback(() => {
    mapCartBillingAddressToBillingForm();
    setFormToEditMode();
  }, [mapCartBillingAddressToBillingForm, setFormToEditMode]);

  return (
    <AddressBox
      fields={fields}
      isLoggedIn={isLoggedIn}
      selectedAddressId={selectedAddressId}
      addressList={modifyAddrObjListToArrayList(addressList)}
      actions={{
        newAddressClick: newAddressClickHandler,
        editAddresClick: editAddressClickHandler,
      }}
    />
  );
}

export default BillingAddressBox;
