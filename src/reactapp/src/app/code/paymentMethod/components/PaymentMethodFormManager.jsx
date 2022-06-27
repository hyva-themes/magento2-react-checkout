import React, { useMemo } from 'react';
import { Form } from 'formik';
import { node } from 'prop-types';
import { string as YupString } from 'yup';

import {
  usePaymentMethodAppContext,
  usePaymentMethodCartContext,
} from '../hooks';
import { __ } from '../../../../i18n';
import { useFormSection } from '../../../../hooks';
import { PaymentMethodFormContext } from '../context';
import { PAYMENT_METHOD_FORM } from '../../../../config';
import { formikDataShape } from '../../../../utils/propTypes';

const initialValues = {
  code: '',
};

const requiredMessage = __('Required');

const validationSchema = {
  code: YupString().required(requiredMessage),
};

function PaymentMethodFormManager({ children, formikData }) {
  const { setPaymentMethod } = usePaymentMethodCartContext();
  const { setMessage, setPageLoader, setErrorMessage, setSuccessMessage } =
    usePaymentMethodAppContext();

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

  const formContext = useFormSection({
    formikData,
    initialValues,
    validationSchema,
    id: PAYMENT_METHOD_FORM,
    submitHandler: formSubmit,
  });

  const context = useMemo(
    () => ({ ...formContext, ...formikData, formikData }),
    [formContext, formikData]
  );

  return (
    <PaymentMethodFormContext.Provider value={context}>
      <Form id={PAYMENT_METHOD_FORM}>{children}</Form>
    </PaymentMethodFormContext.Provider>
  );
}

PaymentMethodFormManager.propTypes = {
  children: node.isRequired,
  formikData: formikDataShape.isRequired,
};

export default PaymentMethodFormManager;
