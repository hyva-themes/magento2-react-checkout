import { useFormikContext } from 'formik';
import { useContext, useEffect } from 'react';

import CheckoutFormContext from '../context/Form/CheckoutFormContext';
import { prepareFields } from '../context/utility';

/**
 * This hook will be used by individual form section managers
 */
function useFormSection({
  id,
  initialValues,
  validationSchema,
  submitHandler,
}) {
  const { registerFormSection } = useContext(CheckoutFormContext);
  const { dirty, touched, errors } = useFormikContext();
  const isFormValid = dirty && touched[id] && !errors[id];

  /**
   * It register the form to checkout-form-formik so that the form will be
   * a section of the big checkout form
   */
  useEffect(() => {
    registerFormSection({
      id,
      initialValues,
      validationSchema,
    });
  }, [id, initialValues, validationSchema, registerFormSection]);

  /**
   * Preparing the form context value.
   * It contains some useful methods which will deal with form section in the
   * context. Else, these information needs to be derived from the global
   * checkout-form-formik context. We are making that job easy here
   */
  const context = {
    formId: id,
    isFormValid,
    fields: prepareFields(initialValues, id),
    submitHandler,
    validationSchema,
  };

  return context;
}

export default useFormSection;
