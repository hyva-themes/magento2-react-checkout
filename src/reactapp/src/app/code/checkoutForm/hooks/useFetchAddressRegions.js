import { useEffect, useState } from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import {
  config,
  BILLING_ADDR_FORM,
  SHIPPING_ADDR_FORM,
} from '../../../../config';
import useCheckoutFormAppContext from './useCheckoutFormAppContext';

const shippingCountryField = `${SHIPPING_ADDR_FORM}.country`;
const billingCountryField = `${BILLING_ADDR_FORM}.country`;

export default function useFetchAddressRegions() {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  const { values } = useFormikContext();
  const { fetchCountryStates } = useCheckoutFormAppContext();
  const shippingCountry = _get(values, shippingCountryField);
  const billingCountry = _get(values, billingCountryField);

  useEffect(() => {
    if (fetchedCountries.includes(config.defaultCountry)) {
      return;
    }
    fetchCountryStates(config.defaultCountry);
    setFetchedCountries(config.defaultCountry);
  }, [fetchCountryStates]);

  useEffect(() => {
    if (!shippingCountry || fetchedCountries.includes(shippingCountry)) {
      return;
    }
    fetchCountryStates(shippingCountry);
    setFetchedCountries(shippingCountry);
  }, [shippingCountry, fetchCountryStates]);

  useEffect(() => {
    if (
      !billingCountry ||
      fetchedCountries.includes(billingCountry) ||
      (billingCountry && billingCountry === shippingCountry)
    ) {
      return;
    }
    fetchCountryStates(billingCountry);
    setFetchedCountries(billingCountry);
  }, [billingCountry, fetchCountryStates]);
}
