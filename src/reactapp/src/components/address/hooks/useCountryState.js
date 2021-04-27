import { useEffect, useMemo } from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import useAppContext from '../../../hook/useAppContext';
import { prepareCountryOptions, prepareCountryStateOptions } from '../utility';

export default function useCountryState({ fields }) {
  const { values, setFieldValue } = useFormikContext();
  const [{ countryList, stateList }] = useAppContext();
  const countrySelected = _get(values, fields.country);
  const regionField = fields.region;
  const stateSelected = _get(values, regionField);

  // whenever the country is swiched, we need to clear the state input
  useEffect(() => {
    if (countrySelected) {
      const stateListContainsStateSelected =
        !stateList.length ||
        _get(stateList, countrySelected, []).find(
          s => s.code === stateSelected
        );

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

  return {
    countryOptions,
    stateOptions,
    hasStateOptions: !!stateOptions.length,
  };
}
