/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { func, shape } from 'prop-types';

import { __ } from '../../../i18n';
import { _emptyFunc } from '../../../utils';
import AppContext from '../../../context/App/AppContext';

function CreateNewAddressLink({ actions }) {
  const [{ isLoggedIn }] = useContext(AppContext)
  return (
    <div className="flex items-center justify-center mt-2">
      <span
        className="text-sm underline cursor-pointer"
        onClick={actions.click}
      >
        {__(isLoggedIn ? 'Create a new address' : 'Use different address')}
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
