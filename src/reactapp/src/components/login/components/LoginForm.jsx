/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import _get from 'lodash.get';

import Button from '../../common/Button';
import TextInput from '../../common/Form/TextInput';
import { __ } from '../../../i18n';
import useLoginFormContext from '../hooks/useLoginFormContext';
import useFormValidateThenSubmit from '../../../hook/useFormValidateThenSubmit';

function LoginForm() {
  const {
    fields,
    formId,
    editMode,
    formikData,
    submitHandler,
    handleKeyDown,
    setFieldValue,
    loginFormValues,
    validationSchema,
    isLoginFormTouched,
  } = useLoginFormContext();
  const customerWantsToSignIn = _get(loginFormValues, 'customerWantsToSignIn');
  const handleButtonClick = useFormValidateThenSubmit({
    formId,
    formikData,
    submitHandler,
    validationSchema,
  });

  if (!editMode) {
    return <></>;
  }

  return (
    <>
      <div className="py-2">
        <TextInput
          required
          type="email"
          name={fields.email}
          label={__('E-mail')}
          onKeyDown={handleKeyDown}
          placeholder="john.doe@gmail.com"
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
              required
              type="password"
              autoComplete="on"
              label={__('Password')}
              name={fields.password}
              onKeyDown={handleKeyDown}
              placeholder={__('Password')}
            />
          </div>
        )}
      </div>
      <div className="flex items-center justify-center">
        <Button
          variant="primary"
          click={handleButtonClick}
          disable={!isLoginFormTouched}
        >
          {customerWantsToSignIn ? __('Sign In') : __('Update')}
        </Button>
      </div>
    </>
  );
}

export default LoginForm;
