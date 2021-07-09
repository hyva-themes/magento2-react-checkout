import React from 'react';

import { CreateNewAddressLink } from '../../address';
import BillingAddressSelected from './BillingAddressSelected';
import BillingAddressOthers from './BillingAddressOthers';
import { _isObjEmpty } from '../../../utils';
import { CART_BILLING_ADDRESS } from '../utility';
import { isCartAddressValid } from '../../../utils/address';
import useBillingAddressAppContext from '../hooks/useBillingAddressAppContext';
import useBillingAddressCartContext from '../hooks/useBillingAddressCartContext';
import useBillingAddressFormikContext from '../hooks/useBillingAddressFormikContext';

function BillingAddressView() {
  const {
    editMode,
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
  const hideOtherAddrSection = isLoggedIn && _isObjEmpty(customerAddressList);
  const isCartShippingAddressValid = isCartAddressValid(cartBillingAddress);

  const newAddressClickHandler = () => {
    setIsNewAddress(true);
    setBackupAddress({ ...cartBillingAddress });
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
          {isCartShippingAddressValid && (
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
          {!isCartShippingAddressValid ? (
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
