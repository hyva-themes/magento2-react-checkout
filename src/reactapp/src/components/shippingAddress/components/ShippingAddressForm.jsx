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
  const { fields, isFormValid } = useShippingAddressFormikContext();
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
        />
        <TextInput
          label={__('First name')}
          name={fields.firstname}
          placeholder={__('First name')}
          required
        />
        <TextInput
          label={__('Last name')}
          name={fields.lastname}
          placeholder={__('Last name')}
          required
        />
        <TextInput
          label={__('Street')}
          name={`${fields.street}[0]`}
          placeholder={__('Street')}
          required
        />
        <TextInput
          label={__('Postal Code')}
          name={fields.zipcode}
          placeholder="12345"
          required
        />
        <TextInput
          label={__('City')}
          name={fields.city}
          placeholder={__('City')}
          required
        />
        {hasStateOptions ? (
          <SelectInput
            label={__('State')}
            name={fields.region}
            required
            options={stateOptions}
          />
        ) : (
          <TextInput
            label={__('State')}
            name={fields.region}
            placeholder={__('State')}
            required
          />
        )}
        <SelectInput
          label={__('Country')}
          name={fields.country}
          required
          options={countryOptions}
        />
        <TextInput
          label={__('Phone')}
          name={fields.phone}
          placeholder="+32 000 000 000"
          required
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
