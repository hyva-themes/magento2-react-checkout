import React from 'react';
import { ShippingAddressFormManager } from '../../context/Form';
import ShippingAddress from './Form/ShippingAddress';

function ShippingAddressForm() {
  return (
    <ShippingAddressFormManager>
      <ShippingAddress />
    </ShippingAddressFormManager>
  );
}

export default ShippingAddressForm;
