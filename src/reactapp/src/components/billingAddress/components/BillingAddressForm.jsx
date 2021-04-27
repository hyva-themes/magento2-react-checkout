import React from 'react';

import { ORBox, SaveButton } from '../../address';
import SelectInput from '../../Common/Form/SelectInput';
import TextInput from '../../Common/Form/TextInput';
import CancelButton from './billingAddressForm/CancelButton';
import useBillingAddressFormikContext from '../hooks/useBillingAddressFormikContext';
import useBillingAddressWrapper from '../hooks/useBillingAddressWrapper';
import useCountryState from '../../address/hooks/useCountryState';
import useSaveAddressAction from '../hooks/useSaveAddressAction';
import BillingSameAsShippingCheckbox from './BillingSameAsShippingCheckbox';

function BillingAddressForm() {
  const { viewMode } = useBillingAddressWrapper();
  const {
    fields,
    handleFocus,
    isFormValid,
    isBillingAddressSameAsShipping,
  } = useBillingAddressFormikContext();
  const saveAddress = useSaveAddressAction();
  const { countryOptions, stateOptions, hasStateOptions } = useCountryState({
    fields,
  });

  if (viewMode) {
    return <></>;
  }

  if (isBillingAddressSameAsShipping) {
    return <BillingSameAsShippingCheckbox />;
  }

  return (
    <>
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
          label="Street"
          name={`${fields.street}[0]`}
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
        {hasStateOptions ? (
          <SelectInput
            label="State"
            name={fields.region}
            required
            options={stateOptions}
            onFocus={handleFocus}
          />
        ) : (
          <TextInput
            label="State"
            name={fields.region}
            placeholder="State"
            required
            onFocus={handleFocus}
          />
        )}
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

      <div className="flex items-center justify-around mt-2">
        <CancelButton />
        <SaveButton isFormValid={isFormValid} actions={{ saveAddress }} />
      </div>

      <ORBox />

      <BillingSameAsShippingCheckbox />
    </>
  );
}

export default BillingAddressForm;
