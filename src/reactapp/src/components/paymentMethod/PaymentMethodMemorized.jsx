import React, { useEffect, useState } from 'react';

import Card from '../common/Card';
import ToggleBox from '../common/ToggleBox';
import PaymentMethodList from './components/PaymentMethodList';
import NoPaymentMethodInfoBox from './components/NoPaymentMethodInfoBox';
import PaymentMethodFormManager from './components/PaymentMethodFormManager';
import { __ } from '../../i18n';
import { formikDataShape } from '../../utils/propTypes';
import getCustomRenderers from '../../paymentMethods/customRenderers';
import usePaymentMethodCartContext from './hooks/usePaymentMethodCartContext';

const PaymentMethodMemorized = React.memo(({ formikData }) => {
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
    <PaymentMethodFormManager formikData={formikData}>
      <Card classes={isPaymentAvailable ? '' : 'opacity-75'}>
        <ToggleBox show title={__('Payment Methods')}>
          {isPaymentAvailable ? (
            <PaymentMethodList methodRenderers={renderers} />
          ) : (
            <NoPaymentMethodInfoBox />
          )}
        </ToggleBox>
      </Card>
    </PaymentMethodFormManager>
  );
});

PaymentMethodMemorized.propTypes = {
  formikData: formikDataShape.isRequired,
};

export default PaymentMethodMemorized;
