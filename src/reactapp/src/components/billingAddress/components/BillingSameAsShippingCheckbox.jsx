import React from 'react';
import { useFormikContext } from 'formik';

import Checkbox from '../../Common/Form/Checkbox';
import useBillingAddressFormikContext from '../hooks/useBillingAddressFormikContext';
import LocalStorage from '../../../utils/localStorage';

function BillingSameAsShippingCheckbox() {
  const { setFieldValue } = useFormikContext();
  const {
    fields,
    isBillingAddressSameAsShipping,
  } = useBillingAddressFormikContext();

  const toggleBillingEqualsShippingState = () => {
    setFieldValue(fields.isSameAsShipping, !isBillingAddressSameAsShipping);
    LocalStorage.saveBillingSameAsShipping(!isBillingAddressSameAsShipping);
  };

  return (
    <Checkbox
      name={fields.isSameAsShipping}
      label="My billing & shipping address are same"
      isChecked={isBillingAddressSameAsShipping}
      onChange={toggleBillingEqualsShippingState}
    />
  );
}

export default BillingSameAsShippingCheckbox;
