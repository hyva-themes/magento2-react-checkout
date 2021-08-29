import React, { useEffect } from 'react';
import { Form } from 'formik';
import { node } from 'prop-types';
import { string as YupString } from 'yup';

import { __ } from '../../../i18n';
import { PAYMENT_METHOD_FORM } from '../../../config';
import useFormSection from '../../../hook/useFormSection';
import { formikDataShape } from '../../../utils/propTypes';
import PaymentMethodFormContext from '../context/PaymentMethodFormContext';
import usePaymentMethodAppContext from '../hooks/usePaymentMethodAppContext';
import usePaymentMethodCartContext from '../hooks/usePaymentMethodCartContext';

const initialValues = {
  code: '',
};

const requiredMessage = __('Required');

const validationSchema = {
  code: YupString().required(requiredMessage),
};

function PaymentMethodFormManager({ children, formikData }) {
  const { setPaymentMethod, selectedPaymentMethod } =
    usePaymentMethodCartContext();
  const { setMessage, setPageLoader, setErrorMessage, setSuccessMessage } =
    usePaymentMethodAppContext();
  const { setFieldValue } = formikData;

  const formSubmit = async (paymentMethod) => {
    setMessage(false);

    if (!paymentMethod) {
      return;
    }

    try {
      setPageLoader(true);
      await setPaymentMethod(paymentMethod);
      setSuccessMessage(__('Payment method added successfully.'));
      setPageLoader(false);
    } catch (error) {
      setPageLoader(false);
      setErrorMessage(
        error.message ||
          __(
            'Something went wrong while adding the payment method to the quote.'
          )
      );
    }
  };

  useEffect(() => {
    if (selectedPaymentMethod.code) {
      setFieldValue(`${PAYMENT_METHOD_FORM}.code`, selectedPaymentMethod.code);
    }
  }, [selectedPaymentMethod, setFieldValue]);

  const context = useFormSection({
    formikData,
    initialValues,
    validationSchema,
    id: PAYMENT_METHOD_FORM,
    submitHandler: formSubmit,
  });

  return (
    <PaymentMethodFormContext.Provider
      value={{ ...context, ...formikData, formikData }}
    >
      <Form id={PAYMENT_METHOD_FORM}>{children}</Form>
    </PaymentMethodFormContext.Provider>
  );
}

PaymentMethodFormManager.propTypes = {
  children: node.isRequired,
  formikData: formikDataShape.isRequired,
};

export default PaymentMethodFormManager;
