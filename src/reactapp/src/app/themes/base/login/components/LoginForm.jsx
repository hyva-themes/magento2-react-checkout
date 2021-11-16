import React from 'react';
import _get from 'lodash.get';

import Button from '../../../../code/common/Button';
import { TextInput } from '../../../../code/common/Form';
import { __ } from '../../../../../i18n';
import { useFormValidateThenSubmit } from '../../../../../hooks';
import { useLoginFormContext } from '../../../../code/login/hooks';

function LoginForm() {
  const {
    fields,
    formId,
    editMode,
    formikData,
    submitHandler,
    handleKeyDown,
    loginFormValues,
    validationSchema,
    formSectionTouched,
  } = useLoginFormContext();
  const customerWantsToSignIn = _get(loginFormValues, 'customerWantsToSignIn');
  const isLoginFormTouched = _get(formSectionTouched, 'email') || false;
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
          label={__('Email')}
          name={fields.email}
          formikData={formikData}
          onKeyDown={handleKeyDown}
          placeholder={__('john.doe@gmail.com')}
        />

        {customerWantsToSignIn && (
          <div>
            <TextInput
              required
              type="password"
              autoComplete="on"
              label={__('Password')}
              name={fields.password}
              formikData={formikData}
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
