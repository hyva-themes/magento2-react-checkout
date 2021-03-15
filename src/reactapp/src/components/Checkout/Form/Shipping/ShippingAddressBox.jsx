import React, { useCallback } from 'react';
import useShippingAddrAppContext from '../../../../hook/app/useShippingAddrAppContext';
import useShippingAddrCartContext from '../../../../hook/cart/useShippingAddrCartContext';
import useShippingAddressContext from '../../../../hook/form/useShippingAddressContext';
import { modifyAddrObjListToArrayList } from '../../../../utils/address';
import AddressBox from '../AddressBox';

function ShippingAddressBox() {
  const { isLoggedIn } = useShippingAddrAppContext();
  const {
    selectedAddressId,
    setCartSelectedShippingAddress,
  } = useShippingAddrCartContext();
  const {
    fields,
    addressList,
    setFormToEditMode,
    resetShippingAddressFormFields,
  } = useShippingAddressContext();

  const customerAddresses = modifyAddrObjListToArrayList(addressList);

  const newAddressClickHandler = useCallback(() => {
    resetShippingAddressFormFields();
    setFormToEditMode();
    setCartSelectedShippingAddress('');
  }, [
    setFormToEditMode,
    resetShippingAddressFormFields,
    setCartSelectedShippingAddress,
  ]);

  return (
    <AddressBox
      fields={fields}
      isLoggedIn={isLoggedIn}
      selectedAddressId={selectedAddressId}
      addressList={customerAddresses}
      actions={{
        newAddressClick: newAddressClickHandler,
        editAddresClick: setFormToEditMode,
      }}
    />
  );
}

export default ShippingAddressBox;
