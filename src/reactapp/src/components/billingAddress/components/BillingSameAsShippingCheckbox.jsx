import React from 'react';
import { bool } from 'prop-types';

import { ORBox } from '../../address';
import Checkbox from '../../common/Form/Checkbox';
import { __ } from '../../../i18n';
import LocalStorage from '../../../utils/localStorage';
import { isCartAddressValid } from '../../../utils/address';
import useBillingAddressCartContext from '../hooks/useBillingAddressCartContext';
import useSaveBillingSameAsShipping from '../hooks/useSaveBillingSameAsShipping';
import useBillingAddressFormikContext from '../hooks/useBillingAddressFormikContext';

function BillingSameAsShippingCheckbox({ addOR }) {
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
    isBillingAddressSameAsShipping,
  } = useBillingAddressFormikContext();
  const { makeBillingSameAsShippingRequest } = useSaveBillingSameAsShipping();

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
