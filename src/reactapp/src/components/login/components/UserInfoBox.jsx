import React from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import useLoginAppContext from '../hooks/useLoginAppContext';
import useLoginFormContext from '../hooks/useLoginFormContext';

function UserInfoBox() {
  const { values } = useFormikContext();
  const { isLoggedIn, customer } = useLoginAppContext();
  const { fields, editMode } = useLoginFormContext();

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
    </>
  );
}

export default UserInfoBox;
