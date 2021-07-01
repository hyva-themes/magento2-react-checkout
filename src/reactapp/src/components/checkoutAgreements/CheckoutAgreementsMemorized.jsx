import React, { useState } from 'react';

import Card from '../common/Card';
import Header from '../common/Header';
import { __ } from '../../i18n';
import CheckoutAgreementsForm from './components/CheckoutAgreementsForm';
import CheckoutAgreementFormikProvider from './components/CheckoutAgreementsFormikProvider';
import useAgreementAppContext from './hooks/useAgreementAppContext';
import { _isObjEmpty } from '../../utils';
import CheckoutAgreementModal from './components/CheckoutAgreementModal';

const CheckoutAgreementsMemorized = React.memo(({ formikData }) => {
  const [activeModalId, setActiveModalId] = useState(false);
  const { checkoutAgreements } = useAgreementAppContext();

  return (
    <CheckoutAgreementFormikProvider formikData={formikData}>
      {_isObjEmpty(checkoutAgreements) ? (
        <></>
      ) : (
        <Card>
          <Header>{__('Checkout Agreements')}</Header>
          <CheckoutAgreementsForm actions={{ setActiveModalId }} />
          {activeModalId && (
            <CheckoutAgreementModal
              agreementId={activeModalId}
              actions={{ setActiveModalId }}
            />
          )}
        </Card>
      )}
    </CheckoutAgreementFormikProvider>
  );
});

export default CheckoutAgreementsMemorized;
