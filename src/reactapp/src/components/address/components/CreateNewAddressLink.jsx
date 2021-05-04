/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { func, shape } from 'prop-types';
import React from 'react';

import { _emptyFunc } from '../../../utils';

function CreateNewAddressLink({ actions }) {
  return (
    <div className="flex items-center justify-center mt-2">
      <span
        className="text-sm underline cursor-pointer"
        onClick={actions.click}
      >
        Create a new address
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
