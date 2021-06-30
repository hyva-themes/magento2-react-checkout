import React, { useCallback, useEffect, useState } from 'react';
import _get from 'lodash.get';
import { node } from 'prop-types';
import { useFormikContext } from 'formik';

import useAppContext from '../../../hook/useAppContext';
import { _emptyFunc, _makePromise } from '../../../utils';
import { BILLING_ADDR_FORM, SHIPPING_ADDR_FORM } from '../../../config';

const billingCountryField = `${BILLING_ADDR_FORM}.country`;
const shippingCountryField = `${SHIPPING_ADDR_FORM}.country`;

function AddressWrapper({ children }) {
  const [countriesOfWhichStatesFetched, setCountriesFetched] = useState([]);
  const [
    { countryList },
    { fetchCountries, fetchCountryStates },
  ] = useAppContext();
  const { values } = useFormikContext();
  const billingCountry = _get(values, billingCountryField);
  const shippingCountry = _get(values, shippingCountryField);

  const collectCountryStates = useCallback(async () => {
    const countries = [];
    let fetchBillingStatesPromise = _emptyFunc();
    let fetchShippingStatesPromise = _emptyFunc();

    if (
      shippingCountry &&
      !countriesOfWhichStatesFetched.includes(shippingCountry)
    ) {
      fetchShippingStatesPromise = _makePromise(
        fetchCountryStates,
        shippingCountry
      );
      countries.push(shippingCountry);
    }

    // if billing country === shipping country, we don't want to further collect states
    if (
      billingCountry &&
      billingCountry !== shippingCountry &&
      !countriesOfWhichStatesFetched.includes(billingCountry)
    ) {
      fetchBillingStatesPromise = _makePromise(
        fetchCountryStates,
        billingCountry
      );
      countries.push(billingCountry);
    }

    if (countries.length) {
      setCountriesFetched([...countriesOfWhichStatesFetched, ...countries]);
    }

    try {
      await Promise.all([
        fetchBillingStatesPromise(),
        fetchShippingStatesPromise(),
      ]);
    } catch (error) {
      console.error(error);
    }
  }, [
    billingCountry,
    shippingCountry,
    fetchCountryStates,
    countriesOfWhichStatesFetched,
  ]);

  // Fetching country list to show them in both billing/shipping address form
  useEffect(() => {
    if (!countryList.length) {
      fetchCountries();
    }
  }, [countryList, fetchCountries]);

  // collect states belonging to billing address and shipping address countries
  useEffect(() => {
    if (!billingCountry && !shippingCountry) {
      return;
    }

    if (
      countriesOfWhichStatesFetched.includes(shippingCountry) &&
      countriesOfWhichStatesFetched.includes(billingCountry)
    ) {
      return;
    }

    collectCountryStates();
  }, [
    billingCountry,
    shippingCountry,
    collectCountryStates,
    countriesOfWhichStatesFetched,
  ]);

  return <>{children}</>;
}

AddressWrapper.propTypes = {
  children: node.isRequired,
};

export default AddressWrapper;
