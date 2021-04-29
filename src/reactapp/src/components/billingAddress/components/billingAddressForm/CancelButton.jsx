import React, { useCallback } from 'react';
import { useFormikContext } from 'formik';

import Button from '../../../Common/Button';
import { formHasBillingAddress } from '../../utility';
import useBillingAddressWrapper from '../../hooks/useBillingAddressWrapper';
import useBillingAddressCartContext from '../../hooks/useBillingAddressCartContext';
import { isCartHoldingAddressInfo } from '../../../../utils/address';
import useBillingAddressFormikContext from '../../hooks/useBillingAddressFormikContext';
import LocalStorage from '../../../../utils/localStorage';

function CancelButton() {
  const { values } = useFormikContext();
  const { cartInfo } = useBillingAddressCartContext();
  const { setBillingAddressFormFields } = useBillingAddressFormikContext();
  const {
    setToViewMode,
    backupAddress,
    setCustomerAddressSelected,
  } = useBillingAddressWrapper();

  const clickHandler = useCallback(() => {
    setBillingAddressFormFields({ ...backupAddress });
    setToViewMode();
    setCustomerAddressSelected(!!LocalStorage.getCustomerBillingAddressId());
  }, [
    backupAddress,
    setToViewMode,
    setBillingAddressFormFields,
    setCustomerAddressSelected,
  ]);

  if (!formHasBillingAddress(values) && !isCartHoldingAddressInfo(cartInfo)) {
    return <></>;
  }

  return (
    <Button click={clickHandler} variant="warning">
      cancel
    </Button>
  );
}

export default CancelButton;
