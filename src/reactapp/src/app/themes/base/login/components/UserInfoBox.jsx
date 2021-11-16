import React from 'react';
import _get from 'lodash.get';

import Button from '../../../../code/common/Button';
import {
  useLoginAppContext,
  useLoginFormContext,
} from '../../../../code/login/hooks';
import { __ } from '../../../../../i18n';

function UserInfoBox() {
  const { isLoggedIn, customer } = useLoginAppContext();
  const { editMode, loginFormValues, setFormToEditMode } =
    useLoginFormContext();
  const customerEmail = _get(customer, 'email', '');

  if (editMode) {
    return <></>;
  }

  return (
    <>
      <div className="py-2">
        <span className="flex flex-wrap items-center justify-center">
          {isLoggedIn && (
            <>
              <span>{_get(customer, 'fullName')}</span>
              {customerEmail && <span>{`(${customerEmail})`}</span>}
            </>
          )}
          {!isLoggedIn && _get(loginFormValues, 'email')}
        </span>
      </div>

      {!isLoggedIn && (
        <div className="flex items-center justify-center">
          <Button click={setFormToEditMode} variant="secondary">
            {__('Edit')}
          </Button>
        </div>
      )}
    </>
  );
}

export default UserInfoBox;
