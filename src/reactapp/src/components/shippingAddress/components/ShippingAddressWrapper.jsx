import React, { useEffect, useMemo, useState } from 'react';
import _get from 'lodash.get';
import { node } from 'prop-types';
import { useFormikContext } from 'formik';

import ShippingAddressWrapperContext from '../context/ShippingAddressWrapperContext';
import useShippingAddressAppContext from '../hooks/useShippingAddressAppContext';
import useShippingAddressCartContext from '../hooks/useShippingAddressCartContext';
import useShippingAddressFormikContext from '../hooks/useShippingAddressFormikContext';
import useToggler from '../hooks/useToggler';
import { CART_SHIPPING_ADDRESS } from '../utility';
import LocalStorage from '../../../utils/localStorage';
import { _toString } from '../../../utils';
import { isCartAddressValid } from '../../../utils/address';
import { customerHasAddress } from '../../../utils/customer';

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
  const { cartShippingAddress } = useShippingAddressCartContext();
  const { stateList, customerAddressList } = useShippingAddressAppContext();
  const { fields } = useShippingAddressFormikContext();
  const regionValue = _get(values, fields.region);
  const countryValue = _get(values, fields.country);
  const isCartShippingAddrValid = isCartAddressValid(cartShippingAddress);

  // when user sign-in, if the cart has shipping address, then we need to
  // turn off edit mode of the address section
  useEffect(() => {
    if (
      !forceViewMode &&
      (isCartShippingAddrValid || customerHasAddress(customerAddressList))
    ) {
      // this needs to be executed once. to make sure that we are using
      // forceViewMode state
      setToViewMode();
      setForceViewMode(true);
    }
  }, [
    isCartShippingAddrValid,
    customerAddressList,
    setToViewMode,
    forceViewMode,
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

ShippingAddressWrapper.propTypes = {
  children: node.isRequired,
};

export default ShippingAddressWrapper;
