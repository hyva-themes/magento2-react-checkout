import React from 'react';

import Card from '../common/Card';
import ToggleBox from '../common/ToggleBox';
import CheckoutAgreementsForm from './components/CheckoutAgreementsForm';
import CheckoutAgreementModalWrapper from './components/CheckoutAgreementModalWrapper';
import CheckoutAgreementFormikProvider from './components/CheckoutAgreementsFormikProvider';
import { __ } from '../../i18n';
import { _isObjEmpty } from '../../utils';
import { formikDataShape } from '../../utils/propTypes';
import useAgreementAppContext from './hooks/useAgreementAppContext';

const CheckoutAgreementsMemorized = React.memo(({ formikData }) => {
  const { checkoutAgreements } = useAgreementAppContext();

  return (
    <CheckoutAgreementFormikProvider formikData={formikData}>
      {_isObjEmpty(checkoutAgreements) ? (
        <></>
      ) : (
        <CheckoutAgreementModalWrapper>
          <Card>
            <ToggleBox show title={__('Checkout Agreements')}>
              <CheckoutAgreementsForm />
            </ToggleBox>
          </Card>
        </CheckoutAgreementModalWrapper>
      )}
    </CheckoutAgreementFormikProvider>
  );
});

CheckoutAgreementsMemorized.propTypes = {
  formikData: formikDataShape.isRequired,
};

export default CheckoutAgreementsMemorized;
