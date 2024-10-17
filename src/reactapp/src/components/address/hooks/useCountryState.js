import { useEffect, useMemo } from 'react';
import { get as _get } from 'lodash-es';

import useAppContext from '../../../hook/useAppContext';
import { prepareCountryOptions, prepareCountryStateOptions } from '../utility';

export default function useCountryState({ fields, formikData }) {
  const { countryList, stateList } = useAppContext();
  const regionField = fields.region;
  const { setFieldValue, selectedCountry, selectedRegion } = formikData || {};

  // whenever the country is switched, we need to clear the state input
  useEffect(() => {
    if (selectedCountry && regionField) {
      const stateListContainsSelectedRegion =
        !stateList.length ||
        _get(stateList, selectedCountry, []).find(
          (state) => state.code === selectedRegion
        );

      if (!stateListContainsSelectedRegion) {
        setFieldValue(regionField, '');
      }
    }
  }, [selectedCountry, regionField, selectedRegion, stateList, setFieldValue]);

  const countryOptions = useMemo(
    () => prepareCountryOptions(countryList),
    [countryList]
  );

  const stateOptions = useMemo(
    () => prepareCountryStateOptions(stateList, selectedCountry),
    [stateList, selectedCountry]
  );

  return {
    countryOptions,
    stateOptions,
    hasStateOptions: !!stateOptions.length,
  };
}
