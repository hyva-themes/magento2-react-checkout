import React from 'react';

import { CreateNewAddressLink } from '../../address';
import ShippingAddressOthers from './ShippingAddressOthers';
import ShippingAddressSelected from './ShippingAddressSelected';
import {
  useShippingAddressAppContext,
  useShippingAddressCartContext,
  useShippingAddressFormikContext,
} from '../../../../code/shippingAddress/hooks';
import { CART_SHIPPING_ADDRESS } from '../utility';
import { _isObjEmpty } from '../../../../../utils';
import { isCartAddressValid } from '../../../../../utils/address';

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
  const hideOtherAddrSection = isLoggedIn && _isObjEmpty(customerAddressList);
  const isCartShippingAddressValid = isCartAddressValid(cartShippingAddress);

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
