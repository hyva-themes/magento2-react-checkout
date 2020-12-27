import React, { useContext } from 'react';
import { RegularSelect } from '../../Elements/FormUI/RegularSelect';
import ToggleBox from '../../Common/ToggleBox';
import TextInput from '../../Common/Form/TextInput';
import Card from '../../Common/Card';
import { ShippingAddressFormContext } from '../../../context/checkoutForm';

function ShippingAddress() {
  const { fields } = useContext(ShippingAddressFormContext);
  return (
    <Card bg="dark">
      <ToggleBox title="Shipping information" show>
        <div className="py-2">
          <TextInput
            label="Company"
            name={fields.company}
            placeholder="Company"
            required
          />
          <TextInput
            label="Firstname"
            name={fields.firstname}
            placeholder="Firstname"
            required
          />
          <TextInput
            label="Lastname"
            name={fields.lastname}
            placeholder="Lastname"
            required
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
          />
          <TextInput
            label="City"
            name={fields.city}
            placeholder="City"
            required
          />
          <RegularSelect
            label="Country"
            id={fields.country}
            name="country"
            required
            options={[]}
          />
          <TextInput
            label="Phone"
            name={fields.phone}
            placeholder="+32 000 000 000"
            required
          />
        </div>
      </ToggleBox>
    </Card>
  );
}

export default ShippingAddress;
