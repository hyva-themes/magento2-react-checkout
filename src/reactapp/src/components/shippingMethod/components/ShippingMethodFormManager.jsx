import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Form } from 'formik';
import { node } from 'prop-types';
import { string as YupString } from 'yup';

import { __ } from '../../../i18n';
import { _isObjEmpty } from '../../../utils';
import { SHIPPING_METHOD } from '../../../config';
import useFormSection from '../../../hook/useFormSection';
import { formikDataShape } from '../../../utils/propTypes';
import useCheckoutFormContext from '../../../hook/useCheckoutFormContext';
import ShippingMethodFormContext from '../context/ShippingMethodFormContext';
import useShippingMethodAppContext from '../hooks/useShippingMethodAppContext';
import useShippingMethodCartContext from '../hooks/useShippingMethodCartContext';

const defaultValues = {
  methodCode: '',
  carrierCode: '',
};

const requiredMessage = __('Required');

const initialValidationSchema = {
  methodCode: YupString().required(requiredMessage),
  carrierCode: YupString().required(requiredMessage),
};

function ShippingMethodFormManager({ children, formikData }) {
  const { setFieldValue } = formikData;
  const [initialValues, setInitialValues] = useState(defaultValues);
  const [validationSchema, setValidationSchema] = useState(
    initialValidationSchema
  );
  const { aggregatedData } = useCheckoutFormContext();
  const { selectedMethod, setShippingMethod } = useShippingMethodCartContext();
  const { setMessage, setPageLoader, setErrorMessage, setSuccessMessage } =
    useShippingMethodAppContext();

  /**
   * This can be used to add additional validations for shipping method
   */
  const updateValidationSchema = useCallback((validationSchemaToUpdate) => {
    setValidationSchema((oldValidationSchema) => ({
      ...oldValidationSchema,
      ...validationSchemaToUpdate,
    }));
  }, []);

  const formSubmit = async (shippingMethod) => {
    setMessage(false);

    if (!shippingMethod.carrierCode || !shippingMethod.methodCode) {
      return;
    }

    try {
      setPageLoader(true);
      await setShippingMethod(shippingMethod);
      setSuccessMessage(__('Shipping method updated successfully.'));
      setPageLoader(false);
    } catch (error) {
      console.error(error);
      setErrorMessage(
        __('Something went wrong while updating shipping method')
      );
      setPageLoader(false);
    }
  };

  /**
   * Side effect to reset shipping method formik state when the cart states
   * missing selected shipping method. This can happen when we update shipping
   * address which will eventually reset shipping method on quote.
   */
  useEffect(() => {
    if (_isObjEmpty(selectedMethod)) {
      setFieldValue(SHIPPING_METHOD, { ...defaultValues });
      return;
    }
    setFieldValue(SHIPPING_METHOD, { ...selectedMethod });
  }, [selectedMethod, setFieldValue]);

  // Update initialvalues based on the initial cart data fetch.
  useEffect(() => {
    if (aggregatedData) {
      const shippingMethod =
        aggregatedData?.cart?.selected_shipping_method || {};
      setInitialValues({
        methodCode: shippingMethod.methodCode || '',
        carrierCode: shippingMethod.carrierCode || '',
      });
    }
  }, [aggregatedData]);

  const formSectionContext = useFormSection({
    formikData,
    initialValues,
    validationSchema,
    id: SHIPPING_METHOD,
    submitHandler: formSubmit,
  });

  const context = useMemo(
    () => ({
      formikData,
      initialValues,
      validationSchema,
      setInitialValues,
      setValidationSchema,
      updateValidationSchema,
      ...formikData,
      ...formSectionContext,
    }),
    [
      formikData,
      initialValues,
      validationSchema,
      formSectionContext,
      updateValidationSchema,
    ]
  );

  return (
    <ShippingMethodFormContext.Provider value={context}>
      <Form id={SHIPPING_METHOD}>{children}</Form>
    </ShippingMethodFormContext.Provider>
  );
}

ShippingMethodFormManager.propTypes = {
  children: node.isRequired,
  formikData: formikDataShape.isRequired,
};

export default ShippingMethodFormManager;
