import React, { useCallback } from 'react';
import { useFormikContext } from 'formik';

import AddressBox from '../AddressBox';
import { SHIPPING_ADDR_FORM } from '../../../../config';
import { modifyAddrObjListToArrayList } from '../../../../utils/address';
import useShippingAddrAppContext from '../../../../hook/app/useShippingAddrAppContext';
import useShippingAddrCartContext from '../../../../hook/cart/useShippingAddrCartContext';
import useShippingAddressContext from '../../../../hook/form/useShippingAddressContext';

function ShippingAddressBox() {
  const { values, setFieldValue } = useFormikContext();
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
    performCustomerAddressSwitching,
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

  // when the address box radio button is clicked, this will be fired
  // use to update the cart address with the customer address
  const customerAddressSwitchingHandler = useCallback(
    event => {
      const addressId = event.target.value;
      setFieldValue(`${SHIPPING_ADDR_FORM}.selectedAddress`, addressId);
      performCustomerAddressSwitching(addressId, values);
    },
    [values, setFieldValue, performCustomerAddressSwitching]
  );

  return (
    <AddressBox
      fields={fields}
      isLoggedIn={isLoggedIn}
      selectedAddressId={selectedAddressId}
      addressList={customerAddresses}
      actions={{
        newAddressClick: newAddressClickHandler,
        editAddresClick: setFormToEditMode,
        addressSwitching: customerAddressSwitchingHandler,
      }}
    />
  );
}

export default ShippingAddressBox;
