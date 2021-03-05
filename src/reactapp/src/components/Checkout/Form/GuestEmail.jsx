/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useContext } from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import { GuestEmailFormContext } from '../../../context/Form';
import Button from '../../Common/Button';
import Card from '../../Common/Card';
import TextInput from '../../Common/Form/TextInput';
import ToggleBox from '../../Common/ToggleBox';
import useAppContext from '../../../hook/useAppContext';

function GuestEmail() {
  const [{ isLoggedIn, customer }] = useAppContext();
  const {
    isFormValid,
    editMode,
    fields,
    handleFocus,
    setFormToEditMode,
    submitHandler,
  } = useContext(GuestEmailFormContext);
  const { values, setFieldValue } = useFormikContext();
  const customerWantsToSignin = _get(values, fields.customerWantsToSignin);
  const email = _get(values, fields.email);
  const password = _get(values, fields.password);

  const submitButtonHandler = useCallback(() => {
    submitHandler({ email, password, customerWantsToSignin });
  }, [email, password, customerWantsToSignin, submitHandler]);

  return (
    <Card bg="dark">
      <ToggleBox title="Email" show>
        {editMode ? (
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
        ) : (
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
        )}
      </ToggleBox>
    </Card>
  );
}

export default GuestEmail;
