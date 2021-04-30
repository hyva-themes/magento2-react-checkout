import React from 'react';

import Card from '../common/Card';
import Header from '../common/Header';
import ShippingMethodList from './components/ShippingMethodList';
import ShippingMethodFormManager from './components/ShippingMethodFormManager';
import NoShippingMethodInfoBox from './components/NoShippingMethodInfoBox';
import useShippingMethodCartContext from './hooks/useShippingMethodCartContext';

function ShippingMethodsForm() {
  const { methodsAvailable } = useShippingMethodCartContext();

  return (
    <ShippingMethodFormManager>
      <Card bg="dark" classes={methodsAvailable ? '' : 'opacity-75'}>
        <Header>Shipping Methods</Header>
        <NoShippingMethodInfoBox />
        <ShippingMethodList />
      </Card>
    </ShippingMethodFormManager>
  );
}

export default ShippingMethodsForm;
