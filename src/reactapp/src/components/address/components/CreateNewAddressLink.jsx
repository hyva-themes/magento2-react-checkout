import React, { useContext } from 'react';
import { bool, func, shape } from 'prop-types';
import { PlusIcon } from '@heroicons/react/solid';

import ORBox from './ORBox';
import { __ } from '../../../i18n';
import { _emptyFunc, _isObjEmpty } from '../../../utils';
import AppContext from '../../../context/App/AppContext';
import Button from '../../common/Button';
import useAppContext from '../../../hook/useAppContext';
import useCartContext from '../../../hook/useCartContext';
import { isCartAddressValid } from '../../../utils/address';

function CreateNewAddressLink({ actions, forceHide }) {
  const [{ isLoggedIn }] = useAppContext();

  if (!isLoggedIn || forceHide) {
    return <></>;
  }

  return (
    <div className="mt-6">
      <Button variant="warning" click={actions.click}>
        <PlusIcon className="w-6 h-6" />
        <span className="text-xs">{__('New Address')}</span>
      </Button>
    </div>
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
