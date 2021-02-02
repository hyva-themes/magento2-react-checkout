import React from 'react';
import PaymentMethodFormManager from '../../context/Form/PaymentMethod/PaymentMethodFormManager';
import PaymentMethods from './Form/PaymentMethods';

function PaymentMethodsForm() {
  return (
    <PaymentMethodFormManager>
      <PaymentMethods />
    </PaymentMethodFormManager>
  );
}

export default PaymentMethodsForm;
