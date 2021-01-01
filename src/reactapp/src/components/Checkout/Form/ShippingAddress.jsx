import React from 'react';
import ShippingAddressFormContext from '../../../context/Form/ShippingAddress/ShippingAddressFormContext';

import AddressFields from './AddressFields';

function ShippingAddress() {
  return <AddressFields context={ShippingAddressFormContext} />;
}

export default ShippingAddress;
