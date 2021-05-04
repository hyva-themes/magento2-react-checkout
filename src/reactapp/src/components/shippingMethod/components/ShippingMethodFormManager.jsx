import React, { useEffect } from 'react';
import { node } from 'prop-types';
import _get from 'lodash.get';
import { Form, useFormikContext } from 'formik';
import { string as YupString } from 'yup';

import ShippingMethodFormContext from '../context/ShippingMethodFormContext';
import useFormSection from '../../../hook/useFormSection';
import useShippingMethodCartContext from '../hooks/useShippingMethodCartContext';
import useShippingMethodAppContext from '../hooks/useShippingMethodAppContext';
import { SHIPPING_METHOD } from '../../../config';
import { __ } from '../../../i18n';

const initialValues = {
  carrierCode: '',
  methodCode: '',
};

const requiredMessage = __('Required');

const validationSchema = {
  carrierCode: YupString().required(requiredMessage),
  methodCode: YupString().required(requiredMessage),
};

function ShippingMethodFormManager({ children }) {
  const { setFieldValue } = useFormikContext();
  const { selectedMethod, setShippingMethod } = useShippingMethodCartContext();
  const {
    setPageLoader,
    setSuccessMessage,
    setErrorMessage,
  } = useShippingMethodAppContext();

  const formSubmit = async values => {
    const shippingMethodToSave = _get(values, SHIPPING_METHOD, {});

    try {
      if (shippingMethodToSave.carrierCode && shippingMethodToSave.methodCode) {
        setPageLoader(true);
        await setShippingMethod(shippingMethodToSave);
        setSuccessMessage(__('Shipping method udpated successfully.'));
        setPageLoader(false);
      }
    } catch (error) {
      console.log({ error });
      setErrorMessage(
        __('Something went wrong while updating shipping method')
      );
      setPageLoader(false);
    }
  };

  useEffect(() => {
    if (selectedMethod.carrierCode && selectedMethod.methodCode) {
      setFieldValue(SHIPPING_METHOD, {
        carrierCode: selectedMethod.carrierCode,
        methodCode: selectedMethod.methodCode,
      });
    }
  }, [selectedMethod, setFieldValue]);

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
