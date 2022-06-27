import React from 'react';
import { get as _get } from 'lodash-es';

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
    return null;
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
