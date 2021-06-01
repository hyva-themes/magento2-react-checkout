import React, { useCallback } from 'react';

import Button from '../../../common/Button';
import useShippingAddressWrapper from '../../hooks/useShippingAddressWrapper';
import useShippingAddressFormikContext from '../../hooks/useShippingAddressFormikContext';
import useShippingAddressCartContext from '../../hooks/useShippingAddressCartContext';
import LocalStorage from '../../../../utils/localStorage';
import { __ } from '../../../../i18n';
import { isCartAddressValid } from '../../../../utils/address';

function CancelButton() {
  const { cartShippingAddress } = useShippingAddressCartContext();
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

  if (!isCartAddressValid(cartShippingAddress)) {
    return <></>;
  }

  return (
    <Button click={clickHandler} variant="warning">
      {__('Cancel')}
    </Button>
  );
}

export default CancelButton;
