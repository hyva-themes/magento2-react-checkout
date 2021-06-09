/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { bool, func, shape } from 'prop-types';

import ORBox from './ORBox';
import { __ } from '../../../i18n';
import { _emptyFunc } from '../../../utils';
import AppContext from '../../../context/App/AppContext';

function CreateNewAddressLink({ actions, addOR }) {
  const [{ isLoggedIn }] = useContext(AppContext);

  return (
    <>
      <div className="flex items-center justify-center mt-2">
        <span
          className="text-sm underline cursor-pointer"
          onClick={actions.click}
        >
          {__(isLoggedIn ? 'Create a new address' : 'Use different address')}
        </span>
      </div>
      {addOR && <ORBox />}
    </>
  );
}

CreateNewAddressLink.propTypes = {
  addOR: bool,
  actions: shape({
    click: func,
  }),
};

CreateNewAddressLink.defaultProps = {
  addOR: false,
  actions: { click: _emptyFunc() },
};

export default CreateNewAddressLink;
