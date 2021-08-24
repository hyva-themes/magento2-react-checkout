import React from 'react';

import { __mt } from '../../../i18n';

function NoPaymentMethodInfoBox() {
  return (
    <div className="h-32 py-4 min-h-12">
      <div className="flex items-center justify-center w-full h-full">
        <div>{__mt('No payment methods available at the moment')}</div>
      </div>
    </div>
  );
}

export default NoPaymentMethodInfoBox;
