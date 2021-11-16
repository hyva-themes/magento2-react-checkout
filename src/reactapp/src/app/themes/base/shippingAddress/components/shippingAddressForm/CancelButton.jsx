import React from 'react';

import Button from '../../../../../code/common/Button';
import {
  isCartAddressValid,
  isValidCustomerAddressId,
} from '../../../../../../utils/address';
import {
  useShippingAddressCartContext,
  useShippingAddressFormikContext,
} from '../../../../../code/shippingAddress/hooks';
import { __ } from '../../../../../../i18n';
import { _toString } from '../../../../../../utils';
import LocalStorage from '../../../../../../utils/localStorage';

function CancelButton() {
  const {
    backupAddress,
    setFormToViewMode,
    setSelectedAddress,
    setCustomerAddressSelected,
    setShippingAddressFormFields,
  } = useShippingAddressFormikContext();
  const { cartShippingAddress } = useShippingAddressCartContext();

  const clickHandler = () => {
    setShippingAddressFormFields({ ...backupAddress });
    setFormToViewMode();
    setCustomerAddressSelected(
      isValidCustomerAddressId(LocalStorage.getCustomerShippingAddressId())
    );

    if (backupAddress.id) {
      setSelectedAddress(_toString(backupAddress.id));
    }
  };

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
