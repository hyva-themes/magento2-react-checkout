import React from 'react';
import { useFormikContext } from 'formik';

import Checkbox from '../../common/Form/Checkbox';
import useBillingAddressWrapper from '../hooks/useBillingAddressWrapper';
import useBillingAddressAppContext from '../hooks/useBillingAddressAppContext';
import useBillingAddressCartContext from '../hooks/useBillingAddressCartContext';
import useBillingAddressFormikContext from '../hooks/useBillingAddressFormikContext';
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
    makeBillingSameAsShippingRequest,
  } = useBillingAddressWrapper();
  const {
    fields,
    isBillingAddressSameAsShipping,
  } = useBillingAddressFormikContext();

  const toggleBillingEqualsShippingState = async () => {
    const newSameAsShipping = !isBillingAddressSameAsShipping;
    setBackupAddress({ ...cartBillingAddress });
    setFieldValue(fields.isSameAsShipping, newSameAsShipping);
    LocalStorage.saveBillingSameAsShipping(newSameAsShipping);

    if (!isLoggedIn) {
      return;
    }

    if (newSameAsShipping) {
      await makeBillingSameAsShippingRequest();
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
