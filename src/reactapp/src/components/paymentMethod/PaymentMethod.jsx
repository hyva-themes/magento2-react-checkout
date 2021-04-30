import React from 'react';

import Card from '../Common/Card';
import Header from '../Common/Header';
import NoPaymentMethodInfoBox from './components/NoPaymentMethodInfoBox';
import PaymentMethodFormManager from './components/PaymentMethodFormManager';
import PaymentMethodList from './components/PaymentMethodList';
import usePaymentMethodCartContext from './hooks/usePaymentMethodCartContext';

function PaymentMethod() {
  const { isPaymentAvailable } = usePaymentMethodCartContext();

  return (
    <PaymentMethodFormManager>
      <Card bg="dark" classes={isPaymentAvailable ? '' : 'opacity-75'}>
        <Header>Payment Methods</Header>
        {isPaymentAvailable ? (
          <PaymentMethodList />
        ) : (
          <NoPaymentMethodInfoBox />
        )}
      </Card>
    </PaymentMethodFormManager>
  );
}

export default PaymentMethod;
