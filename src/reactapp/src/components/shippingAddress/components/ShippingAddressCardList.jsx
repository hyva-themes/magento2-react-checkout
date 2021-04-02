/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback } from 'react';
import { useFormikContext } from 'formik';

import ShippingAddressCard from './ShippingAddressCard';
import { prepareShippingAddressCardList } from '../utility';
import useShippingAddressWrapper from '../hooks/useShippingAddressWrapper';
import useCustomerAddressSwitchAction from '../hooks/useCustomerAddressSwitchAction';
import useShippingAddressAppContext from '../hooks/useShippingAddressAppContext';

function ShippingAddressCardList() {
  const { values } = useFormikContext();
  const { customerAddressList } = useShippingAddressAppContext();
  const performCustomerAddressSwitching = useCustomerAddressSwitchAction();
  const addressList = prepareShippingAddressCardList(
    values,
    customerAddressList,
    regionData
  );
  const {
    regionData,
    selectedAddress,
    setSelectedAddress,
  } = useShippingAddressWrapper();

  // when the address box radio button is clicked, this will be fired
  // use to update the cart address with the customer address
  const performAddressSwitching = useCallback(
    addressId => {
      if (addressId === selectedAddress) {
        return;
      }
      setSelectedAddress(addressId);
      performCustomerAddressSwitching(addressId, values);
    },
    [
      values,
      selectedAddress,
      setSelectedAddress,
      performCustomerAddressSwitching,
    ]
  );

  return (
    <div className="mx-2 space-y-3">
      {addressList.map(address => (
        <ShippingAddressCard
          address={address}
          isSelected={selectedAddress === address.id}
          actions={{ performAddressSwitching }}
        />
      ))}
    </div>
  );
}

export default ShippingAddressCardList;
