import React from 'react';
import { useFormikContext } from 'formik';

import Checkbox from '../../common/Form/Checkbox';
import useBillingAddressWrapper from '../hooks/useBillingAddressWrapper';
import useBillingAddressCartContext from '../hooks/useBillingAddressCartContext';
import useBillingAddressFormikContext from '../hooks/useBillingAddressFormikContext';
import LocalStorage from '../../../utils/localStorage';
import { __ } from '../../../i18n';
import { isCartAddressValid } from '../../../utils/address';

function BillingSameAsShippingCheckbox() {
  const { setFieldValue } = useFormikContext();
  const {
    cartBillingAddress,
    cartShippingAddress,
  } = useBillingAddressCartContext();
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

    if (newSameAsShipping) {
      await makeBillingSameAsShippingRequest();
      setToEditMode();
    } else {
      setToViewMode();
    }
  };

  if (!isCartAddressValid(cartShippingAddress)) {
    return <></>;
  }

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
