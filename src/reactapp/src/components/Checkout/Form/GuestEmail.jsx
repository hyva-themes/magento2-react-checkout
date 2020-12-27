import React, { useContext } from 'react';
import { GuestEmailFormContext } from '../../../context/checkoutForm';
import Card from '../../Common/Card';
import TextInput from '../../Common/Form/TextInput';
import ToggleBox from '../../Common/ToggleBox';

function GuestEmail() {
  const { fields, setFormFocused } = useContext(GuestEmailFormContext);

  const handleFocus = () => setFormFocused(true);

  return (
    <Card bg="dark">
      <ToggleBox title="Email" show>
        <div className="py-2">
          <TextInput
            label="E-mail"
            name={fields.email}
            placeholder="john.doe@gmail.com"
            required
            onFocus={handleFocus}
          />
        </div>
      </ToggleBox>
    </Card>
  );
}

export default GuestEmail;
