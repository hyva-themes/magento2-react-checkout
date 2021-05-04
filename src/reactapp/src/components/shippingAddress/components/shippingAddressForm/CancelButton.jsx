import React, { useCallback } from 'react';
import { useFormikContext } from 'formik';

import Button from '../../../common/Button';
import useShippingAddressWrapper from '../../hooks/useShippingAddressWrapper';
import useShippingAddressCartContext from '../../hooks/useShippingAddressCartContext';
import useShippingAddressFormikContext from '../../hooks/useShippingAddressFormikContext';
import { formHasShippingAddress } from '../../utility';
import { isCartHoldingAddressInfo } from '../../../../utils/address';
import LocalStorage from '../../../../utils/localStorage';
import { __ } from '../../../../i18n';

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
      {__('cancel')}
    </Button>
  );
}

export default CancelButton;
