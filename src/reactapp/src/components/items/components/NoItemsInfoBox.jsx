import React from 'react';

import { __mt } from '../../../i18n';

function NoItemsInfoBox() {
  return (
    <div className="h-32 py-4 min-h-12">
      <div className="flex items-center justify-center w-full h-full">
        <div>{__mt('No cart items available')}</div>
      </div>
    </div>
  );
}

export default NoItemsInfoBox;
