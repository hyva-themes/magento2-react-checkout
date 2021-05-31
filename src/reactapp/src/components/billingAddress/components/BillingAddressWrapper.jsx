import React, { useEffect, useState } from 'react';
import { node } from 'prop-types';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import BillingAddressWrapperContext from '../context/BillingAddressWrapperContext';
import useBillingAddressAppContext from '../hooks/useBillingAddressAppContext';
import useBillingAddressCartContext from '../hooks/useBillingAddressCartContext';
import useBillingAddressFormikContext from '../hooks/useBillingAddressFormikContext';
import {
  CART_BILLING_ADDRESS,
  customerHasAddress,
  isCartHoldingBillingAddress,
} from '../utility';
import LocalStorage from '../../../utils/localStorage';
import { _toString } from '../../../utils';
import useSaveBillingSameAsShipping from '../hooks/useSaveBillingSameAsShipping';

function BillingAddressWrapper({ children }) {
  const [forceViewMode, setForceViewMode] = useState(false);
  const [backupAddress, setBackupAddress] = useState(null);
  const [regionData, setRegionData] = useState({});
  const addressIdInCache = _toString(
    LocalStorage.getCustomerBillingAddressId()
  );
  const [selectedAddress, setSelectedAddress] = useState(
    addressIdInCache || CART_BILLING_ADDRESS
  );
  const [customerAddressSelected, setCustomerAddressSelected] = useState(
    !!addressIdInCache
  );
  const { values } = useFormikContext();
  const { cartInfo } = useBillingAddressCartContext();
  const { makeBillingSameAsShippingRequest } = useSaveBillingSameAsShipping();
  const { stateList, customerAddressList } = useBillingAddressAppContext();
  const {
    fields,
    editMode,
    setFormToEditMode: setToEditMode,
    setFormToViewMode: setToViewMode,
    isBillingAddressSameAsShipping,
  } = useBillingAddressFormikContext();
  const regionValue = _get(values, fields.region);
  const countryValue = _get(values, fields.country);

  useEffect(() => {
    setSelectedAddress(addressIdInCache);
  }, [addressIdInCache]);

  // when user sign-in, if the cart has billing address, then we need to
  // turn off edit mode of the address section
  useEffect(() => {
    if (
      !forceViewMode &&
      !isBillingAddressSameAsShipping &&
      (isCartHoldingBillingAddress(cartInfo) ||
        customerHasAddress(customerAddressList))
    ) {
      // this needs to be executed once. to make sure that we are using
      // forceViewMode state
      setToViewMode();
      setForceViewMode(true);
    }
  }, [
    cartInfo,
    customerAddressList,
    setToViewMode,
    forceViewMode,
    isBillingAddressSameAsShipping,
  ]);

  // whenever state value changed, we will find the state entry from the stateList
  // state info needed in multiple occasions. it is useful to store this data separate
  useEffect(() => {
    if (
      _get(regionData, 'code') !== regionValue &&
      regionValue &&
      countryValue &&
      stateList
    ) {
      const region = _get(stateList, countryValue, []).find(
        state => state.code === regionValue
      );
      setRegionData(region);
    }
  }, [regionValue, countryValue, regionData, stateList]);

  const context = {
    editMode,
    viewMode: !editMode,
    setToEditMode,
    setToViewMode,
    selectedAddress,
    setSelectedAddress,
    regionData,
    backupAddress,
    setBackupAddress,
    customerAddressSelected,
    setCustomerAddressSelected,
    makeBillingSameAsShippingRequest,
  };

  return (
    <BillingAddressWrapperContext.Provider value={context}>
      {children}
    </BillingAddressWrapperContext.Provider>
  );
}

BillingAddressWrapper.propTypes = {
  children: node.isRequired,
};

export default BillingAddressWrapper;
