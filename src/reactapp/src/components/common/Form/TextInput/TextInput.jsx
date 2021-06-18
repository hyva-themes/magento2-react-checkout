/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import _get from 'lodash.get';
import { ErrorMessage, Field, useField } from 'formik';
import { bool, string } from 'prop-types';

function TextInput({
  id,
  name,
  label,
  helpText,
  required,
  placeholder,
  className,
  width,
  type,
  ...rest
}) {
  const inputId = id || name;
  const [, meta] = useField(name) || [];
  const hasFieldError = !!_get(meta, 'error', false);
  const hasFieldTouched = !!_get(meta, 'touched', false);
  const hasError = hasFieldError && hasFieldTouched;

  return (
    <div className="mt-2 form-control">
      <div className="flex items-center justify-between">
        <label htmlFor={inputId} className="md:text-sm">
          {label}
          {required && <sup> *</sup>}
        </label>
        <div
          className={`feedback text-sm md:text-xs text-right ${
            hasError ? 'text-red-500' : 'text-green-500'
          }`}
        >
          <ErrorMessage name={name}>
            {msg => msg.replace('%1', label)}
          </ErrorMessage>
        </div>
      </div>
      <Field
        {...rest}
        type={type || 'text'}
        name={name}
        id={inputId}
        placeholder={placeholder}
        className={`form-input ${
          hasError ? 'border-dashed border-red-500' : ''
        } ${className} ${width || 'w-full'}`}
      />
      <div className="text-xs">{helpText}</div>
    </div>
  );
}

TextInput.propTypes = {
  id: string,
  name: string.isRequired,
  label: string,
  helpText: string,
  placeholder: string,
  required: bool,
  width: string,
  className: string,
  type: string,
};

TextInput.defaultProps = {
  id: '',
  label: '',
  width: '',
  helpText: '',
  required: false,
  placeholder: '',
  className: '',
  type: 'text',
};

export default TextInput;
