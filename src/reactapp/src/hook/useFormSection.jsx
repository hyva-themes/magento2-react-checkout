import _get from 'lodash.get';
import { useFormikContext } from 'formik';
import { useContext, useEffect, useMemo, useState } from 'react';
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
  const [isMeValid, setIsMeValid] = useState(false);
  const { values, dirty, isValid } = useFormikContext();
  const {
    registerFormSection,
    setActiveFormSection,
    activeFormSection,
  } = useContext(CheckoutFormContext);

  /**
   * This handler is used to know whether the form section in the context
   * is actually focussed at the moment. This method will be used by the
   * form fields. If anyone of the form field is focused, then this form
   * section will be set as the active form.
   */
  const setFormFocused = isFocused => {
    setActiveFormSection(isFocused && id);
  };

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
  }, []);

  /**
   * When the form in context stays as the active form section, then when the
   * form section fields get filled, we are tracking down the form section
   * becomes valid at any time.
   * We are keeping this data in state so that we can submit the form section
   * as soon as the form section at focus is getting changed.
   */
  useEffect(() => {
    if (activeFormSection === id) {
      setIsMeValid(dirty && isValid);
    }
  }, [activeFormSection, dirty, isValid]);

  /**
   * Calling the submit handler from the form section in the context if and only
   * if the form section data is valid;
   */
  useEffect(() => {
    if (isMeValid) {
      submitHandler();
    }
  }, [activeFormSection]);

  /**
   * Preparing the form context value.
   * It contains some useful methods which will deal with form section in the
   * context. Else, these information needs to be derived from the global
   * checkout-form-formik context. We are making that job easy here
   */
  const context = useMemo(
    () => ({
      fields: prepareFields(initialValues, id),
      values: () => _get(values, id, {}),
      setFormFocused,
    }),
    []
  );

  return context;
}

export default useFormSection;
