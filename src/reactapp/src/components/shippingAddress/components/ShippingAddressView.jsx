import React from 'react';

import ShippingAddressCardList from './ShippingAddressCardList';
import { AddressCard, CreateNewAddressLink, ORBox } from '../../address';
import { CART_SHIPPING_ADDRESS } from '../utility';
import useShippingAddressCartContext from '../hooks/useShippingAddressCartContext';
import useShippingAddressFormikContext from '../hooks/useShippingAddressFormikContext';
import Card from '../../common/Card';
import RadioInput from '../../common/Form/RadioInput';
import ShippingAddressSelected from './ShippingAddressSelected';
import ShippingAddressOthers from './ShippingAddressOthers';
import useShippingAddressAppContext from '../hooks/useShippingAddressAppContext';
import { _isObjEmpty } from '../../../utils';
import { isCartAddressValid } from '../../../utils/address';

function ShippingAddressView() {
  const {
    editMode,
    selectedAddress,
    setBackupAddress,
    setFormToEditMode,
    setSelectedAddress,
    customerAddressSelected,
    setBackupSelectedAddress,
    setCustomerAddressSelected,
    resetShippingAddressFormFields,
  } = useShippingAddressFormikContext();
  const { cartShippingAddress } = useShippingAddressCartContext();
  const { isLoggedIn, customerAddressList } = useShippingAddressAppContext();
  const hideOtherAddrSection = isLoggedIn && _isObjEmpty(customerAddressList);
  const isCartShippingAddressValid = isCartAddressValid(cartShippingAddress);

  const newAddressClickHandler = () => {
    setBackupSelectedAddress(selectedAddress);
    setBackupAddress({ ...cartShippingAddress });
    setSelectedAddress(CART_SHIPPING_ADDRESS);
    resetShippingAddressFormFields();
    setCustomerAddressSelected(false);
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
              <ShippingAddressSelected />
              <CreateNewAddressLink
                forceHide={!customerAddressSelected}
                actions={{ click: newAddressClickHandler }}
              />
            </div>
          )}
          <ShippingAddressOthers forceHide={hideOtherAddrSection} />
        </div>
      </div>
    </div>
  );
}

export default ShippingAddressView;
