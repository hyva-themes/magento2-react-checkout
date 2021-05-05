import React from 'react';

import Card from '../common/Card';
import Header from '../common/Header';
import NoPaymentMethodInfoBox from './components/NoPaymentMethodInfoBox';
import PaymentMethodFormManager from './components/PaymentMethodFormManager';
import PaymentMethodList from './components/PaymentMethodList';
import usePaymentMethodCartContext from './hooks/usePaymentMethodCartContext';
import { __ } from '../../i18n';

function PaymentMethod() {
  const { isPaymentAvailable } = usePaymentMethodCartContext();

  return (
    <PaymentMethodFormManager>
      <Card bg="dark" classes={isPaymentAvailable ? '' : 'opacity-75'}>
        <Header>{__('Payment Methods')}</Header>
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
