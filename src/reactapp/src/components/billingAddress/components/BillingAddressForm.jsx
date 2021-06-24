import React from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import { ORBox, SaveButton } from '../../address';
import SelectInput from '../../common/Form/SelectInput';
import TextInput from '../../common/Form/TextInput';
import CancelButton from './billingAddressForm/CancelButton';
import BillingSameAsShippingCheckbox from './BillingSameAsShippingCheckbox';
import useCountryState from '../../address/hooks/useCountryState';
import useFormValidateThenSubmit from '../../../hook/useFormValidateThenSubmit';
import useBillingAddressFormikContext from '../hooks/useBillingAddressFormikContext';
import { __ } from '../../../i18n';
import { BILLING_ADDR_FORM } from '../../../config';

function BillingAddressForm() {
  const { values, touched } = useFormikContext();
  const {
    fields,
    formId,
    viewMode,
    validationSchema,
    submitHandler,
    handleKeyDown,
    isBillingAddressSameAsShipping,
  } = useBillingAddressFormikContext();
  const saveAddress = useFormValidateThenSubmit({
    formId,
    submitHandler,
    validationSchema,
  });
  const { countryOptions, stateOptions, hasStateOptions } = useCountryState({
    fields,
  });
  const selectedCountry = _get(values, fields.country);
  const isFormTouched = !!_get(touched, BILLING_ADDR_FORM);

  if (viewMode) {
    return <></>;
  }

  if (isBillingAddressSameAsShipping) {
    return <BillingSameAsShippingCheckbox />;
  }

  return (
    <>
      <BillingSameAsShippingCheckbox />
      <ORBox />

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
        <SaveButton isFormValid={isFormTouched} actions={{ saveAddress }} />
      </div>
    </>
  );
}

export default BillingAddressForm;
