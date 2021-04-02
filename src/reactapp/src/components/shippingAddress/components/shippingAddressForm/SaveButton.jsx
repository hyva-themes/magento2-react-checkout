import React from 'react';
import { useFormikContext } from 'formik';
import Button from '../../../Common/Button';
import useShippingAddressFormikContext from '../../hooks/useShippingAddressFormikContext';
import useSaveAddressAction from '../../hooks/useSaveAddressAction';

function SaveButton() {
  const { values } = useFormikContext();
  const { isFormValid } = useShippingAddressFormikContext();
  const saveAddress = useSaveAddressAction();

  return (
    <Button
      click={() => saveAddress(values)}
      variant="success"
      disable={!isFormValid}
    >
      save
    </Button>
  );
}

export default SaveButton;
