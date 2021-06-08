import React from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import { ORBox, SaveButton } from '../../address';
import SelectInput from '../../common/Form/SelectInput';
import TextInput from '../../common/Form/TextInput';
import CancelButton from './billingAddressForm/CancelButton';
import BillingSameAsShippingCheckbox from './BillingSameAsShippingCheckbox';
import useCountryState from '../../address/hooks/useCountryState';
import useSaveAddressAction from '../hooks/useSaveAddressAction';
import useBillingAddressWrapper from '../hooks/useBillingAddressWrapper';
import useBillingAddressFormikContext from '../hooks/useBillingAddressFormikContext';
import { __ } from '../../../i18n';

function BillingAddressForm() {
  const { values } = useFormikContext();
  const { viewMode } = useBillingAddressWrapper();
  const {
    fields,
    isFormValid,
    isBillingAddressSameAsShipping,
  } = useBillingAddressFormikContext();
  const saveAddress = useSaveAddressAction();
  const { countryOptions, stateOptions, hasStateOptions } = useCountryState({
    fields,
  });
  const selectedCountry = _get(values, fields.country);

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
        {selectedCountry &&
          (hasStateOptions ? (
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
          ))}
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

export default BillingAddressForm;
