import { useEffect, useState } from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import useAppContext from '../../../hook/useAppContext';

export default function useRegionData(addressType) {
  const [regionData, setRegionData] = useState({});
  const { values } = useFormikContext();
  const [{ stateList }] = useAppContext();
  const regionValue = _get(values, `${addressType}.region`);
  const countryValue = _get(values, `${addressType}.country`);

  // Whenever region value changed, we will find the selected region from the stateList.
  // State info needed in multiple occasions. it is useful to store this data separately
  // and then re-use it.
  useEffect(() => {
    if (
      _get(regionData, 'code') !== regionValue &&
      regionValue &&
      countryValue &&
      stateList
    ) {
      const newRegion = _get(stateList, countryValue, []).find(
        state => state.code === regionValue
      );
      setRegionData(newRegion);
    }
  }, [regionValue, countryValue, regionData, stateList]);

  return { regionData, setRegionData };
}
