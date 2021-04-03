import React, { useEffect, useMemo, useState } from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import ShippingAddressWrapperContext from '../context/ShippingAddressWrapperContext';
import useShippingAddressAppContext from '../hooks/useShippingAddressAppContext';
import useShippingAddressCartContext from '../hooks/useShippingAddressCartContext';
import useShippingAddressFormikContext from '../hooks/useShippingAddressFormikContext';
import useToggler from '../hooks/useToggler';
import {
  CART_SHIPPING_ADDRESS,
  customerHasAddress,
  isCartHoldingShippingAddress,
} from '../utility';
import LocalStorage from '../../../utils/localStorage';
import { _toString } from '../../../utils';

function ShippingAddressWrapper({ children }) {
  const addressIdInCache = _toString(
    LocalStorage.getCustomerShippingAddressId()
  );
  const [forceViewMode, setForceViewMode] = useState(false);
  const [backupAddress, setBackupAddress] = useState(null);
  const [regionData, setRegionData] = useState({});
  const [selectedAddress, setSelectedAddress] = useState(
    addressIdInCache || CART_SHIPPING_ADDRESS
  );
  const [customerAddressSelected, setCustomerAddressSelected] = useState(
    !!addressIdInCache
  );
  const [editMode, setToEditMode, setToViewMode] = useToggler(true);
  const { values } = useFormikContext();
  const { cartInfo } = useShippingAddressCartContext();
  const { stateList, customerAddressList } = useShippingAddressAppContext();
  const { fields } = useShippingAddressFormikContext();
  const regionValue = _get(values, fields.region);
  const countryValue = _get(values, fields.country);

  // when user sign-in, if the cart has shipping address, then we need to
  // turn off edit mode of the address section
  useEffect(() => {
    if (
      !forceViewMode &&
      (isCartHoldingShippingAddress(cartInfo) ||
        customerHasAddress(customerAddressList))
    ) {
      // this needs to be executed once. to make sure that we are using
      // forceViewMode state
      setToViewMode();
      setForceViewMode(true);
    }
  }, [cartInfo, customerAddressList, setToViewMode]);

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

  useEffect(() => {
    console.log('effect', { selectedAddress });
  }, [selectedAddress]);

  const editModeContext = useMemo(
    () => ({
      editMode,
      viewMode: !editMode,
      setToEditMode,
      setToViewMode,
    }),
    [editMode, setToEditMode, setToViewMode]
  );

  const context = {
    ...editModeContext,
    selectedAddress,
    setSelectedAddress,
    regionData,
    backupAddress,
    setBackupAddress,
    customerAddressSelected,
    setCustomerAddressSelected,
  };

  return (
    <ShippingAddressWrapperContext.Provider value={context}>
      {children}
    </ShippingAddressWrapperContext.Provider>
  );
}

export default ShippingAddressWrapper;
