import React from 'react';

import { CreateNewAddressLink } from '../../address';
import BillingAddressOthers from './BillingAddressOthers';
import BillingAddressSelected from './BillingAddressSelected';
import { CART_BILLING_ADDRESS } from '../utility';
import { isCartAddressValid } from '../../../utils/address';
import { computeCanHideOtherAddressSection } from '../../address/utility';
import useBillingAddressAppContext from '../hooks/useBillingAddressAppContext';
import useBillingAddressCartContext from '../hooks/useBillingAddressCartContext';
import useBillingAddressFormikContext from '../hooks/useBillingAddressFormikContext';

function BillingAddressView() {
  const {
    editMode,
    selectedAddress,
    setIsNewAddress,
    setBackupAddress,
    setFormToEditMode,
    setSelectedAddress,
    customerAddressSelected,
    setCustomerAddressSelected,
    resetBillingAddressFormFields,
  } = useBillingAddressFormikContext();
  const { cartBillingAddress } = useBillingAddressCartContext();
  const { isLoggedIn, customerAddressList } = useBillingAddressAppContext();
  const isCartBillingAddressValid = isCartAddressValid(cartBillingAddress);
  // hide other section if there exists only one address for use.
  const hideOtherAddrSection = computeCanHideOtherAddressSection(
    isLoggedIn,
    selectedAddress,
    cartBillingAddress,
    customerAddressList
  );

  const newAddressClickHandler = () => {
    setIsNewAddress(true);
    setBackupAddress({ ...cartBillingAddress, id: selectedAddress });
    setSelectedAddress(CART_BILLING_ADDRESS);
    setCustomerAddressSelected(false);
    resetBillingAddressFormFields();
    setFormToEditMode();
  };

  if (editMode) {
    return <></>;
  }

  return (
    <div className="py-2">
      <div className="mt-5">
        <div className="my-2 space-y-2 lg:flex lg:items-start lg:space-x-4 lg:space-y-0 lg:justify-center">
          {isCartBillingAddressValid && (
            <div
              className={
                !isLoggedIn || hideOtherAddrSection ? 'w-1/2' : 'w-full'
              }
            >
              <BillingAddressSelected />
              <CreateNewAddressLink
                forceHide={!customerAddressSelected}
                actions={{ click: newAddressClickHandler }}
              />
            </div>
          )}
          {!isCartBillingAddressValid ? (
            <div className="w-4/5">
              <BillingAddressOthers forceHide={hideOtherAddrSection} />
              <CreateNewAddressLink
                actions={{ click: newAddressClickHandler }}
              />
            </div>
          ) : (
            <BillingAddressOthers forceHide={hideOtherAddrSection} />
          )}
        </div>
      </div>
    </div>
  );
}

export default BillingAddressView;
