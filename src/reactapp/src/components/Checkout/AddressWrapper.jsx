import React, { useEffect } from 'react';
import { node } from 'prop-types';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import useAppContext from '../../hook/useAppContext';

function AddressWrapper({ children }) {
  const [
    { stateList },
    { fetchCountries, fetchCountryStates },
  ] = useAppContext();
  const { values } = useFormikContext();
  const shippingCountry = _get(values, `shipping_address.country`);
  const billingCountry = _get(values, 'billing_address.country');

  // collect countryList to show them as options in country address field
  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  // collect states belonging to billing address and shipping address countries
  useEffect(() => {
    const countriesStatesAlreadyAvail = Object.keys(stateList);

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
  }, [shippingCountry, billingCountry, fetchCountries, fetchCountryStates]);

  return <>{children}</>;
}

AddressWrapper.propTypes = {
  children: node.isRequired,
};

export default AddressWrapper;
