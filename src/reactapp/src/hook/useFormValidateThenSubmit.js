import { object as YupObject } from 'yup';

import {
  focusOnFormErrorElement,
  prepareFormSectionErrorMessage,
} from '../utils/form';
import { _isObjEmpty } from '../utils';
import useAppContext from './useAppContext';

export default function useFormValidateThenSubmit({
  formId,
  formikData,
  submitHandler,
  validationSchema,
}) {
  const { setErrorMessage } = useAppContext();
  const {
    setFieldTouched,
    formSectionErrors,
    formSectionValues,
    isFormSectionTouched,
  } = formikData || {};

  return async (...args) => {
    if (isFormSectionTouched && !_isObjEmpty(formSectionErrors)) {
      setErrorMessage(
        prepareFormSectionErrorMessage(
          formId,
          formSectionErrors,
          setFieldTouched
        )
      );
      focusOnFormErrorElement(formId, formSectionErrors);
    }

    const validationRules = YupObject().shape(validationSchema);

    try {
      const isValid = await validationRules.validate(formSectionValues);

      if (isValid) {
        await submitHandler(...args);
      }
    } catch (error) {
      console.error(error);
    }
  };
}
