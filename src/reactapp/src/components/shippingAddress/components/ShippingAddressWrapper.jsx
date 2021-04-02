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

function ShippingAddressWrapper({ children }) {
  const [forceViewMode, setForceViewMode] = useState(false);
  const [regionData, setRegionData] = useState({});
  const [selectedAddress, setSelectedAddress] = useState(CART_SHIPPING_ADDRESS);
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
    if (regionData.code !== regionValue && regionValue && countryValue) {
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
  };

  return (
    <ShippingAddressWrapperContext.Provider value={context}>
      {children}
    </ShippingAddressWrapperContext.Provider>
  );
}

export default ShippingAddressWrapper;
