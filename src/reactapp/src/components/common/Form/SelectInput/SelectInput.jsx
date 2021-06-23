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
  isHidden,
  ...rest
}) {
  const inputId = id || name;
  const [, meta, helper] = useField(name) || [];
  const hasFieldError = !!_get(meta, 'error', false);
  const hasFieldTouched = !!_get(meta, 'touched', false);
  const hasError = hasFieldError && hasFieldTouched;

  return (
    <div className={`mt-2 form-contro ${isHidden && 'hidden'}`}>
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
            {(msg) => msg.replace('%1', label)}
          </ErrorMessage>
        </div>
      </div>
      <Field
        {...rest}
        as="select"
        name={name}
        id={inputId}
        placeholder={placeholder}
        className={`w-full p-2 border form-select xs:block max-w-md ${
            hasError ? 'border-dashed border-red-500' : ''
        }`}
        onChange={(event) => {
            helper.setTouched(true);
            helper.setValue(event.target.value);
        }}
      >
        <option value="">{__('-- Please Select --')}</option>
        {options.map((option) => (
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
  isHidden: bool,
};

SelectInput.defaultProps = {
  id: '',
  helpText: '',
  required: false,
  placeholder: '',
  options: [],
  isHidden: false,
};

export default SelectInput;
