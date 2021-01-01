import React from 'react';
import ShippingAddressFormContext from '../../../context/Form/ShippingAddress/ShippingAddressFormContext';
import useShippingAddressContext from '../../../hook/useShippingAddressContext';
import Button from '../../Common/Button';

import AddressFields from './AddressFields';

function ShippingAddress() {
  const { isFormValid, submitHandler } = useShippingAddressContext();
  return (
    <AddressFields context={ShippingAddressFormContext}>
      <div className="flex items-center justify-center mt-2">
        <Button click={submitHandler} variant="success" disable={!isFormValid}>
          save
        </Button>
      </div>
    </AddressFields>
  );
}

export default ShippingAddress;
