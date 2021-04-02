import React from 'react';

import ShippingAddressForm from './components/ShippingAddressForm';
import ShippingAddressFormikProvider from './components/ShippingAddressFormikProvider';

import Card from '../Common/Card';
import ToggleBox from '../Common/ToggleBox';
import ShippingAddressWrapper from './components/ShippingAddressWrapper';
import ShippingAddressView from './components/ShippingAddressView';

function ShippingAddress() {
  return (
    <ShippingAddressFormikProvider>
      <ShippingAddressWrapper>
        <Card bg="dark">
          <ToggleBox title="Shipping Information" show>
            <ShippingAddressForm />
            <ShippingAddressView />
          </ToggleBox>
        </Card>
      </ShippingAddressWrapper>
    </ShippingAddressFormikProvider>
  );
}

export default ShippingAddress;
