import React from 'react';

import Button from '../../../common/Button';
import { __ } from '../../../../i18n';
import { _toString } from '../../../../utils';
import LocalStorage from '../../../../utils/localStorage';
import { isCartAddressValid } from '../../../../utils/address';
import useBillingAddressCartContext from '../../hooks/useBillingAddressCartContext';
import useBillingAddressFormikContext from '../../hooks/useBillingAddressFormikContext';

function CancelButton() {
  const { cartBillingAddress } = useBillingAddressCartContext();
  const {
    backupAddress,
    setFormToViewMode,
    setSelectedAddress,
    setCustomerAddressSelected,
    setBillingAddressFormFields,
  } = useBillingAddressFormikContext();

  const clickHandler = () => {
    setBillingAddressFormFields({
      ...backupAddress,
      isSameAsShipping: LocalStorage.getBillingSameAsShippingInfo(),
    });
    setFormToViewMode();
    setCustomerAddressSelected(!!LocalStorage.getCustomerBillingAddressId());

    if (backupAddress.id) {
      setSelectedAddress(_toString(backupAddress.id));
    }
  };

  if (!isCartAddressValid(cartBillingAddress)) {
    return null;
  }

  return (
    <Button click={clickHandler} variant="secondary">
      {__('Cancel')}
    </Button>
  );
}

export default CancelButton;
