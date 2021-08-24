import React from 'react';

import Card from '../common/Card';
import ToggleBox from '../common/ToggleBox';
import ShippingAddressForm from './components/ShippingAddressForm';
import ShippingAddressView from './components/ShippingAddressView';
import ShippingAddressFormikProvider from './components/ShippingAddressFormikProvider';
import { __mt } from '../../i18n';
import { formikDataShape } from '../../utils/propTypes';

const ShippingAddressMemorized = React.memo(({ formikData }) => (
  <ShippingAddressFormikProvider formikData={formikData}>
    <Card>
      <ToggleBox title={__mt('Shipping Information')} show>
        <ShippingAddressForm />
        <ShippingAddressView />
      </ToggleBox>
    </Card>
  </ShippingAddressFormikProvider>
));

ShippingAddressMemorized.propTypes = {
  formikData: formikDataShape.isRequired,
};

export default ShippingAddressMemorized;
