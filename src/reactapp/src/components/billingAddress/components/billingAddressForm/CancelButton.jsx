import React from 'react';

import Button from '../../../common/Button';
import useBillingAddressCartContext from '../../hooks/useBillingAddressCartContext';
import useBillingAddressFormikContext from '../../hooks/useBillingAddressFormikContext';
import { isCartAddressValid } from '../../../../utils/address';
import LocalStorage from '../../../../utils/localStorage';
import { __ } from '../../../../i18n';

function CancelButton() {
  const { cartBillingAddress } = useBillingAddressCartContext();
  const {
    setFormToViewMode,
    backupAddress,
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
  };

  if (!isCartAddressValid(cartBillingAddress)) {
    return <></>;
  }

  return (
    <Button click={clickHandler} variant="warning">
      {__('Cancel')}
    </Button>
  );
}

export default CancelButton;
