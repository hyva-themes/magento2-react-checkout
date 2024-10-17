import {
  bool,
  func,
  shape,
  array,
  object,
  string,
  number,
  oneOfType,
} from 'prop-types';

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

export const fieldConfigShape = shape({
  id: string,
  code: string,
  length: string,
  classes: string,
  isRequired: bool,
  helpText: string,
  wrapperClasses: string,
  multilineCount: number,
  label: oneOfType([string, array]),
  placeholder: oneOfType([string, array]),
});
