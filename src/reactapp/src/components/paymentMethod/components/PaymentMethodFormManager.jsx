import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Form } from 'formik';
import { node } from 'prop-types';
import { string as YupString } from 'yup';

import { __ } from '../../../i18n';
import { PAYMENT_METHOD_FORM } from '../../../config';
import useFormSection from '../../../hook/useFormSection';
import { formikDataShape } from '../../../utils/propTypes';
import useCheckoutFormContext from '../../../hook/useCheckoutFormContext';
import PaymentMethodFormContext from '../context/PaymentMethodFormContext';
import usePaymentMethodAppContext from '../hooks/usePaymentMethodAppContext';
import usePaymentMethodCartContext from '../hooks/usePaymentMethodCartContext';

const defaultValues = {
  code: '',
};

const requiredMessage = __('Required');

const initialValidationSchema = {
  code: YupString().required(requiredMessage),
};

function PaymentMethodFormManager({ children, formikData }) {
  const [initialValues, setInitialValues] = useState(defaultValues);
  const [validationSchema, setValidationSchema] = useState(
    initialValidationSchema
  );
  const { aggregatedData } = useCheckoutFormContext();
  const { setPaymentMethod } = usePaymentMethodCartContext();
  const { setMessage, setPageLoader, setErrorMessage, setSuccessMessage } =
    usePaymentMethodAppContext();

  /**
   * This can be used to add additional validations for payment method
   */
  const updateValidationSchema = useCallback((validationSchemaToUpdate) => {
    setValidationSchema((oldValidationSchema) => ({
      ...oldValidationSchema,
      ...validationSchemaToUpdate,
    }));
  }, []);

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

  // Update initialvalues based on the initial cart data fetch.
  useEffect(() => {
    if (aggregatedData) {
      const paymentMethod = aggregatedData?.cart?.selected_payment_method || {};
      setInitialValues({ code: paymentMethod.code || '' });
    }
  }, [aggregatedData]);

  const context = useMemo(
    () => ({
      ...formContext,
      ...formikData,
      formikData,
      initialValues,
      validationSchema,
      setInitialValues,
      setValidationSchema,
      updateValidationSchema,
    }),
    [
      formikData,
      formContext,
      initialValues,
      validationSchema,
      updateValidationSchema,
    ]
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
