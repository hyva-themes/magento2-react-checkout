import React from 'react';

import {
  ConfigTextInput,
  ConfigSelectInput,
} from '../../components/common/Form';
import { fieldConfigShape, formikDataShape } from '../../utils/propTypes';
import useCountryState from '../../components/address/hooks/useCountryState';

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
