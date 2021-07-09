import React from 'react';

import Checkbox from '../../common/Form/Checkbox';
import {
  billingSameAsShippingField,
  isCartAddressValid,
} from '../../../utils/address';
import { __ } from '../../../i18n';
import LocalStorage from '../../../utils/localStorage';
import useBillingAddressCartContext from '../hooks/useBillingAddressCartContext';
import useSaveBillingSameAsShipping from '../hooks/useSaveBillingSameAsShipping';
import useBillingAddressFormikContext from '../hooks/useBillingAddressFormikContext';

function BillingSameAsShippingCheckbox() {
  const {
    cartBillingAddress,
    cartShippingAddress,
  } = useBillingAddressCartContext();
  const {
    fields,
    setFieldValue,
    setBackupAddress,
    setFormToEditMode,
    setFormToViewMode,
    isBillingAddressSameAsShipping: isBillingSame,
  } = useBillingAddressFormikContext();
  const { makeBillingSameAsShippingRequest } = useSaveBillingSameAsShipping();

  const toggleBillingEqualsShippingState = async () => {
    const newSameAsShipping = !isBillingSame;
    setBackupAddress({ ...cartBillingAddress });
    setFieldValue(fields.isSameAsShipping, newSameAsShipping);
    LocalStorage.saveBillingSameAsShipping(newSameAsShipping);

    if (newSameAsShipping) {
      await makeBillingSameAsShippingRequest();
      setFormToEditMode();
    } else if (isCartAddressValid(cartBillingAddress)) {
      setFormToViewMode();
    }
  };

  if (
    !isCartAddressValid(cartShippingAddress) &&
    isCartAddressValid(cartBillingAddress)
  ) {
    return <></>;
  }

  return (
    <div className="flex items-center h-10 px-3 pb-4 mt-3 -mx-4 -mb-4 bg-gray-200">
      <Checkbox
        isChecked={isBillingSame}
        name={billingSameAsShippingField}
        onChange={toggleBillingEqualsShippingState}
        label={__('Use this address as my billing address')}
      />
    </div>
  );
}

export default BillingSameAsShippingCheckbox;
