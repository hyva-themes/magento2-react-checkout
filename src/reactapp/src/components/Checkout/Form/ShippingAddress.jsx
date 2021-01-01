import React from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import Button from '../../Common/Button';
import Card from '../../Common/Card';
import ToggleBox from '../../Common/ToggleBox';
import AddressFields from './AddressFields';
import AddressBox from './AddressBox';

import useShippingAddressContext from '../../../hook/useShippingAddressContext';
import ShippingAddressFormContext from '../../../context/Form/ShippingAddress/ShippingAddressFormContext';

function ShippingAddress() {
  const { values } = useFormikContext();
  const shippingAddress = _get(values, 'shipping_address', {});

  const {
    isFormValid,
    submitHandler,
    editMode,
    setFormToEditMode,
  } = useShippingAddressContext();

  if (editMode) {
    return (
      <AddressFields context={ShippingAddressFormContext}>
        <div className="flex items-center justify-center mt-2">
          <Button
            click={submitHandler}
            variant="success"
            disable={!isFormValid}
          >
            save
          </Button>
        </div>
      </AddressFields>
    );
  }
  return (
    <Card bg="dark">
      <ToggleBox title="Shipping information" show>
        <div className="py-2">
          <AddressBox address={shippingAddress} />
        </div>

        <div className="flex items-center justify-center mt-2">
          <Button click={setFormToEditMode} variant="warning">
            edit
          </Button>
        </div>
      </ToggleBox>
    </Card>
  );
}

export default ShippingAddress;
