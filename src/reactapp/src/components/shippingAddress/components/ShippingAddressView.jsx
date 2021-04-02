import React from 'react';

import ORBox from './ORBox';
import CreateNewAddressLink from './CreateNewAddressLink';
import ShippingAddressCardList from './ShippingAddressCardList';
import useShippingAddressWrapper from '../hooks/useShippingAddressWrapper';

function ShippingAddressView() {
  const { editMode } = useShippingAddressWrapper();

  if (editMode) {
    return <></>;
  }

  return (
    <div className="py-2">
      <CreateNewAddressLink />
      <ORBox />
      <ShippingAddressCardList />
    </div>
  );
}

export default ShippingAddressView;
