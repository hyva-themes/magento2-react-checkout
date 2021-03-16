import React from 'react';

import AddressBox from '../AddressBox';
import { _emptyFunc } from '../../../../utils';
import { modifyAddrObjListToArrayList } from '../../../../utils/address';
import useBillingAddrAppContext from '../../../../hook/app/useBillingAddrAppContext';
import useBillingAddrCartContext from '../../../../hook/cart/useBillingAddrCartContext';
import useBillingAddressContext from '../../../../hook/form/useBillingAddressContext';

function BillingAddressBox() {
  const {
    fields,
    selectedAddressId,
    setFormToEditMode,
  } = useBillingAddressContext();
  const { cartBillingAddress } = useBillingAddrCartContext();
  const { isLoggedIn } = useBillingAddrAppContext();
  const addressList = modifyAddrObjListToArrayList({ cartBillingAddress });
  const newAddressClickHandler = _emptyFunc();

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
