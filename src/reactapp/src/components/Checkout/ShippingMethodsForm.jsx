import React from 'react';
import ShippingMethodFormManager from '../../context/Form/ShippingMethod/ShippingMethodFormManager';
import ShippingMethods from './Form/ShippingMethods';

function ShippingMethodsForm() {
  return (
    <ShippingMethodFormManager>
      <ShippingMethods />
    </ShippingMethodFormManager>
  );
}

export default ShippingMethodsForm;
