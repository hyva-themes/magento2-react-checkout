import React from 'react';

import Card from '../common/Card';
import ToggleBox from '../common/ToggleBox';
import ShippingAddressForm from './components/ShippingAddressForm';
import ShippingAddressView from './components/ShippingAddressView';
import ShippingAddressFormikProvider from './components/ShippingAddressFormikProvider';
import { __ } from '../../i18n';

function ShippingAddress() {
  return (
    <ShippingAddressFormikProvider>
      <Card>
        <ToggleBox title={__('Shipping Information')} show>
          <ShippingAddressForm />
          <ShippingAddressView />
        </ToggleBox>
      </Card>
    </ShippingAddressFormikProvider>
  );
}

export default ShippingAddress;
