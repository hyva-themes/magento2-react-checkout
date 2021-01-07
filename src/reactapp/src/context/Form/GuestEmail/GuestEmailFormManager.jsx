import React, { useCallback, useEffect } from 'react';
import { node } from 'prop-types';
import _get from 'lodash.get';
import { Form, useFormikContext } from 'formik';
import { string as YupString } from 'yup';

import GuestEmailFormContext from './GuestEmailFormContext';
import { GUEST_EMAIL_FORM } from '../../../config';
import useFormSection from '../../../hook/useFormSection';
import useCartContext from '../../../hook/useCartContext';
import useFormEditMode from '../../../hook/useFormEditMode';

const initialValues = {
  email: '',
};

const validationSchema = {
  email: YupString()
    .required('Email is required')
    .email('Email is invalid'),
};

const EMAIL_FIELD = 'email.email';

function GuestEmailFormManager({ children }) {
  const { editMode, setFormToEditMode, setFormEditMode } = useFormEditMode();
  const { cartEmail, setEmailOnGuestCart } = useCartContext();
  const { values, setFieldValue } = useFormikContext();
  const emailFieldValue = _get(values, EMAIL_FIELD);

  const formSubmit = useCallback(async () => {
    await setEmailOnGuestCart(emailFieldValue);
    setFormEditMode(false);
  }, [emailFieldValue, setEmailOnGuestCart, setFormEditMode]);

  // Whenever cart-data email info get udpated, the email field will be filled with that value
  useEffect(() => {
    if (cartEmail) {
      setFieldValue(EMAIL_FIELD, cartEmail);
      setFormEditMode(false);
    }
  }, [cartEmail, setFieldValue, setFormEditMode]);

  const context = useFormSection({
    id: GUEST_EMAIL_FORM,
    validationSchema,
    initialValues,
    submitHandler: formSubmit,
  });

  return (
    <GuestEmailFormContext.Provider
      value={{ ...context, editMode, setFormToEditMode }}
    >
      <Form>{children}</Form>
    </GuestEmailFormContext.Provider>
  );
}

GuestEmailFormManager.propTypes = {
  children: node.isRequired,
};

export default GuestEmailFormManager;
