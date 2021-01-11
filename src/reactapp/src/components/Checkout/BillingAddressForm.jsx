import React from 'react';
import { BillingAddressFormManager } from '../../context/Form';
import BillingAddress from './Form/BillingAddress';

function BillingAddressForm() {
  return (
    <BillingAddressFormManager>
      <BillingAddress />
    </BillingAddressFormManager>
  );
}

export default BillingAddressForm;
