import { useEffect, useState } from 'react';
import { get as _get } from 'lodash-es';

import { useAppContext } from '../../../../hooks';

export default function useRegionData(countryValue, regionValue) {
  const { stateList } = useAppContext();
  const [regionData, setRegionData] = useState({});

  // Whenever region value changed, we will find the selected region from the stateList.
  // State info needed in multiple occasions. it is useful to store this data separately
  // and then re-use it.
  useEffect(() => {
    if (_get(regionData, 'code') !== regionValue && countryValue && stateList) {
      const newRegion = _get(stateList, countryValue, []).find(
        (state) => state.code === regionValue
      );
      setRegionData(newRegion);
    }
  }, [regionValue, countryValue, regionData, stateList]);

  return { regionData, setRegionData };
}
