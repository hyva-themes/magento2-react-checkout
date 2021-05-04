import React from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import Button from '../../common/Button';
import useLoginAppContext from '../hooks/useLoginAppContext';
import useLoginFormContext from '../hooks/useLoginFormContext';

function UserInfoBox() {
  const { values } = useFormikContext();
  const { isLoggedIn, customer } = useLoginAppContext();
  const { fields, editMode, setFormToEditMode } = useLoginFormContext();

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
              <span>{`(${_get(customer, 'email')})`}</span>
            </>
          )}
          {!isLoggedIn && _get(values, fields.email)}
        </span>
      </div>
      <div className="flex items-center justify-center">
        <Button click={setFormToEditMode} variant="warning">
          EDIT
        </Button>
      </div>
    </>
  );
}

export default UserInfoBox;
