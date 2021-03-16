import React, { useCallback } from 'react';
import { useFormikContext } from 'formik';

import Button from '../../Common/Button';
import Card from '../../Common/Card';
import ToggleBox from '../../Common/ToggleBox';
import AddressFields from './AddressFields';
import ShippingAddressBox from './Shipping/ShippingAddressBox';
import useShippingAddressContext from '../../../hook/form/useShippingAddressContext';
import ShippingAddressFormContext from '../../../context/Form/ShippingAddress/ShippingAddressFormContext';
import useShippingAddrAppContext from '../../../hook/app/useShippingAddrAppContext';
import useShippingAddrCartContext from '../../../hook/cart/useShippingAddrCartContext';
import { _isObjEmpty } from '../../../utils';
import LocalStorage from '../../../utils/localStorage';

function ShippingAddress() {
  const { values } = useFormikContext();
  const { isLoggedIn, customerAddressList } = useShippingAddrAppContext();
  const {
    shippingAddressList,
    setCartSelectedShippingAddress,
  } = useShippingAddrCartContext();
  const {
    isFormValid,
    submitHandler,
    editMode,
    setFormEditMode,
  } = useShippingAddressContext();
  const cartHasShippingAddress = !_isObjEmpty(shippingAddressList);
  const customerHasAddress =
    !_isObjEmpty(customerAddressList) || cartHasShippingAddress;

  const cancelAddressEditHandler = useCallback(() => {
    const shippingAddrId = LocalStorage.getCustomerShippingAddressId();

    if (shippingAddrId) {
      setCartSelectedShippingAddress(shippingAddrId);
    }
    setFormEditMode(false);
  }, [setFormEditMode, setCartSelectedShippingAddress]);

  if (isLoggedIn && !customerHasAddress) {
    return (
      <Card bg="dark" classes="opacity-75">
        <ToggleBox title="Shipping information" show>
          <div className="py-2">Shipping address is not available</div>
        </ToggleBox>
      </Card>
    );
  }

  if (editMode) {
    const saveButton = (
      <Button
        click={() => submitHandler(values)}
        variant="success"
        disable={!isFormValid}
      >
        save
      </Button>
    );

    return (
      <AddressFields
        title="Shipping information"
        context={ShippingAddressFormContext}
      >
        {isLoggedIn || (!isLoggedIn && cartHasShippingAddress) ? (
          <div className="flex items-center justify-around mt-2">
            <Button click={cancelAddressEditHandler} variant="warning">
              cancel
            </Button>
            {saveButton}
          </div>
        ) : (
          <div className="flex items-center justify-center mt-2">
            {saveButton}
          </div>
        )}
      </AddressFields>
    );
  }

  return (
    <Card bg="dark">
      <ToggleBox title="Shipping information" show>
        <div className="py-2">
          <ShippingAddressBox />
        </div>
      </ToggleBox>
    </Card>
  );
}

export default ShippingAddress;
