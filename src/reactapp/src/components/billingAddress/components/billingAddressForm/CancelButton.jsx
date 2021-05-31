import React, { useCallback } from 'react';
import { useFormikContext } from 'formik';

import Button from '../../../common/Button';
import useBillingAddressWrapper from '../../hooks/useBillingAddressWrapper';
import useBillingAddressCartContext from '../../hooks/useBillingAddressCartContext';
import useBillingAddressFormikContext from '../../hooks/useBillingAddressFormikContext';
import { formHasBillingAddress } from '../../utility';
import { isCartHoldingAddressInfo } from '../../../../utils/address';
import LocalStorage from '../../../../utils/localStorage';
import { __ } from '../../../../i18n';

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
    setBillingAddressFormFields({
      ...backupAddress,
      isSameAsShipping: LocalStorage.getBillingSameAsShippingInfo(),
    });
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
      {__('Cancel')}
    </Button>
  );
}

export default CancelButton;
