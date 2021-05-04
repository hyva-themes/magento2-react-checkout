import React from 'react';
import { useFormikContext } from 'formik';

import Checkbox from '../../common/Form/Checkbox';
import useBillingAddressFormikContext from '../hooks/useBillingAddressFormikContext';
import useBillingAddressCartContext from '../hooks/useBillingAddressCartContext';
import useBillingAddressWrapper from '../hooks/useBillingAddressWrapper';
import LocalStorage from '../../../utils/localStorage';

function BillingSameAsShippingCheckbox() {
  const { setFieldValue } = useFormikContext();
  const { setBackupAddress } = useBillingAddressWrapper();
  const { cartBillingAddress } = useBillingAddressCartContext();
  const {
    fields,
    isBillingAddressSameAsShipping,
  } = useBillingAddressFormikContext();

  const toggleBillingEqualsShippingState = () => {
    setBackupAddress({ ...cartBillingAddress });
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
