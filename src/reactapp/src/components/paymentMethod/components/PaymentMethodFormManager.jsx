import React, { useEffect } from 'react';
import { node } from 'prop-types';
import _get from 'lodash.get';
import { string as YupString } from 'yup';
import { Form, useFormikContext } from 'formik';

import PaymentMethodFormContext from '../context/PaymentMethodFormContext';
import useFormSection from '../../../hook/useFormSection';
import usePaymentMethodAppContext from '../hooks/usePaymentMethodAppContext';
import usePaymentMethodCartContext from '../hooks/usePaymentMethodCartContext';
import { PAYMENT_METHOD_FORM } from '../../../config';
import { __ } from '../../../i18n';

const initialValues = {
  code: '',
};

const requiredMessage = __('Required');

const validationSchema = {
  code: YupString().required(requiredMessage),
};

function PaymentMethodFormManager({ children }) {
  const { setFieldValue } = useFormikContext();
  const {
    selectedPaymentMethod,
    setPaymentMethod,
  } = usePaymentMethodCartContext();
  const {
    setPageLoader,
    setSuccessMessage,
    setErrorMessage,
  } = usePaymentMethodAppContext();

  const formSubmit = async values => {
    const paymentMethodSelected = _get(values, PAYMENT_METHOD_FORM);

    try {
      if (paymentMethodSelected.code) {
        setPageLoader(true);
        await setPaymentMethod(paymentMethodSelected);
        setSuccessMessage(__('Payment method added successfully.'));
        setPageLoader(false);
      }
    } catch (error) {
      setPageLoader(false);
      setErrorMessage(
        __('Something went wrong while adding payment to the quote.')
      );
    }
  };

  useEffect(() => {
    if (selectedPaymentMethod.code) {
      setFieldValue(`${PAYMENT_METHOD_FORM}.code`, selectedPaymentMethod.code);
    }
  }, [selectedPaymentMethod, setFieldValue]);

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
