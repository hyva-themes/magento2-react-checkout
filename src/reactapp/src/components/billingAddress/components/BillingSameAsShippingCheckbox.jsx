import React from 'react';
import { bool } from 'prop-types';
import { useFormikContext } from 'formik';

import { ORBox } from '../../address';
import Checkbox from '../../common/Form/Checkbox';
import useBillingAddressCartContext from '../hooks/useBillingAddressCartContext';
import useSaveBillingSameAsShipping from '../hooks/useSaveBillingSameAsShipping';
import useBillingAddressFormikContext from '../hooks/useBillingAddressFormikContext';
import LocalStorage from '../../../utils/localStorage';
import { __ } from '../../../i18n';
import { isCartAddressValid } from '../../../utils/address';

function BillingSameAsShippingCheckbox({ addOR }) {
  const { setFieldValue } = useFormikContext();
  const { makeBillingSameAsShippingRequest } = useSaveBillingSameAsShipping();
  const {
    cartBillingAddress,
    cartShippingAddress,
  } = useBillingAddressCartContext();
  const {
    fields,
    isBillingAddressSameAsShipping,
    setFormToEditMode,
    setFormToViewMode,
    setBackupAddress,
  } = useBillingAddressFormikContext();

  const toggleBillingEqualsShippingState = async () => {
    const newSameAsShipping = !isBillingAddressSameAsShipping;
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
    <>
      <Checkbox
        name={fields.isSameAsShipping}
        label={__('My billing & shipping address are same')}
        isChecked={isBillingAddressSameAsShipping}
        onChange={toggleBillingEqualsShippingState}
      />
      {addOR && <ORBox />}
    </>
  );
}

BillingSameAsShippingCheckbox.propTypes = {
  addOR: bool,
};

BillingSameAsShippingCheckbox.defaultProps = {
  addOR: false,
};

export default BillingSameAsShippingCheckbox;
