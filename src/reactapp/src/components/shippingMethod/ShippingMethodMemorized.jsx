import React from 'react';

import Card from '../common/Card';
import ToggleBox from '../common/ToggleBox/ToggleBox';
import ShippingMethodList from './components/ShippingMethodList';
import NoShippingMethodInfoBox from './components/NoShippingMethodInfoBox';
import ShippingMethodFormManager from './components/ShippingMethodFormManager';
import { __ } from '../../i18n';
import { formikDataShape } from '../../utils/propTypes';
import useShippingMethodCartContext from './hooks/useShippingMethodCartContext';

const ShippingMethodMemorized = React.memo(({ formikData }) => {
  const { methodsAvailable } = useShippingMethodCartContext();

  return (
    <ShippingMethodFormManager formikData={formikData}>
      <Card classes={methodsAvailable ? '' : 'opacity-75'}>
        <ToggleBox title={__('Shipping Methods')} show>
          <NoShippingMethodInfoBox />
          <ShippingMethodList />
        </ToggleBox>
      </Card>
    </ShippingMethodFormManager>
  );
});

ShippingMethodMemorized.propTypes = {
  formikData: formikDataShape.isRequired,
};

export default ShippingMethodMemorized;
