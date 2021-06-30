import React, { useEffect, useState } from 'react';

import Card from '../common/Card';
import Header from '../common/Header';
import NoPaymentMethodInfoBox from './components/NoPaymentMethodInfoBox';
import PaymentMethodFormManager from './components/PaymentMethodFormManager';
import PaymentMethodList from './components/PaymentMethodList';
import usePaymentMethodCartContext from './hooks/usePaymentMethodCartContext';
import { __ } from '../../i18n';
import getCustomRenderers from '../../paymentMethods/customRenderers';

function PaymentMethod() {
  const [renderers, setRenderers] = useState({});
  const { isPaymentAvailable } = usePaymentMethodCartContext();

  // collect custom renderers from the custom payment methods installed.
  useEffect(() => {
    (async () => {
      const availableRenderers = await getCustomRenderers();
      setRenderers(availableRenderers);
    })();
  }, []);

  return (
    <PaymentMethodFormManager>
      <Card classes={isPaymentAvailable ? '' : 'opacity-75'}>
        <Header>{__('Payment Methods')}</Header>
        {isPaymentAvailable ? (
          <PaymentMethodList methodRenderers={renderers} />
        ) : (
          <NoPaymentMethodInfoBox />
        )}
      </Card>
    </PaymentMethodFormManager>
  );
}

export default PaymentMethod;
