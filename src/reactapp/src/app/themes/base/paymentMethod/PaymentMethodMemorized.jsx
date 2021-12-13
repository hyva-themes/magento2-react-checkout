import React from 'react';

import Card from '../common/Card';
import ToggleBox from '../common/ToggleBox';
import PaymentMethodList from './components/PaymentMethodList';
import NoPaymentMethodInfoBox from './components/NoPaymentMethodInfoBox';
import PaymentMethodFormManager from './components/PaymentMethodFormManager';
import { __ } from '../../../../i18n';
import { formikDataShape } from '../../../../utils/propTypes';
import customRenderers from '../../../../paymentMethods/customRenderers';
import { usePaymentMethodCartContext } from '../../../code/paymentMethod/hooks';

const PaymentMethodMemorized = React.memo(({ formikData }) => {
  const { isPaymentAvailable } = usePaymentMethodCartContext();

  return (
    <PaymentMethodFormManager formikData={formikData}>
      <Card classes={isPaymentAvailable ? '' : 'opacity-75'}>
        <ToggleBox show title={__('Payment Methods')}>
          {isPaymentAvailable ? (
            <PaymentMethodList methodRenderers={customRenderers} />
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
