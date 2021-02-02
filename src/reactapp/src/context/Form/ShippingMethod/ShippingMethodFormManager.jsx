import React, { useCallback, useEffect } from 'react';
import { node } from 'prop-types';
import _get from 'lodash.get';
import { Form, useFormikContext } from 'formik';
import { string as YupString } from 'yup';

import ShippingMethodFormContext from './ShippingMethodFormContext';
import { SHIPPING_METHOD } from '../../../config';
import useFormSection from '../../../hook/useFormSection';
import useCartContext from '../../../hook/useCartContext';
import useAppContext from '../../../hook/useAppContext';

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
  const { shippingMethod, setShippingMethod } = useCartContext();
  const { setFieldValue } = useFormikContext();
  const [, { setPageLoader }] = useAppContext();

  const formSubmit = useCallback(
    async values => {
      const shippingMethodToSave = _get(values, 'shipping_method', {});

      try {
        if (
          shippingMethodToSave.carrierCode &&
          shippingMethodToSave.methodCode
        ) {
          setPageLoader(true);
          await setShippingMethod(shippingMethodToSave);
          setPageLoader(false);
        }
      } catch (error) {
        setPageLoader(false);
      }
    },
    [setShippingMethod, setPageLoader]
  );

  useEffect(() => {
    if (shippingMethod.carrierCode && shippingMethod.methodCode) {
      setFieldValue(SHIPPING_METHOD, {
        carrierCode: shippingMethod.carrierCode,
        methodCode: shippingMethod.methodCode,
      });
    }
  }, [shippingMethod, setFieldValue]);

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
