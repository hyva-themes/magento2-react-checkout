import React, { useCallback } from 'react';

import Button from '../../../common/Button';
import { __ } from '../../../../i18n';
import { _toString } from '../../../../utils';
import LocalStorage from '../../../../utils/localStorage';
import { isCartAddressValid } from '../../../../utils/address';
import useShippingAddressCartContext from '../../hooks/useShippingAddressCartContext';
import useShippingAddressFormikContext from '../../hooks/useShippingAddressFormikContext';

function CancelButton() {
  const { cartShippingAddress } = useShippingAddressCartContext();
  const {
    backupAddress,
    setFormToViewMode,
    setSelectedAddress,
    setCustomerAddressSelected,
    setShippingAddressFormFields,
  } = useShippingAddressFormikContext();

  const clickHandler = useCallback(() => {
    setShippingAddressFormFields({ ...backupAddress });
    setFormToViewMode();
    setCustomerAddressSelected(!!LocalStorage.getCustomerShippingAddressId());

    if (backupAddress.id) {
      setSelectedAddress(_toString(backupAddress.id));
    }
  }, [
    backupAddress,
    setFormToViewMode,
    setSelectedAddress,
    setCustomerAddressSelected,
    setShippingAddressFormFields,
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
