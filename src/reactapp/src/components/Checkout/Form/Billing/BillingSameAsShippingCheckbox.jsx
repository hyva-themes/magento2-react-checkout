import React from 'react';

import Checkbox from '../../../Common/Form/Checkbox';
import useBillingAddressContext from '../../../../hook/form/useBillingAddressContext';

function BillingSameAsShippingCheckbox() {
  const {
    fields,
    isBillingAddressSameAsShipping,
    toggleBillingEqualsShippingState,
  } = useBillingAddressContext();

  return (
    <Checkbox
      name={fields.isSameAsShipping}
      label="My billing & shipping address are same"
      isChecked={isBillingAddressSameAsShipping}
      onChange={toggleBillingEqualsShippingState}
    />
  )
}

export default BillingSameAsShippingCheckbox;
