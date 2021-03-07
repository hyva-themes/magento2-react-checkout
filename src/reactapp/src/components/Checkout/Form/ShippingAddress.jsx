import React, { useCallback } from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import Button from '../../Common/Button';
import Card from '../../Common/Card';
import ToggleBox from '../../Common/ToggleBox';
import AddressFields from './AddressFields';
import AddressBox from './AddressBox';
import useShippingAddressContext from '../../../hook/form/useShippingAddressContext';
import ShippingAddressFormContext from '../../../context/Form/ShippingAddress/ShippingAddressFormContext';
import useShippingAddrAppContext from '../../../hook/cart/useShippingAddrAppContext';
import useShippingAddrCartContext from '../../../hook/cart/useShippingAddrCartContext';
import { _isObjEmpty } from '../../../utils';
import LocalStorage from '../../../utils/localStorage';

function ShippingAddress() {
  const { values } = useFormikContext();
  const shippingAddress = _get(values, 'shipping_address', {});
  const { isLoggedIn, customerAddressList } = useShippingAddrAppContext();
  const {
    shippingAddressList,
    setCartSelectedShippingAddress,
  } = useShippingAddrCartContext();
  const {
    isFormValid,
    submitHandler,
    editMode,
    setFormToEditMode,
    setFormEditMode,
    saveAddressHandler,
  } = useShippingAddressContext();

  const cancelAddressEditHandler = useCallback(() => {
    const shippingAddrId = LocalStorage.getCustomerShippingAddressId();
    console.log({ shippingAddrId });

    if (shippingAddrId) {
      setCartSelectedShippingAddress(shippingAddrId);
    }
    setFormEditMode(false);
  }, [setFormEditMode, setCartSelectedShippingAddress]);

  if (_isObjEmpty(customerAddressList) && _isObjEmpty(shippingAddressList)) {
    return (
      <Card bg="dark" classes="opacity-75">
        <ToggleBox title="Shipping information" show>
          <div className="py-2">Shipping address is not available</div>
        </ToggleBox>
      </Card>
    );
  }

  if (editMode) {
    return (
      <AddressFields
        title="Shipping information"
        context={ShippingAddressFormContext}
      >
        {isLoggedIn ? (
          <div className="flex items-center justify-around mt-2">
            <Button click={cancelAddressEditHandler} variant="warning">
              cancel
            </Button>
            <Button
              click={() => saveAddressHandler(values)}
              variant="success"
              disable={!isFormValid}
            >
              save
            </Button>
          </div>
        ) : (
          <div className="flex items-center justify-center mt-2">
            <Button
              click={() => submitHandler(values)}
              variant="success"
              disable={!isFormValid}
            >
              save
            </Button>
          </div>
        )}
      </AddressFields>
    );
  }

  return (
    <Card bg="dark">
      <ToggleBox title="Shipping information" show>
        <div className="py-2">
          <AddressBox address={shippingAddress} />
        </div>

        {!isLoggedIn && (
          <div className="flex items-center justify-center mt-2">
            <Button click={setFormToEditMode} variant="warning">
              edit
            </Button>
          </div>
        )}
      </ToggleBox>
    </Card>
  );
}

export default ShippingAddress;
