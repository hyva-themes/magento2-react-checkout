import { useEffect } from 'react';
import { get as _get } from 'lodash-es';
import { set as _set } from 'lodash-es';
import { string as YupString } from 'yup';

import { __ } from '../../../../i18n';
import { _findById } from '../../../../utils';
import { useAppContext } from '../../../../hooks';

const defaultRegionRule = YupString().nullable();
const reqRegionRule = YupString().required(__('%1 is required', 'State'));

export default function useRegionValidation(countryValue, validationSchema) {
  const { countryList } = useAppContext();

  useEffect(() => {
    if (countryValue && validationSchema.region) {
      const country = _findById(countryList, countryValue);
      const regionRequired = !!_get(country, 'stateRequired');
      const regionRule = regionRequired ? reqRegionRule : defaultRegionRule;
      _set(validationSchema, 'region', regionRule);
    }
  }, [countryValue, validationSchema, countryList]);

  return validationSchema;
}
