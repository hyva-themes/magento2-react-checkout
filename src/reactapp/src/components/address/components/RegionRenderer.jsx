import React from 'react';

import { ConfigSelectInput, ConfigTextInput } from '../../common/Form';
import useCountryState from '../hooks/useCountryState';
import { fieldConfigShape, formikDataShape } from '../../../utils/propTypes';

function RegionRenderer({ formikData, config }) {
  const { stateOptions, hasStateOptions } = useCountryState({
    fields: { region: config.name },
    formikData,
  });
  const { selectedCountry } = formikData;

  if (selectedCountry && hasStateOptions) {
    return (
      <ConfigSelectInput
        formikData={formikData}
        config={{ ...config, options: stateOptions }}
      />
    );
  }

  return <ConfigTextInput formikData={formikData} config={config} />;
}

RegionRenderer.propTypes = {
  config: fieldConfigShape.isRequired,
  formikData: formikDataShape.isRequired,
};

export default RegionRenderer;
