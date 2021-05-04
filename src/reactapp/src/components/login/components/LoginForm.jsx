/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import Button from '../../common/Button';
import TextInput from '../../common/Form/TextInput';
import useLoginFormContext from '../hooks/useLoginFormContext';

function LoginForm() {
  const {
    isFormValid,
    editMode,
    fields,
    handleFocus,
    submitHandler,
  } = useLoginFormContext();
  const { values, setFieldValue } = useFormikContext();
  const customerWantsToSignin = _get(values, fields.customerWantsToSignin);
  const email = _get(values, fields.email);
  const password = _get(values, fields.password);

  const submitButtonHandler = () => {
    submitHandler({ email, password, customerWantsToSignin });
  };

  if (!editMode) {
    return <></>;
  }

  return (
    <>
      <div className="py-2">
        <TextInput
          label="E-mail"
          name={fields.email}
          placeholder="john.doe@gmail.com"
          required
          onFocus={handleFocus}
        />

        {!customerWantsToSignin && (
          <h6
            className="py-3 text-sm text-center text-black underline cursor-pointer"
            onClick={() => {
              setFieldValue(fields.customerWantsToSignin, true);
            }}
          >
            I will sign-in and checkout
          </h6>
        )}

        {customerWantsToSignin && (
          <div>
            <TextInput
              label="Password"
              type="password"
              name={fields.password}
              placeholder="Password"
              required
            />
          </div>
        )}
      </div>
      <div className="flex items-center justify-center">
        <Button
          click={submitButtonHandler}
          variant="success"
          disable={!isFormValid}
        >
          {customerWantsToSignin ? 'Sign In' : 'Update'}
        </Button>
      </div>

      {customerWantsToSignin && (
        <h6
          className="py-3 text-sm text-center text-black underline cursor-pointer"
          onClick={() => {
            setFieldValue(fields.customerWantsToSignin, false);
          }}
        >
          No, I like to continue as guest
        </h6>
      )}
    </>
  );
}

export default LoginForm;
