import React, { useEffect } from 'react';
import { node, object } from 'prop-types';
import { Form } from 'formik';
import { string as YupString } from 'yup';

import { __ } from '../../../i18n';
import { SHIPPING_METHOD } from '../../../config';
import useFormSection from '../../../hook/useFormSection';
import ShippingMethodFormContext from '../context/ShippingMethodFormContext';
import useShippingMethodAppContext from '../hooks/useShippingMethodAppContext';
import useShippingMethodCartContext from '../hooks/useShippingMethodCartContext';

const initialValues = {
  methodCode: '',
  carrierCode: '',
};

const requiredMessage = __('Required');

const validationSchema = {
  methodCode: YupString().required(requiredMessage),
  carrierCode: YupString().required(requiredMessage),
};

function ShippingMethodFormManager({ children, formikData }) {
  const {
    setPageLoader,
    setErrorMessage,
    setSuccessMessage,
  } = useShippingMethodAppContext();
  const { setFieldValue } = formikData;
  const { selectedMethod, setShippingMethod } = useShippingMethodCartContext();

  const formSubmit = async shippingMethod => {
    try {
      if (shippingMethod.carrierCode && shippingMethod.methodCode) {
        setPageLoader(true);
        await setShippingMethod(shippingMethod);
        setSuccessMessage(__('Shipping method updated successfully'));
        setPageLoader(false);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(
        __('Something went wrong while updating shipping method')
      );
      setPageLoader(false);
    }
  };

  useEffect(() => {
    if (selectedMethod.carrierCode && selectedMethod.methodCode) {
      setFieldValue(SHIPPING_METHOD, {
        methodCode: selectedMethod.methodCode,
        carrierCode: selectedMethod.carrierCode,
      });
    }
  }, [selectedMethod, setFieldValue]);

  let context = useFormSection({
    formikData,
    initialValues,
    validationSchema,
    id: SHIPPING_METHOD,
    submitHandler: formSubmit,
  });

  context = { ...context, ...formikData, formikData };

  return (
    <ShippingMethodFormContext.Provider value={context}>
      <Form id={SHIPPING_METHOD}>{children}</Form>
    </ShippingMethodFormContext.Provider>
  );
}

ShippingMethodFormManager.propTypes = {
  children: node.isRequired,
  formikData: object.isRequired,
};

export default ShippingMethodFormManager;
