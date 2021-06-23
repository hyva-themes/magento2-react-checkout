import React, { useCallback } from 'react';

import Button from '../../../common/Button';
import useShippingAddressFormikContext from '../../hooks/useShippingAddressFormikContext';
import useShippingAddressCartContext from '../../hooks/useShippingAddressCartContext';
import LocalStorage from '../../../../utils/localStorage';
import { __ } from '../../../../i18n';
import { isCartAddressValid } from '../../../../utils/address';

function CancelButton() {
  const { cartShippingAddress } = useShippingAddressCartContext();
  const {
    setFormToViewMode,
    backupAddress,
    setCustomerAddressSelected,
    setShippingAddressFormFields,
  } = useShippingAddressFormikContext();

  const clickHandler = useCallback(() => {
    setShippingAddressFormFields({ ...backupAddress });
    setFormToViewMode();
    setCustomerAddressSelected(!!LocalStorage.getCustomerShippingAddressId());
  }, [
    backupAddress,
    setFormToViewMode,
    setShippingAddressFormFields,
    setCustomerAddressSelected,
  ]);

  if (!isCartAddressValid(cartShippingAddress)) {
    return <></>;
  }

  return (
    <Button click={clickHandler} variant="secondary">
      {__('Cancel')}
    </Button>
  );
}

export default CancelButton;
