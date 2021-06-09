/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import Button from '../../common/Button';
import TextInput from '../../common/Form/TextInput';
import useLoginFormContext from '../hooks/useLoginFormContext';
import { __ } from '../../../i18n';
import { LOGIN_FORM } from '../../../config';
import useFormValidateThenSubmit from '../../../hook/useFormValidateThenSubmit';

function LoginForm() {
  const { values, touched, setFieldValue } = useFormikContext();
  const {
    editMode,
    fields,
    formId,
    validationSchema,
    submitHandler,
    handleKeyDown,
  } = useLoginFormContext();
  const customerWantsToSignIn = _get(values, fields.customerWantsToSignIn);
  const isFormTouched = !!_get(touched, LOGIN_FORM);
  const handleButtonClick = useFormValidateThenSubmit({
    validationSchema,
    submitHandler,
    formId,
  });

  if (!editMode) {
    return <></>;
  }

  return (
    <>
      <div className="py-2">
        <TextInput
          type="email"
          label={__('E-mail')}
          name={fields.email}
          placeholder="john.doe@gmail.com"
          required
          onKeyDown={handleKeyDown}
        />

        {!customerWantsToSignIn && (
          <h6
            className="py-3 text-sm text-center text-black underline cursor-pointer"
            onClick={() => {
              setFieldValue(fields.customerWantsToSignIn, true);
            }}
          >
            {__('I will sign-in and checkout')}
          </h6>
        )}

        {customerWantsToSignIn && (
          <div>
            <TextInput
              label={__('Password')}
              type="password"
              name={fields.password}
              placeholder={__('Password')}
              autoComplete="on"
              required
              onKeyDown={handleKeyDown}
            />
          </div>
        )}
      </div>
      <div className="flex items-center justify-center">
        <Button
          click={handleButtonClick}
          variant="success"
          disable={!isFormTouched}
        >
          {customerWantsToSignIn ? __('Sign In') : __('Update')}
        </Button>
      </div>

      {customerWantsToSignIn && (
        <h6
          className="py-3 text-sm text-center text-black underline cursor-pointer"
          onClick={() => {
            setFieldValue(fields.customerWantsToSignIn, false);
          }}
        >
          {__('No, I like to continue as guest')}
        </h6>
      )}
    </>
  );
}

export default LoginForm;
