import React, { useState } from 'react';

import Card from '../common/Card';
import Header from '../common/Header';
import CheckoutAgreementsForm from './components/CheckoutAgreementsForm';
import CheckoutAgreementModal from './components/CheckoutAgreementModal';
import CheckoutAgreementFormikProvider from './components/CheckoutAgreementsFormikProvider';
import { __ } from '../../i18n';
import { _isObjEmpty } from '../../utils';
import { formikDataShape } from '../../utils/propTypes';
import useAgreementAppContext from './hooks/useAgreementAppContext';

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

CheckoutAgreementsMemorized.propTypes = {
  formikData: formikDataShape.isRequired,
};

export default CheckoutAgreementsMemorized;
