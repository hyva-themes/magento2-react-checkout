import React, { useContext } from 'react';

import ToggleBox from '../../Common/ToggleBox';
import Card from '../../Common/Card';
import Checkbox from '../../Common/Form/Checkbox';

import { BillingAddressFormContext } from '../../../context/Form';
import AddressFields from './AddressFields';

function BillingAddress() {
  const { fields, isBillingAddressSameAsShipping } = useContext(
    BillingAddressFormContext
  );

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

  return (
    <AddressFields context={BillingAddressFormContext}>
      <div className="flex items-center justify-center h-10 my-4 text-sm font-semibold">
        OR
      </div>

      <Checkbox
        name={fields.isSameAsShipping}
        label="My billing & shipping address are same"
      />
    </AddressFields>
  );
}

export default BillingAddress;
