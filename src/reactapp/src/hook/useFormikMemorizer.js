import { useMemo } from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

export default function useFormikMemorizer(formSectionId) {
  const {
    dirty,
    values,
    errors,
    touched,
    setFieldValue,
    setFieldTouched,
  } = useFormikContext();

  const formSectionErrors = _get(errors, formSectionId);
  const formSectionValues = _get(values, formSectionId);
  const formSectionTouched = _get(touched, formSectionId);
  const isFormSectionTouched = !!formSectionTouched;
  const isFormSectionValid =
    dirty && isFormSectionTouched && !formSectionErrors;

  console.log({ errors })

  const sectionFormikData = useMemo(
    () => ({
      setFieldValue,
      setFieldTouched,
      formSectionErrors,
      formSectionValues,
      isFormSectionValid,
      formSectionTouched,
      isFormSectionTouched,
    }),
    [
      setFieldValue,
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
