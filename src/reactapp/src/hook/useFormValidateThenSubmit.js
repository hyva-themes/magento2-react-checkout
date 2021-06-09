import _get from 'lodash.get';
import { object as YupObject } from 'yup';
import { useFormikContext } from 'formik';

import { _isObjEmpty, _keys } from '../utils';
import useAppContext from './useAppContext';

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
      const errorMessage = _keys(formSectionErrors)
        .map(field => formSectionErrors[field].replace('%1', field))
        .join('; ');
      setErrorMessage(errorMessage);

      const firstErrorKey = _get(_keys(formSectionErrors), '0');
      const firstErrorElementId = `${formId}.${firstErrorKey}`;
      document.getElementById(firstErrorElementId).focus();

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
