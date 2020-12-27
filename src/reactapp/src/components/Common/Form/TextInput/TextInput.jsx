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
  ...rest
}) {
  const inputId = id || name;
  const [, meta] = useField(name) || [];
  const hasError = !!_get(meta, 'error', false);
  const hasTouched = !!_get(meta, 'touched', false);

  return (
    <div className="mt-2 form-control">
      <div className="flex items-center justify-between">
        <label htmlFor={inputId} className="md:text-sm">
          {label}
          {required && <sup> *</sup>}
        </label>
        <div
          id={`${inputId}-feedback`}
          aria-live="polite"
          className={`feedback text-sm md:text-xs text-right ${
            hasError ? 'text-red-500' : 'text-green-500'
          }`}
        >
          <ErrorMessage name={name}>
            {msg => msg.replace('%1', label)}
          </ErrorMessage>
          {!hasError && hasTouched && '✓'}
        </div>
      </div>
      <Field
        {...rest}
        name={name}
        id={inputId}
        placeholder={placeholder}
        className="w-full form-input"
        aria-describedby={`${inputId}-feedback ${inputId}-help`}
      />
      <div className="text-xs" id={`${inputId}-help`} tabIndex="-1">
        {helpText}
      </div>
    </div>
  );
}

TextInput.propTypes = {
  id: string,
  name: string.isRequired,
  label: string.isRequired,
  helpText: string,
  placeholder: string,
  required: bool,
};

TextInput.defaultProps = {
  id: '',
  helpText: '',
  required: false,
  placeholder: '',
};

export default TextInput;
