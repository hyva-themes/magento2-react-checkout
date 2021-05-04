import React from 'react';

import SelectInput from '../../common/Form/SelectInput';
import TextInput from '../../common/Form/TextInput';
import CancelButton from './shippingAddressForm/CancelButton';
import { SaveButton } from '../../address';
import useShippingAddressFormikContext from '../hooks/useShippingAddressFormikContext';
import useShippingAddressWrapper from '../hooks/useShippingAddressWrapper';
import useCountryState from '../../address/hooks/useCountryState';
import useSaveAddressAction from '../hooks/useSaveAddressAction';
import { __ } from '../../../i18n';

function ShippingAddressForm() {
  const { viewMode } = useShippingAddressWrapper();
  const {
    fields,
    handleFocus,
    isFormValid,
  } = useShippingAddressFormikContext();
  const saveAddress = useSaveAddressAction();
  const { countryOptions, stateOptions, hasStateOptions } = useCountryState({
    fields,
  });

  if (viewMode) {
    return <></>;
  }

  return (
    <>
      <div className="py-2">
        <TextInput
          label={__('Company')}
          name={fields.company}
          placeholder={__('Company')}
          required
          onFocus={handleFocus}
        />
        <TextInput
          label={__('Firstname')}
          name={fields.firstname}
          placeholder={__('Firstname')}
          required
          onFocus={handleFocus}
        />
        <TextInput
          label={__('Lastname')}
          name={fields.lastname}
          placeholder={__('Lastname')}
          required
          onFocus={handleFocus}
        />
        <TextInput
          label={__('Street')}
          name={`${fields.street}[0]`}
          placeholder={__('Street')}
          required
          onFocus={handleFocus}
        />
        <TextInput
          label={__('Postal Code')}
          name={fields.zipcode}
          placeholder="12345"
          required
          onFocus={handleFocus}
        />
        <TextInput
          label={__('City')}
          name={fields.city}
          placeholder={__('City')}
          required
          onFocus={handleFocus}
        />
        {hasStateOptions ? (
          <SelectInput
            label={__('State')}
            name={fields.region}
            required
            options={stateOptions}
            onFocus={handleFocus}
          />
        ) : (
          <TextInput
            label={__('State')}
            name={fields.region}
            placeholder={__('State')}
            required
            onFocus={handleFocus}
          />
        )}
        <SelectInput
          label={__('Country')}
          name={fields.country}
          required
          options={countryOptions}
          onFocus={handleFocus}
        />
        <TextInput
          label={__('Phone')}
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
    </>
  );
}

export default ShippingAddressForm;
