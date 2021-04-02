import React, { useEffect, useMemo } from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import SelectInput from '../../Common/Form/SelectInput';
import TextInput from '../../Common/Form/TextInput';
import useAppContext from '../../../hook/useAppContext';
import CancelButton from './shippingAddressForm/CancelButton';
import SaveButton from './shippingAddressForm/SaveButton';
import useShippingAddressFormikContext from '../hooks/useShippingAddressFormikContext';
import useShippingAddressWrapper from '../hooks/useShippingAddressWrapper';
import { prepareCountryOptions, prepareCountryStateOptions } from '../utility';

function ShippingAddressForm() {
  const { viewMode } = useShippingAddressWrapper();
  const { fields, handleFocus } = useShippingAddressFormikContext();
  const { values, setFieldValue } = useFormikContext();
  const [{ countryList, stateList }] = useAppContext();
  const countrySelected = _get(values, fields.country);
  const regionField = fields.region;
  const stateSelected = _get(values, regionField);

  // whenever the country is swiched, we need to clear the state input
  useEffect(() => {
    if (countrySelected) {
      const stateListContainsStateSelected = _get(
        stateList,
        countrySelected,
        []
      ).find(s => s.code === stateSelected);

      if (!stateListContainsStateSelected) {
        setFieldValue(regionField, '');
      }
    }
  }, [countrySelected, regionField, stateSelected, stateList, setFieldValue]);

  const countryOptions = useMemo(() => prepareCountryOptions(countryList), [
    countryList,
  ]);

  const stateOptions = useMemo(
    () => prepareCountryStateOptions(stateList, countrySelected),
    [stateList, countrySelected]
  );

  if (viewMode) {
    return <></>;
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
        <SelectInput
          label="State"
          name={fields.region}
          required
          options={stateOptions}
          onFocus={handleFocus}
        />
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
        <SaveButton />
      </div>
    </>
  );
}

export default ShippingAddressForm;
