import React, { useCallback, useContext } from 'react';
import _get from 'lodash.get';
import { Form, useFormikContext } from 'formik';
import { string as YupString } from 'yup';
import GuestEmailFormContext from './GuestEmailFormContext';
import { GUEST_EMAIL_FORM } from '../../../config';
import useFormSection from '../../../hook/useFormSection';
import CartContext from '../../Cart/CartContext';

const initialValues = {
  email: '',
};

const validationSchema = {
  email: YupString()
    .required('Email is required')
    .email('Email is invalid'),
};

function GuestEmailFormManager({ children }) {
  const [, { setEmailOnGuestCart }] = useContext(CartContext);
  const { values } = useFormikContext();
  const email = _get(values, 'email.email');

  const formSubmit = useCallback(() => {
    setEmailOnGuestCart(email);
  }, [email, setEmailOnGuestCart]);

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
