import React from 'react';
import _get from 'lodash/get';

import { __ } from '../../../i18n';
import useLoginFormContext from '../hooks/useLoginFormContext';

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
            <h3 className="text-sm font-semibold text-slate-500">
              {__('Do you want to continue as guest user?')}
            </h3>
            <button
              type="button"
              className="px-4 py-1 text-sm font-semibold text-white bg-slate-500"
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
          <h3 className="text-sm font-semibold text-slate-500">
            {__('Do you already have an account?')}
          </h3>
          <button
            type="button"
            className="px-2 py-1 text-sm font-semibold text-white bg-slate-500"
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
