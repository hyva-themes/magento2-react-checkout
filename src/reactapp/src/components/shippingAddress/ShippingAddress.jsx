import React from 'react';

import ShippingAddressForm from './components/ShippingAddressForm';
import ShippingAddressFormikProvider from './components/ShippingAddressFormikProvider';

import Card from '../common/Card';
import ToggleBox from '../common/ToggleBox';
import ShippingAddressWrapper from './components/ShippingAddressWrapper';
import ShippingAddressView from './components/ShippingAddressView';
import { __ } from '../../i18n';

function ShippingAddress() {
  return (
    <ShippingAddressFormikProvider>
      <ShippingAddressWrapper>
        <Card bg="dark">
          <ToggleBox title={__('Shipping Information')} show>
            <ShippingAddressForm />
            <ShippingAddressView />
          </ToggleBox>
        </Card>
      </ShippingAddressWrapper>
    </ShippingAddressFormikProvider>
  );
}

export default ShippingAddress;
