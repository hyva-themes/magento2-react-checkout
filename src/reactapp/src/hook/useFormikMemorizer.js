import { useMemo } from 'react';
import { get as _get } from 'lodash-es';
import { useFormikContext } from 'formik';

export default function useFormikMemorizer(formSectionId) {
  const {
    dirty,
    values,
    errors,
    touched,
    setFieldValue,
    setFieldError,
    setFieldTouched,
  } = useFormikContext();

  const formSectionErrors = _get(errors, formSectionId);
  const formSectionValues = _get(values, formSectionId);
  const formSectionTouched = _get(touched, formSectionId);
  const isFormSectionTouched = !!formSectionTouched;
  const isFormSectionValid =
    dirty && isFormSectionTouched && !formSectionErrors;

  const sectionFormikData = useMemo(
    () => ({
      setFieldError,
      setFieldValue,
      formSectionId,
      setFieldTouched,
      formSectionErrors,
      formSectionValues,
      isFormSectionValid,
      formSectionTouched,
      isFormSectionTouched,
    }),
    [
      setFieldError,
      setFieldValue,
      formSectionId,
      setFieldTouched,
      formSectionErrors,
      formSectionValues,
      isFormSectionValid,
      formSectionTouched,
      isFormSectionTouched,
    ]
  );

  return sectionFormikData;
}
