import React from 'react';
import { useFormikContext } from 'formik';

import Checkbox from '../../common/Form/Checkbox';
import useBillingAddressFormikContext from '../hooks/useBillingAddressFormikContext';
import useBillingAddressCartContext from '../hooks/useBillingAddressCartContext';
import useBillingAddressWrapper from '../hooks/useBillingAddressWrapper';
import useBillingAddressAppContext from '../hooks/useBillingAddressAppContext';
import LocalStorage from '../../../utils/localStorage';
import { __ } from '../../../i18n';

function BillingSameAsShippingCheckbox() {
  const { setFieldValue } = useFormikContext();
  const { isLoggedIn } = useBillingAddressAppContext();
  const { cartBillingAddress } = useBillingAddressCartContext();
  const {
    setToEditMode,
    setToViewMode,
    setBackupAddress,
  } = useBillingAddressWrapper();
  const {
    fields,
    isBillingAddressSameAsShipping,
  } = useBillingAddressFormikContext();

  const toggleBillingEqualsShippingState = () => {
    setBackupAddress({ ...cartBillingAddress });
    setFieldValue(fields.isSameAsShipping, !isBillingAddressSameAsShipping);
    LocalStorage.saveBillingSameAsShipping(!isBillingAddressSameAsShipping);

    if (!isLoggedIn) {
      return;
    }

    if (!isBillingAddressSameAsShipping === true) {
      setToEditMode();
    } else {
      setToViewMode();
    }
  };

  return (
    <Checkbox
      name={fields.isSameAsShipping}
      label={__('My billing & shipping address are same')}
      isChecked={isBillingAddressSameAsShipping}
      onChange={toggleBillingEqualsShippingState}
    />
  );
}

export default BillingSameAsShippingCheckbox;
