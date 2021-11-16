import React from 'react';

import { __ } from '../../../../../i18n';

function NoItemsInfoBox() {
  return (
    <div className="h-32 py-4 min-h-12">
      <div className="flex items-center justify-center w-full h-full">
        <div>{__('No cart items available')}</div>
      </div>
    </div>
  );
}

export default NoItemsInfoBox;
