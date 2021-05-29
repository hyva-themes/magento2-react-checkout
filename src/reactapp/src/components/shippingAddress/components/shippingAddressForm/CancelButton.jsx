import React, { useCallback } from 'react';

import Button from '../../../common/Button';
import useShippingAddressWrapper from '../../hooks/useShippingAddressWrapper';
import useShippingAddressFormikContext from '../../hooks/useShippingAddressFormikContext';
import useShippingAddressAppContext from '../../hooks/useShippingAddressAppContext';
import LocalStorage from '../../../../utils/localStorage';
import { __ } from '../../../../i18n';

function CancelButton() {
  const { setShippingAddressFormFields } = useShippingAddressFormikContext();
  const { isLoggedIn } = useShippingAddressAppContext();
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

  if (!isLoggedIn) {
    return <></>;
  }

  return (
    <Button click={clickHandler} variant="warning">
      {__('Cancel')}
    </Button>
  );
}

export default CancelButton;
