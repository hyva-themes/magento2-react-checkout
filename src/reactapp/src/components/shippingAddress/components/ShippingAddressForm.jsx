import React from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import SelectInput from '../../common/Form/SelectInput';
import TextInput from '../../common/Form/TextInput';
import CancelButton from './shippingAddressForm/CancelButton';
import { SaveButton } from '../../address';
import useCountryState from '../../address/hooks/useCountryState';
import useShippingAddressFormikContext from '../hooks/useShippingAddressFormikContext';
import { __ } from '../../../i18n';
import useFormValidateThenSubmit from '../../../hook/useFormValidateThenSubmit';
import { SHIPPING_ADDR_FORM } from '../../../config';

function ShippingAddressForm() {
  const { values, touched } = useFormikContext();
  const {
    fields,
    viewMode,
    formId,
    handleKeyDown,
    submitHandler,
    validationSchema,
  } = useShippingAddressFormikContext();
  const { countryOptions, stateOptions, hasStateOptions } = useCountryState({
    fields,
  });
  const selectedCountry = _get(values, fields.country);
  const isFormTouched = !!_get(touched, SHIPPING_ADDR_FORM);
  const handleButtonSubmit = useFormValidateThenSubmit({
    validationSchema,
    submitHandler,
    formId,
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
          onKeyDown={handleKeyDown}
        />
        <TextInput
          label={__('First name')}
          name={fields.firstname}
          placeholder={__('First name')}
          required
          onKeyDown={handleKeyDown}
        />
        <TextInput
          label={__('Last name')}
          name={fields.lastname}
          placeholder={__('Last name')}
          required
          onKeyDown={handleKeyDown}
        />
        <TextInput
          label={__('Street')}
          name={`${fields.street}[0]`}
          placeholder={__('Street')}
          required
          onKeyDown={handleKeyDown}
        />
        <TextInput
          label={__('Postal Code')}
          name={fields.zipcode}
          placeholder="12345"
          required
          onKeyDown={handleKeyDown}
        />
        <TextInput
          label={__('City')}
          name={fields.city}
          placeholder={__('City')}
          required
          onKeyDown={handleKeyDown}
        />

        <SelectInput
          label={__('Country')}
          name={fields.country}
          required
          options={countryOptions}
          onKeyDown={handleKeyDown}
        />

        <SelectInput
          label={__('State')}
          name={fields.region}
          required
          options={stateOptions}
          onKeyDown={handleKeyDown}
          isHidden={!selectedCountry || !hasStateOptions}
        />

        <TextInput
          label={__('Phone')}
          name={fields.phone}
          placeholder="+32 000 000 000"
          required
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className="flex items-center justify-around mt-2">
        <CancelButton />
        <SaveButton
          isFormValid={isFormTouched}
          actions={{ saveAddress: handleButtonSubmit }}
        />
      </div>
    </>
  );
}

export default ShippingAddressForm;
