import React from 'react';
import { get as _get } from 'lodash-es';

import { __ } from '../../../../../i18n';
import { useLoginFormContext } from '../../../../code/login/hooks';

function LoginInfoBox() {
  const { fields, editMode, setFieldValue, loginFormValues } =
    useLoginFormContext();
  const customerWantsToSignIn = _get(loginFormValues, 'customerWantsToSignIn');

  if (!editMode) {
    return null;
  }

  if (customerWantsToSignIn) {
    return (
      <div className="my-4">
        <div className="px-4 py-1 border rounded-md bg-container-darker lg:w-2/3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-500">
              {__('Do you want to continue as guest user?')}
            </h3>
            <button
              type="button"
              className="px-4 py-1 text-sm font-semibold text-white bg-gray-500"
              onClick={() => {
                setFieldValue(fields.customerWantsToSignIn, false);
              }}
            >
              {__('Yes')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-4">
      <div className="px-4 py-1 border rounded-md bg-container-darker lg:w-2/3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-500">
            {__('Do you already have an account?')}
          </h3>
          <button
            type="button"
            className="px-2 py-1 text-sm font-semibold text-white bg-gray-500"
            onClick={() => {
              setFieldValue(fields.customerWantsToSignIn, true);
            }}
          >
            {__('Login')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginInfoBox;
