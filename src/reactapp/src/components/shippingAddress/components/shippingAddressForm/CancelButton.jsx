import React from 'react';
import { useFormikContext } from 'formik';

import Button from '../../../Common/Button';
import useShippingAddressAppContext from '../../hooks/useShippingAddressAppContext';
import { formHasShippingAddress } from '../../utility';
import useShippingAddressWrapper from '../../hooks/useShippingAddressWrapper';

function CancelButton() {
  const { values } = useFormikContext();
  const { isLoggedIn } = useShippingAddressAppContext();
  const { setToViewMode } = useShippingAddressWrapper();

  if (!isLoggedIn || !formHasShippingAddress(values)) {
    return <></>;
  }

  return (
    <Button click={setToViewMode} variant="warning">
      cancel
    </Button>
  );
}

export default CancelButton;
