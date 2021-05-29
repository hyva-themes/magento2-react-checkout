import { useContext, useEffect, useMemo, useState } from 'react';
import { useFormikContext } from 'formik';

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
  const [isFormValid, setIsFormValid] = useState(false);
  const { dirty, isValid } = useFormikContext();
  const { registerFormSection, activeFormSection } = useContext(
    CheckoutFormContext
  );

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
   * When the form in context stays as the active form section, then when the
   * form section fields get filled, we are tracking down the form section
   * becomes valid at any time.
   * We are keeping this data in state so that we can submit the form section
   * as soon as the form section at focus is getting changed.
   */
  useEffect(() => {
    if (activeFormSection === id) {
      setIsFormValid(dirty && isValid);
    }
  }, [activeFormSection, dirty, isValid, id]);

  /**
   * Preparing the form context value.
   * It contains some useful methods which will deal with form section in the
   * context. Else, these information needs to be derived from the global
   * checkout-form-formik context. We are making that job easy here
   */
  const context = useMemo(
    () => ({
      isFormValid,
      fields: prepareFields(initialValues, id),
      submitHandler,
    }),
    [isFormValid, initialValues, id, submitHandler]
  );

  return context;
}

export default useFormSection;
