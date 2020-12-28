import React, { useContext } from 'react';
import { RegularSelect } from '../../Elements/FormUI/RegularSelect';
import ToggleBox from '../../Common/ToggleBox';
import TextInput from '../../Common/Form/TextInput';
import Card from '../../Common/Card';
import { ShippingAddressFormContext } from '../../../context/Form';

function ShippingAddress() {
  const { fields, setFormFocused } = useContext(ShippingAddressFormContext);
  const handleFocus = () => setFormFocused(true);

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
          <RegularSelect
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
      </ToggleBox>
    </Card>
  );
}

export default ShippingAddress;
