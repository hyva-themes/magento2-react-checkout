import React, { useCallback } from 'react';
import { node } from 'prop-types';
import { string as YupString } from 'yup';
import { Form } from 'formik';

import PaymentMethodFormContext from './PaymentMethodFormContext';
import useFormSection from '../../../hook/useFormSection';
import { PAYMENT_METHOD_FORM } from '../../../config';

const initialValues = {
  code: '',
};

const requiredMessage = 'Required';

const validationSchema = {
  code: YupString().required(requiredMessage),
};

function PaymentMethodFormManager({ children }) {
  const formSubmit = useCallback(async () => {}, []);

  const context = useFormSection({
    id: PAYMENT_METHOD_FORM,
    validationSchema,
    initialValues,
    submitHandler: formSubmit,
  });

  return (
    <PaymentMethodFormContext.Provider value={context}>
      <Form>{children}</Form>
    </PaymentMethodFormContext.Provider>
  );
}

PaymentMethodFormManager.propTypes = {
  children: node.isRequired,
};

export default PaymentMethodFormManager;
