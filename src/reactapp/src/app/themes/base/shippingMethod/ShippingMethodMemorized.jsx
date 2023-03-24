import React from 'react';

import Card from '../common/Card';
import ToggleBox from '../common/ToggleBox';
import ShippingMethodList from './components/ShippingMethodList';
import NoShippingMethodInfoBox from './components/NoShippingMethodInfoBox';
import ShippingMethodFormManager from './components/ShippingMethodFormManager';
import { __ } from '../../../../i18n';
import { formikDataShape } from '../../../../utils/propTypes';
import customRenderers from '../../../../shippingMethods/customRenderers';
import { useShippingMethodCartContext } from '../../../code/shippingMethod/hooks';

const ShippingMethodMemorized = React.memo(({ formikData }) => {
  const { methodsAvailable } = useShippingMethodCartContext();

  return (
    <ShippingMethodFormManager formikData={formikData}>
      <Card classes={methodsAvailable ? '' : 'opacity-75'}>
        <ToggleBox title={__('Shipping Methods')} show>
          <NoShippingMethodInfoBox />
          <ShippingMethodList methodRenderers={customRenderers} />
        </ToggleBox>
      </Card>
    </ShippingMethodFormManager>
  );
});

ShippingMethodMemorized.propTypes = {
  formikData: formikDataShape.isRequired,
};

export default ShippingMethodMemorized;
