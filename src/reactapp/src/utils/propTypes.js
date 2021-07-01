import { bool, func, object, shape } from 'prop-types';

export const formikDataShape = shape({
  setFieldValue: func,
  setFieldTouched: func,
  formSectionErrors: object,
  formSectionValues: object,
  isFormSectionValid: bool,
  formSectionTouched: object,
  isFormSectionTouched: bool,
});
