import React, { useContext } from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import ToggleBox from '../../Common/ToggleBox';
import Card from '../../Common/Card';
import Checkbox from '../../Common/Form/Checkbox';

import { BillingAddressFormContext } from '../../../context/Form';
import AddressFields from './AddressFields';
import Button from '../../Common/Button';
import AddressBox from './AddressBox';
import { BILLING_ADDR_FORM } from '../../../config';

function BillingAddress() {
  const { values } = useFormikContext();
  const billingAddress = _get(values, BILLING_ADDR_FORM, {});
  const {
    editMode,
    fields,
    isBillingAddressSameAsShipping,
    isFormValid,
    submitHandler,
    setFormToEditMode,
  } = useContext(BillingAddressFormContext);

  if (isBillingAddressSameAsShipping) {
    return (
      <Card bg="dark">
        <ToggleBox title="Billing information" show>
          <Checkbox
            name={fields.isSameAsShipping}
            label="My billing & shipping address are same"
            isChecked
          />
        </ToggleBox>
      </Card>
    );
  }

  if (!editMode) {
    return (
      <Card bg="dark">
        <ToggleBox title="Billing information" show>
          <div className="py-2">
            <AddressBox address={billingAddress} />
          </div>

          <div className="flex items-center justify-center mt-2">
            <Button click={setFormToEditMode} variant="warning">
              edit
            </Button>
          </div>
          <div className="flex items-center justify-center h-10 my-4 text-sm font-semibold">
            OR
          </div>

          <Checkbox
            name={fields.isSameAsShipping}
            label="My billing & shipping address are same"
          />
        </ToggleBox>
      </Card>
    );
  }

  return (
    <AddressFields
      title="Billing Information"
      context={BillingAddressFormContext}
    >
      <div className="flex items-center justify-center h-10 my-4 text-sm font-semibold">
        OR
      </div>

      <Checkbox
        name={fields.isSameAsShipping}
        label="My billing & shipping address are same"
      />

      <div className="flex items-center justify-center mt-2">
        <Button click={submitHandler} variant="success" disable={!isFormValid}>
          save
        </Button>
      </div>
    </AddressFields>
  );
}

export default BillingAddress;
