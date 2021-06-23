/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import { _toString } from '../../../utils';
import { AddressCard } from '../../address';
import { BILLING_ADDR_FORM } from '../../../config';
import { prepareBillingAddressCardList } from '../utility';
import { isValidCustomerAddressId } from '../../../utils/address';
import useBillingAddressAppContext from '../hooks/useBillingAddressAppContext';
import useCustomerAddressSwitchAction from '../hooks/useCustomerAddressSwitchAction';
import useBillingAddressFormikContext from '../hooks/useBillingAddressFormikContext';

function BillingAddressCardList() {
  const {
    regionData,
    selectedAddress,
    setBackupAddress,
    setFormToEditMode,
    setSelectedAddress,
    selectedBillingAddressId,
  } = useBillingAddressFormikContext();
  const { values } = useFormikContext();
  const performCustomerAddressSwitching = useCustomerAddressSwitchAction();
  const { isLoggedIn, customerAddressList } = useBillingAddressAppContext();
  const billingAddress = _get(values, BILLING_ADDR_FORM, {});
  const addressList = prepareBillingAddressCardList(
    values,
    customerAddressList,
    regionData,
    isValidCustomerAddressId(selectedBillingAddressId),
    isLoggedIn
  );

  const performAddressEdit = () => {
    setBackupAddress({ ...billingAddress });
    setFormToEditMode();
  };

  // when the address box radio button is clicked, this will be fired
  // use to update the cart address with the customer address
  const performAddressSwitching = async addressId => {
    if (addressId === selectedAddress) {
      return;
    }

    setSelectedAddress(_toString(addressId));
    await performCustomerAddressSwitching(addressId);
  };

  return (
    <div className="mx-2 space-y-3">
      {addressList.map(address => (
        <AddressCard
          key={address.id}
          address={address}
          inputName="billingAddressChooser"
          actions={{ performAddressSwitching, performAddressEdit }}
          isSelected={!isLoggedIn || selectedBillingAddressId === address.id}
        />
      ))}
    </div>
  );
}

export default BillingAddressCardList;
