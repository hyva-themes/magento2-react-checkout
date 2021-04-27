import React, { useCallback, useEffect, useState } from 'react';
import { useFormikContext } from 'formik';

import Button from '../../../Common/Button';
import { formHasShippingAddress } from '../../utility';
import useShippingAddressWrapper from '../../hooks/useShippingAddressWrapper';
import useShippingAddressCartContext from '../../hooks/useShippingAddressCartContext';
import { isCartHoldingAddressInfo } from '../../../../utils/address';
import useShippingAddressFormikContext from '../../hooks/useShippingAddressFormikContext';
import LocalStorage from '../../../../utils/localStorage';

function CancelButton() {
  const { values } = useFormikContext();
  const { cartInfo } = useShippingAddressCartContext();
  const { setShippingAddressFormFields } = useShippingAddressFormikContext();
  const {
    setToViewMode,
    backupAddress,
    setCustomerAddressSelected,
  } = useShippingAddressWrapper();

  const clickHandler = useCallback(() => {
    setShippingAddressFormFields({ ...backupAddress });
    setToViewMode();
    setCustomerAddressSelected(!!LocalStorage.getCustomerShippingAddressId());
  }, [
    backupAddress,
    setToViewMode,
    setShippingAddressFormFields,
    setCustomerAddressSelected,
  ]);

  if (!formHasShippingAddress(values) && !isCartHoldingAddressInfo(cartInfo)) {
    return <></>;
  }

  return (
    <Button click={clickHandler} variant="warning">
      cancel
    </Button>
  );
}

export default CancelButton;
