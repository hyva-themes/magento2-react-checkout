import React from 'react';

import { __ } from '../../../../../i18n';
import { useShippingMethodCartContext } from '../../../../code/shippingMethod/hooks';

function NoShippingMethodInfoBox() {
  const { methodsAvailable } = useShippingMethodCartContext();

  if (methodsAvailable) {
    return null;
  }

  return (
    <div className="h-32 py-4 min-h-12">
      <div className="flex items-center justify-center w-full h-full">
        <div>{__('No shipping methods available at the moment')}</div>
      </div>
    </div>
  );
}

export default NoShippingMethodInfoBox;
