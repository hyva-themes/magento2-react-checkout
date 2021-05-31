/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import { AddressCard } from '../../address';
import useBillingAddressWrapper from '../hooks/useBillingAddressWrapper';
import useCustomerAddressSwitchAction from '../hooks/useCustomerAddressSwitchAction';
import useBillingAddressAppContext from '../hooks/useBillingAddressAppContext';
import { _toString } from '../../../utils';
import { prepareBillingAddressCardList } from '../utility';
import { BILLING_ADDR_FORM } from '../../../config';
import useBillingAddressFormikContext from '../hooks/useBillingAddressFormikContext';
import { isValidCustomerAddressId } from '../../../utils/address';

function BillingAddressCardList() {
  const { values } = useFormikContext();
  const { selectedBillingAddressId } = useBillingAddressFormikContext();console.log({selectedBillingAddressId});
  const { isLoggedIn, customerAddressList } = useBillingAddressAppContext();
  const {
    regionData,
    selectedAddress,
    setSelectedAddress,
    setToEditMode,
    setBackupAddress,
  } = useBillingAddressWrapper();
  const billingAddress = _get(values, BILLING_ADDR_FORM, {});
  const addressList = prepareBillingAddressCardList(
    values,
    customerAddressList,
    regionData,
    isValidCustomerAddressId(selectedBillingAddressId),
    isLoggedIn
  );
  const performCustomerAddressSwitching = useCustomerAddressSwitchAction();

  const performAddressEdit = () => {
    setBackupAddress({ ...billingAddress });
    setToEditMode();
  };

  // when the address box radio button is clicked, this will be fired
  // use to update the cart address with the customer address
  const performAddressSwitching = async addressId => {
    if (addressId === selectedAddress) {
      return;
    }

    setSelectedAddress(_toString(addressId));
    await performCustomerAddressSwitching(addressId, values);
  };

  return (
    <div className="mx-2 space-y-3">
      {addressList.map(address => (
        <AddressCard
          inputName="billingAddressChooser"
          key={address.id}
          address={address}
          isSelected={!isLoggedIn || selectedBillingAddressId === address.id}
          actions={{ performAddressSwitching, performAddressEdit }}
        />
      ))}
    </div>
  );
}

export default BillingAddressCardList;
