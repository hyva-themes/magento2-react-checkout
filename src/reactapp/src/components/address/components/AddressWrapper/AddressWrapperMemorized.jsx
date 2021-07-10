import React, { useCallback, useEffect, useState } from 'react';
import { node } from 'prop-types';

import LocalStorage from '../../../../utils/localStorage';
import useAppContext from '../../../../hook/useAppContext';
import { formikDataShape } from '../../../../utils/propTypes';
import { prepareMostRecentAddressOptions } from '../../utility';
import { isValidCustomerAddressId } from '../../../../utils/address';
import { CART_BILLING_ADDRESS } from '../../../billingAddress/utility';
import { _emptyFunc, _makePromise, _toString } from '../../../../utils';
import AddressWrapperContext from '../../context/AddressWrapperContext';

const addressIdInCache = _toString(LocalStorage.getCustomerBillingAddressId());
const initAddressId = addressIdInCache || CART_BILLING_ADDRESS;

/**
 * Memorized Address Wrapper Component
 */
const AddressWrapperMemorized = React.memo(({ children, formikData }) => {
  const [isBillingCustomerAddress, setIsBillingCustomerAddress] = useState(
    isValidCustomerAddressId(addressIdInCache)
  );
  const [billingSelected, setBillingSelected] = useState(initAddressId);
  const [countriesOfWhichStatesFetched, setCountriesFetched] = useState([]);

  /**
   * Most recent address options are derived from the address stored in the local storage
   *
   * So whenever local storage address list changes, it is important to re-render associated
   * components. For that purpose, this needs to be kept in state.
   */
  const [mostRecentAddressOptions, setMostRecentAddressOptions] = useState([]);
  const [
    { countryList, stateList },
    { fetchCountries, fetchCountryStates },
  ] = useAppContext();
  const { billingCountry, shippingCountry } = formikData;

  /**
   * Whenever address list in the local storage changes (ie addition, update, removal actions),
   * we need to re-compute the address option state.
   */
  const reCalculateMostRecentAddressOptions = useCallback(() => {
    const addressOptions = prepareMostRecentAddressOptions(stateList);
    setMostRecentAddressOptions(addressOptions);
  }, [stateList]);

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

  useEffect(() => {
    const addressOptions = prepareMostRecentAddressOptions(stateList);
    setMostRecentAddressOptions(addressOptions);
  }, [stateList]);

  const context = {
    billingSelected,
    setBillingSelected,
    isBillingCustomerAddress,
    mostRecentAddressOptions,
    setIsBillingCustomerAddress,
    reCalculateMostRecentAddressOptions,
  };

  return (
    <AddressWrapperContext.Provider value={context}>
      {children}
    </AddressWrapperContext.Provider>
  );
});

AddressWrapperMemorized.propTypes = {
  children: node.isRequired,
  formikData: formikDataShape.isRequired,
};

export default AddressWrapperMemorized;
