import React from 'react';

import Card from '../common/Card';
import ToggleBox from '../common/ToggleBox';
import BillingAddressForm from './components/BillingAddressForm';
import BillingAddressWrapper from './components/BillingAddressWrapper';
import BillingAddressView from './components/BillingAddressView';
import BillingAddressFormikProvider from './components/BillingAddressFormikProvider';

function BillingAddress() {
  return (
    <BillingAddressFormikProvider>
      <BillingAddressWrapper>
        <Card bg="dark">
          <ToggleBox title="Billing Information" show>
            <BillingAddressForm />
            <BillingAddressView />
          </ToggleBox>
        </Card>
      </BillingAddressWrapper>
    </BillingAddressFormikProvider>
  );
}

export default BillingAddress;
