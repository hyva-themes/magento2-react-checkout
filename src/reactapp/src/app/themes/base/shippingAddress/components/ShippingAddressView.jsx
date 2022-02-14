import React from 'react';

import { CreateNewAddressLink } from '../../address';
import ShippingAddressOthers from './ShippingAddressOthers';
import ShippingAddressSelected from './ShippingAddressSelected';
import {
  isCartAddressValid,
  CART_SHIPPING_ADDRESS,
} from '../../../../../utils/address';
import {
  useShippingAddressAppContext,
  useShippingAddressCartContext,
  useShippingAddressFormikContext,
} from '../../../../code/shippingAddress/hooks';
import { computeCanHideOtherAddressSection } from '../../address/utility';

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
  // hide other section if there exists only one address for use.
  const hideOtherAddrSection = computeCanHideOtherAddressSection(
    isLoggedIn,
    selectedAddress,
    cartShippingAddress,
    customerAddressList
  );

  const newAddressClickHandler = () => {
    setIsNewAddress(true);
    setBackupAddress({ ...cartShippingAddress, id: selectedAddress });
    setSelectedAddress(CART_SHIPPING_ADDRESS);
    setCustomerAddressSelected(false);
    resetShippingAddressFormFields();
    setFormToEditMode();
  };

  if (editMode) {
    return null;
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
