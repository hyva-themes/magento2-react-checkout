import React from 'react';

import { ConfigSelectInput } from '../../common/Form';
import { prepareCountryOptions } from '../utility';
import useAppContext from '../../../hook/useAppContext';
import { fieldConfigShape, formikDataShape } from '../../../utils/propTypes';

function CountryRenderer({ formikData, config }) {
  const { countryList } = useAppContext();
  const countryOptions = prepareCountryOptions(countryList);
  const { setFieldTouched, setFieldValue, formSectionId } = formikData;
  const regionField = `${formSectionId}.region`;

  const handleCountryChange = (event) => {
    const newValue = event.target.value;
    setFieldTouched(config.name);
    setFieldValue(config.name, newValue);
    // when country is changed, then always reset region field.
    setFieldValue(regionField, '');
  };

  return (
    <ConfigSelectInput
      formikData={formikData}
      onChange={handleCountryChange}
      config={{ ...config, options: countryOptions }}
    />
  );
}

CountryRenderer.propTypes = {
  config: fieldConfigShape.isRequired,
  formikData: formikDataShape.isRequired,
};

export default CountryRenderer;
