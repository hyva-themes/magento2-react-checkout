import { useMemo } from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

export default function useFormikMemorizer(formSectionId) {
  const { dirty, values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();

  const formSectionErrors = _get(errors, formSectionId);
  const formSectionValues = _get(values, formSectionId);
  const formSectionTouched = _get(touched, formSectionId);
  const isFormSectionTouched = !!formSectionTouched;
  const isFormSectionValid =
    dirty && isFormSectionTouched && !formSectionErrors;

  const sectionFormikData = useMemo(
    () => ({
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
