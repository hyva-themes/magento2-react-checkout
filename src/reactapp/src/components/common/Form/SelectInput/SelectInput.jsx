/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import _get from 'lodash.get';
import { ErrorMessage, Field, useField } from 'formik';
import { arrayOf, bool, shape, string } from 'prop-types';
import { __ } from '../../../../i18n';

export function SelectInput({
  id,
  name,
  label,
  helpText,
  required,
  placeholder,
  options,
  ...rest
}) {
  const inputId = id || name;
  const [, meta] = useField(name) || [];
  const hasError = !!_get(meta, 'error', false);

  return (
    <div className="mt-2 form-control">
      <div className="flex items-center justify-between">
        <label htmlFor={inputId} className="md:text-sm">
          {label}
          {required && <sup> *</sup>}
        </label>
        <div
          id={`${inputId}-feedback`}
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
        as="select"
        name={name}
        id={inputId}
        placeholder={placeholder}
        className="w-full p-2 border form-select bg-container border-container xs:block"
      >
        <option value="">{__('-- Please Select --')}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <div className="text-xs" id={`${inputId}-help`} tabIndex="-1">
        {helpText}
      </div>
    </div>
  );
}

SelectInput.propTypes = {
  id: string,
  name: string.isRequired,
  label: string.isRequired,
  helpText: string,
  placeholder: string,
  required: bool,
  options: arrayOf(
    shape({
      options: string,
      value: string,
    })
  ),
};

SelectInput.defaultProps = {
  id: '',
  helpText: '',
  required: false,
  placeholder: '',
  options: [],
};

export default SelectInput;
