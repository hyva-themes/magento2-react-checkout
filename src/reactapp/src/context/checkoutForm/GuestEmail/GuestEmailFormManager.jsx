import React from 'react';
import { Form } from 'formik';
import { string as YupString } from 'yup';
import GuestEmailFormContext from './GuestEmailFormContext';
import { GUEST_EMAIL_FORM } from '../../../config';
import useFormSection from '../../../hook/useFormSection';

const initialValues = {
  email: '',
};

const validationSchema = {
  email: YupString()
    .required('Email is required')
    .email('Email is invalid'),
};

function GuestEmailFormManager({ children }) {
  const formSubmit = () => {};
  const context = useFormSection({
    id: GUEST_EMAIL_FORM,
    validationSchema,
    initialValues,
    submitHandler: formSubmit,
  });

  return (
    <GuestEmailFormContext.Provider value={context}>
      <Form>{children}</Form>
    </GuestEmailFormContext.Provider>
  );
}

export default GuestEmailFormManager;
