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
  const { editMode, setFormToEditMode, setEditMode } = useFormEditMode();
  const [cartData, { setEmailOnGuestCart }] = useCartContext();
  const cartEmailValue = _get(cartData, 'cart.email', '');
  const { values, setFieldValue } = useFormikContext();
  const emailFieldValue = _get(values, EMAIL_FIELD);

  const formSubmit = useCallback(async () => {
    await setEmailOnGuestCart(emailFieldValue);
    setEditMode(false);
  }, [emailFieldValue, setEmailOnGuestCart, setEditMode]);

  // Whenever cart-data email info get udpated, the email field will be filled with that value
  useEffect(() => {
    if (cartEmailValue) {
      setFieldValue(EMAIL_FIELD, cartEmailValue);
      setEditMode(false);
    }
  }, [cartEmailValue, setFieldValue, setEditMode]);

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
