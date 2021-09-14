import React from 'react';
import _get from 'lodash.get';

import Button from '../../common/Button';
import TextInput from '../../common/Form/TextInput';
import { __mt } from '../../../i18n';
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
          label={__mt('Email')}
          name={fields.email}
          formikData={formikData}
          onKeyDown={handleKeyDown}
          placeholder={__mt('john.doe@gmail.com')}
        />

        {!customerWantsToSignIn && (
          <div
            role="button"
            tabIndex="0"
            className="py-3 text-sm text-center text-black underline cursor-pointer"
            onClick={() => {
              setFieldValue(fields.customerWantsToSignIn, true);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                setFieldValue(fields.customerWantsToSignIn, true);
              }
            }}
          >
            {__mt('I will sign-in and checkout')}
          </div>
        )}

        {customerWantsToSignIn && (
          <div>
            <TextInput
              required
              type="password"
              autoComplete="on"
              label={__mt('Password')}
              name={fields.password}
              formikData={formikData}
              onKeyDown={handleKeyDown}
              placeholder={__mt('Password')}
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
          {customerWantsToSignIn ? __mt('Sign In') : __mt('Update')}
        </Button>
      </div>
    </>
  );
}

export default LoginForm;
