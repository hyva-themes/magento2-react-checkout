import React, { useCallback, useEffect } from 'react';
import { node } from 'prop-types';
import _get from 'lodash.get';
import { string as YupString } from 'yup';
import { Form, useFormikContext } from 'formik';

import PaymentMethodFormContext from './PaymentMethodFormContext';
import useFormSection from '../../../hook/useFormSection';
import { PAYMENT_METHOD_FORM } from '../../../config';
import useAppContext from '../../../hook/useAppContext';
import setPaymentMethod from '../../../api/cart/setPaymentMethod';
import useCartContext from '../../../hook/useCartContext';

const initialValues = {
  code: '',
};

const requiredMessage = 'Required';

const validationSchema = {
  code: YupString().required(requiredMessage),
};

function PaymentMethodFormManager({ children }) {
  const [, { setPageLoader }] = useAppContext();
  const { selectedPaymentMethod } = useCartContext();
  const { setFieldValue } = useFormikContext();

  const formSubmit = useCallback(
    async values => {
      const paymentMethodSelected = _get(values, PAYMENT_METHOD_FORM);

      try {
        if (paymentMethodSelected.code) {
          setPageLoader(true);
          await setPaymentMethod(paymentMethodSelected);
          setPageLoader(false);
        }
      } catch (error) {
        setPageLoader(false);
      }
    },
    [setPageLoader]
  );

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
