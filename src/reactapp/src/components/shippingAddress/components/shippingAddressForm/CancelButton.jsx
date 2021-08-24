import React from 'react';

import Button from '../../../common/Button';
import {
  isCartAddressValid,
  isValidCustomerAddressId,
} from '../../../../utils/address';
import { __mt } from '../../../../i18n';
import { _toString } from '../../../../utils';
import LocalStorage from '../../../../utils/localStorage';
import useShippingAddressCartContext from '../../hooks/useShippingAddressCartContext';
import useShippingAddressFormikContext from '../../hooks/useShippingAddressFormikContext';

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
      {__mt('Cancel')}
    </Button>
  );
}

export default CancelButton;
