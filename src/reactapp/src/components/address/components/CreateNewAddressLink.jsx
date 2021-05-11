/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { func, shape } from 'prop-types';

import { __ } from '../../../i18n';
import { _emptyFunc } from '../../../utils';

function CreateNewAddressLink({ actions }) {
  return (
    <div className="flex items-center justify-center mt-2">
      <span
        className="text-sm underline cursor-pointer"
        onClick={actions.click}
      >
        {__('Create a new address')}
      </span>
    </div>
  );
}

CreateNewAddressLink.propTypes = {
  actions: shape({
    click: func,
  }),
};

CreateNewAddressLink.defaultProps = {
  actions: { click: _emptyFunc() },
};

export default CreateNewAddressLink;
