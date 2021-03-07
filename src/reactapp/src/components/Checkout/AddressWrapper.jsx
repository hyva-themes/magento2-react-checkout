import React, { useCallback, useEffect } from 'react';
import { node } from 'prop-types';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import useAppContext from '../../hook/useAppContext';
import { _emptyFunc, _keys, _makePromise } from '../../utils';

function AddressWrapper({ children }) {
  const [
    { stateList, countryList },
    { fetchCountries, fetchCountryStates },
  ] = useAppContext();
  const { values } = useFormikContext();
  const shippingCountry = _get(values, `shipping_address.country`);
  const billingCountry = _get(values, 'billing_address.country');
  const countriesStatesAlreadyAvail = _keys(stateList);

  const fetchStates = useCallback(
    async country => {
      // we dont want to collect stateList if it is already collected.
      if (!countriesStatesAlreadyAvail.includes(country)) {
        await fetchCountryStates(country);
      }
    },
    [countriesStatesAlreadyAvail, fetchCountryStates]
  );

  // collect countryList to show them as options in country address field
  useEffect(() => {
    if (!countryList.length) {
      fetchCountries();
    }
  }, [countryList, fetchCountries]);

  // collect states belonging to billing address and shipping address countries
  useEffect(() => {
    let promise1 = _emptyFunc();
    let promise2 = _emptyFunc();

    if (shippingCountry) {
      promise1 = _makePromise(fetchStates, shippingCountry);
    }

    // if billing country === shipping country, we dont want to further collect states
    if (billingCountry && billingCountry !== shippingCountry) {
      promise2 = _makePromise(fetchStates, billingCountry);
    }

    (async () => {
      await Promise.all([promise1(), promise2()]);
    })();
  }, [shippingCountry, billingCountry, fetchStates]);

  return <>{children}</>;
}

AddressWrapper.propTypes = {
  children: node.isRequired,
};

export default AddressWrapper;
