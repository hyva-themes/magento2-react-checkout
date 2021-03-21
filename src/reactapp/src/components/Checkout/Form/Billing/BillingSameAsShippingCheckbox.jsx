import React, { useCallback } from 'react';

import Checkbox from '../../../Common/Form/Checkbox';
import useBillingAddressContext from '../../../../hook/form/useBillingAddressContext';

function BillingSameAsShippingCheckbox() {
  const {
    fields,
    isBillingAddressSameAsShipping,
    toggleBillingEqualsShippingState,
    setFormToEditMode,
  } = useBillingAddressContext();

  const changeHandler = useCallback(() => {
    toggleBillingEqualsShippingState();
    setFormToEditMode();
  }, [setFormToEditMode, toggleBillingEqualsShippingState])

  return (
    <Checkbox
      name={fields.isSameAsShipping}
      label="My billing & shipping address are same"
      isChecked={isBillingAddressSameAsShipping}
      onChange={changeHandler}
    />
  )
}

export default BillingSameAsShippingCheckbox;
