import React from 'react';
import _get from 'lodash/get';
import { bool, string } from 'prop-types';
import { ErrorMessage, Field } from 'formik';

import { _replace } from '../../../utils';
import { formikDataShape } from '../../../utils/propTypes';

function TextInput({
  id,
  name,
  type,
  label,
  width,
  helpText,
  required,
  isHidden,
  className,
  formikData,
  placeholder,
  ...rest
}) {
  const {
    setFieldValue,
    formSectionId,
    setFieldTouched,
    formSectionErrors,
    formSectionValues,
    formSectionTouched,
  } = formikData;
  const inputId = id || name;
  const relativeFieldName = _replace(name, formSectionId).replace('.', '');
  const hasFieldError = !!_get(formSectionErrors, relativeFieldName);
  const value = _get(formSectionValues, relativeFieldName, '') || '';
  const hasFieldTouched = !!_get(formSectionTouched, relativeFieldName);
  const hasError = hasFieldError && hasFieldTouched;

  return (
    <div className={`mt-2 form-control ${isHidden ? 'hidden' : ''}`}>
      <div className="flex items-center justify-between">
        {label && (
          <label htmlFor={inputId} className="md:text-sm">
            {label}
            {required && <sup> *</sup>}
          </label>
        )}
        <div
          className={`feedback text-sm md:text-xs text-right ${
            hasError ? 'text-red-500' : 'text-green-500'
          }`}
        >
          <ErrorMessage name={name}>
            {(msg) => msg.replace('%1', label)}
          </ErrorMessage>
        </div>
      </div>
      <Field
        name={name}
        id={inputId}
        value={value}
        type={type || 'text'}
        placeholder={placeholder}
        onChange={(event) => {
          const newValue = event.target.value;
          setFieldTouched(name, newValue);
          setFieldValue(name, newValue);
        }}
        className={`form-input max-w-md ${
          hasError ? 'border-dashed border-red-500' : ''
        } ${className} ${width || 'w-full'}`}
        {...rest}
      />
      <div className="text-xs">{helpText}</div>
    </div>
  );
}

TextInput.propTypes = {
  id: string,
  type: string,
  label: string,
  width: string,
  required: bool,
  isHidden: bool,
  helpText: string,
  className: string,
  placeholder: string,
  name: string.isRequired,
  formikData: formikDataShape.isRequired,
};

TextInput.defaultProps = {
  id: '',
  label: '',
  width: '',
  helpText: '',
  type: 'text',
  className: '',
  required: false,
  placeholder: '',
  isHidden: false,
};

export default TextInput;
