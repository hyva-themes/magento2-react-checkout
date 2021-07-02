import { bool, func, object, shape, string } from 'prop-types';

export const formikDataShape = shape({
  setFieldValue: func,
  formSectionId: string,
  setFieldTouched: func,
  isFormSectionValid: bool,
  formSectionErrors: object,
  formSectionValues: object,
  formSectionTouched: object,
  isFormSectionTouched: bool,
});
