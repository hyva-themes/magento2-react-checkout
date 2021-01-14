import React, { useCallback } from 'react';
import { node } from 'prop-types';
import { Form } from 'formik';
import { string as YupString } from 'yup';

import ShippingMethodFormContext from './ShippingMethodFormContext';
import { SHIPPING_METHOD } from '../../../config';
import useFormSection from '../../../hook/useFormSection';

const initialValues = {
  carrierCode: '',
  methodCode: '',
};

const requiredMessage = 'Required';

const validationSchema = {
  carrierCode: YupString().required(requiredMessage),
  methodCode: YupString().required(requiredMessage),
};

function ShippingMethodFormManager({ children }) {
  const formSubmit = useCallback(async () => {}, []);

  const context = useFormSection({
    id: SHIPPING_METHOD,
    validationSchema,
    initialValues,
    submitHandler: formSubmit,
  });

  return (
    <ShippingMethodFormContext.Provider value={context}>
      <Form>{children}</Form>
    </ShippingMethodFormContext.Provider>
  );
}

ShippingMethodFormManager.propTypes = {
  children: node.isRequired,
};

export default ShippingMethodFormManager;
