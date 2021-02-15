import React, { useEffect } from 'react';
import { node } from 'prop-types';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import useAppContext from '../../hook/useAppContext';
import { _keys } from '../../utils';

function AddressWrapper({ children }) {
  const [
    { stateList, countryList },
    { fetchCountries, fetchCountryStates },
  ] = useAppContext();
  const { values } = useFormikContext();
  const shippingCountry = _get(values, `shipping_address.country`);
  const billingCountry = _get(values, 'billing_address.country');
  const countriesStatesAlreadyAvail = _keys(stateList);

  // collect countryList to show them as options in country address field
  useEffect(() => {
    if (!countryList.length) {
      fetchCountries();
    }
  }, [countryList, fetchCountries]);

  // collect states belonging to billing address and shipping address countries
  useEffect(() => {
    const fetchStates = country => {
      // we dont want to collect stateList if it is already collected.
      if (!countriesStatesAlreadyAvail.includes(country)) {
        fetchCountryStates(country);
      }
    };

    if (shippingCountry) {
      fetchStates(shippingCountry);
    }

    // if billing country === shipping country, we dont want to further collect states
    if (billingCountry && billingCountry !== shippingCountry) {
      fetchStates(billingCountry);
    }
  }, [
    shippingCountry,
    billingCountry,
    countriesStatesAlreadyAvail,
    fetchCountries,
    fetchCountryStates,
  ]);

  return <>{children}</>;
}

AddressWrapper.propTypes = {
  children: node.isRequired,
};

export default AddressWrapper;
