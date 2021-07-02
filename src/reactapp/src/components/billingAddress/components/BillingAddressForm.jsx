import React from 'react';

import { ORBox, SaveButton } from '../../address';
import TextInput from '../../common/Form/TextInput';
import SelectInput from '../../common/Form/SelectInput';
import CancelButton from './billingAddressForm/CancelButton';
import BillingSameAsShippingCheckbox from './BillingSameAsShippingCheckbox';
import { __ } from '../../../i18n';
import useCountryState from '../../address/hooks/useCountryState';
import useFormValidateThenSubmit from '../../../hook/useFormValidateThenSubmit';
import useBillingAddressFormikContext from '../hooks/useBillingAddressFormikContext';

function BillingAddressForm() {
  const {
    fields,
    formId,
    viewMode,
    formikData,
    submitHandler,
    handleKeyDown,
    validationSchema,
    isBillingAddressSameAsShipping,
  } = useBillingAddressFormikContext();
  const saveAddress = useFormValidateThenSubmit({
    formId,
    formikData,
    submitHandler,
    validationSchema,
  });
  const { countryOptions, stateOptions, hasStateOptions } = useCountryState({
    fields,
    formikData,
  });
  const { selectedCountry, isBillingAddressTouched } = formikData;

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
          required
          label={__('Company')}
          name={fields.company}
          onKeyDown={handleKeyDown}
          placeholder={__('Company')}
          formikData={formikData}
        />
        <TextInput
          required
          name={fields.firstname}
          label={__('First name')}
          onKeyDown={handleKeyDown}
          placeholder={__('First name')}
          formikData={formikData}
        />
        <TextInput
          required
          name={fields.lastname}
          label={__('Last name')}
          onKeyDown={handleKeyDown}
          placeholder={__('Last name')}
          formikData={formikData}
        />
        <TextInput
          required
          label={__('Street')}
          onKeyDown={handleKeyDown}
          placeholder={__('Street')}
          name={`${fields.street}[0]`}
          formikData={formikData}
        />
        <TextInput
          required
          placeholder="12345"
          name={fields.zipcode}
          label={__('Postal Code')}
          onKeyDown={handleKeyDown}
          formikData={formikData}
        />
        <TextInput
          required
          label={__('City')}
          name={fields.city}
          placeholder={__('City')}
          onKeyDown={handleKeyDown}
          formikData={formikData}
        />
        <SelectInput
          required
          label={__('Country')}
          name={fields.country}
          options={countryOptions}
          onKeyDown={handleKeyDown}
          formikData={formikData}
        />
        <SelectInput
          required
          label={__('State')}
          name={fields.region}
          options={stateOptions}
          onKeyDown={handleKeyDown}
          isHidden={!selectedCountry || !hasStateOptions}
          formikData={formikData}
        />
        <TextInput
          required
          label={__('Phone')}
          name={fields.phone}
          onKeyDown={handleKeyDown}
          placeholder="+32 000 000 000"
          formikData={formikData}
        />
      </div>

      <div className="flex items-center justify-around mt-2">
        <CancelButton />
        <SaveButton
          actions={{ saveAddress }}
          isFormValid={isBillingAddressTouched}
        />
      </div>
    </>
  );
}

export default BillingAddressForm;
