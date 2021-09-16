import React from 'react';

import Card from '../common/Card';
import ToggleBox from '../common/ToggleBox';
import BillingAddressForm from './components/BillingAddressForm';
import BillingAddressView from './components/BillingAddressView';
import BillingAddressFormikProvider from './components/BillingAddressFormikProvider';
import { __ } from '../../i18n';
import { formikDataShape } from '../../utils/propTypes';

const BillingAddressMemorized = React.memo(({ formikData }) => {
  const { isBillingSame } = formikData;

  return (
    <BillingAddressFormikProvider formikData={formikData}>
      {!isBillingSame && (
        <Card>
          <ToggleBox title={__('Billing Information')} show>
            <BillingAddressForm />
            <BillingAddressView />
          </ToggleBox>
        </Card>
      )}
    </BillingAddressFormikProvider>
  );
});

BillingAddressMemorized.propTypes = {
  formikData: formikDataShape.isRequired,
};

export default BillingAddressMemorized;
