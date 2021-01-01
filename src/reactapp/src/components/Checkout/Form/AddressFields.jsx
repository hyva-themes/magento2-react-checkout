import React, { useContext, useMemo } from 'react';

import SelectInput from '../../Common/Form/SelectInput';
import ToggleBox from '../../Common/ToggleBox';
import TextInput from '../../Common/Form/TextInput';
import Card from '../../Common/Card';
import useAppContext from '../../../hook/useAppContext';

function AddressFields({ children, context }) {
  const [{ countryList }] = useAppContext();
  const { fields, handleFocus } = useContext(context);

  const countryOptions = useMemo(
    () =>
      countryList.map(country => ({
        value: country.id,
        label: country.name,
      })),
    [countryList]
  );

  return (
    <Card bg="dark">
      <ToggleBox title="Shipping information" show>
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
            onFocus={handleFocus}
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
            name={fields.country}
            required
            options={countryOptions}
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

        {children}
      </ToggleBox>
    </Card>
  );
}

export default AddressFields;
