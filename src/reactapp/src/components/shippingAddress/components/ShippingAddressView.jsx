import React from 'react';

import { CreateNewAddressLink } from '../../address';
import ShippingAddressOthers from './ShippingAddressOthers';
import ShippingAddressSelected from './ShippingAddressSelected';
import {
  isCartAddressValid,
  CART_SHIPPING_ADDRESS,
} from '../../../utils/address';
import { _keys } from '../../../utils';
import LocalStorage from '../../../utils/localStorage';
import useShippingAddressAppContext from '../hooks/useShippingAddressAppContext';
import useShippingAddressCartContext from '../hooks/useShippingAddressCartContext';
import useShippingAddressFormikContext from '../hooks/useShippingAddressFormikContext';

function ShippingAddressView() {
  const {
    editMode,
    selectedAddress,
    setIsNewAddress,
    setBackupAddress,
    setFormToEditMode,
    setSelectedAddress,
    customerAddressSelected,
    setCustomerAddressSelected,
    resetShippingAddressFormFields,
  } = useShippingAddressFormikContext();
  const { cartShippingAddress } = useShippingAddressCartContext();
  const { isLoggedIn, customerAddressList } = useShippingAddressAppContext();
  const isCartShippingAddressValid = isCartAddressValid(cartShippingAddress);
  const mostRecentAddressList = LocalStorage.getMostRecentlyUsedAddressList();
  // hide other section if there exists only one address for use.
  const hideOtherAddrSection =
    isLoggedIn &&
    (_keys(customerAddressList).length > 1 ||
      (!_keys(mostRecentAddressList).length && !isCartShippingAddressValid));

  const newAddressClickHandler = () => {
    setIsNewAddress(true);
    setBackupAddress({ ...cartShippingAddress, id: selectedAddress });
    setSelectedAddress(CART_SHIPPING_ADDRESS);
    setCustomerAddressSelected(false);
    resetShippingAddressFormFields();
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
                !isLoggedIn || hideOtherAddrSection ? 'md:w-1/2' : 'w-full'
              }
            >
              <ShippingAddressSelected />
              <CreateNewAddressLink
                forceHide={!customerAddressSelected}
                actions={{ click: newAddressClickHandler }}
              />
            </div>
          )}
          {!isCartShippingAddressValid ? (
            <div className="w-4/5">
              <ShippingAddressOthers forceHide={hideOtherAddrSection} />
              <CreateNewAddressLink
                actions={{ click: newAddressClickHandler }}
              />
            </div>
          ) : (
            <ShippingAddressOthers forceHide={hideOtherAddrSection} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ShippingAddressView;
