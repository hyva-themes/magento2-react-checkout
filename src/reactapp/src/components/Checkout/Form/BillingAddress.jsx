import React, { useContext } from 'react';

import ToggleBox from '../../Common/ToggleBox';
import TextInput from '../../Common/Form/TextInput';
import Card from '../../Common/Card';
import Checkbox from '../../Common/Form/Checkbox';
import SelectInput from '../../Common/Form/SelectInput';

import { BillingAddressFormContext } from '../../../context/Form';

function BillingAddress() {
  const { fields, setFormFocused, isBillingAddressSameAsShipping } = useContext(
    BillingAddressFormContext
  );

  const handleFocus = () => setFormFocused(true);

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
    <Card bg="dark">
      <ToggleBox title="Billing information" show>
        <div className="py-2">
          <TextInput
            label="Company"
            name={fields.company}
            placeholder="Company"
            required
            onFocus={handleFocus}
          />
          <TextInput
            label="Firstname"
            name={fields.firstname}
            placeholder="Firstname"
            required
            onFocus={handleFocus}
          />
          <TextInput
            label="Lastname"
            name={fields.lastname}
            placeholder="Lastname"
            required
            onFocus={handleFocus}
          />
          <TextInput
            label="Street, Nr"
            name={fields.street}
            placeholder="Street"
            required
          />
          <TextInput
            label="Postal Code"
            name={fields.zipcode}
            placeholder="12345"
            required
            onFocus={handleFocus}
          />
          <TextInput
            label="City"
            name={fields.city}
            placeholder="City"
            required
            onFocus={handleFocus}
          />
          <SelectInput
            label="Country"
            id={fields.country}
            name="country"
            required
            options={[]}
            onFocus={handleFocus}
          />
          <TextInput
            label="Phone"
            name={fields.phone}
            placeholder="+32 000 000 000"
            required
            onFocus={handleFocus}
          />
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

export default BillingAddress;
