import React from 'react';

import Card from '../common/Card';
import Header from '../common/Header';
import ShippingMethodList from './components/ShippingMethodList';
import ShippingMethodFormManager from './components/ShippingMethodFormManager';
import NoShippingMethodInfoBox from './components/NoShippingMethodInfoBox';
import { __ } from '../../i18n';
import { formikDataShape } from '../../utils/propTypes';
import useShippingMethodCartContext from './hooks/useShippingMethodCartContext';

const ShippingMethodMemorized = React.memo(({ formikData }) => {
  const { methodsAvailable } = useShippingMethodCartContext();

  return (
    <ShippingMethodFormManager formikData={formikData}>
      <Card classes={methodsAvailable ? '' : 'opacity-75'}>
        <Header>{__('Shipping Methods')}</Header>
        <NoShippingMethodInfoBox />
        <ShippingMethodList />
      </Card>
    </ShippingMethodFormManager>
  );
});

ShippingMethodMemorized.propTypes = {
  formikData: formikDataShape.isRequired,
};

export default ShippingMethodMemorized;
