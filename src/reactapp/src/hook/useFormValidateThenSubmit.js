import _get from 'lodash.get';
import { object as YupObject } from 'yup';
import { useFormikContext } from 'formik';

import useAppContext from './useAppContext';
import { _isObjEmpty } from '../utils';
import {
  focusOnFormErrorElement,
  prepareFormSectionErrorMessage,
} from '../utils/form';

export default function useFormValidateThenSubmit({
  validationSchema,
  submitHandler,
  formId,
}) {
  const { values, errors, touched } = useFormikContext();
  const [, { setErrorMessage }] = useAppContext();

  return () => {
    const isFormSectionTouched = !!_get(touched, formId);
    const formSectionErrors = _get(errors, formId);

    if (isFormSectionTouched && !_isObjEmpty(formSectionErrors)) {
      setErrorMessage(prepareFormSectionErrorMessage(formId, errors));
      focusOnFormErrorElement(formId, errors);

      return;
    }

    const formSectionValues = _get(values, formId);
    const validationRules = YupObject().shape(validationSchema);
    validationRules.validate(formSectionValues).then(valid => {
      if (valid) {
        submitHandler();
      }
    });
  };
}
