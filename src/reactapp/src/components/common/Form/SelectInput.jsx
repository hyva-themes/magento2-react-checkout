import React from 'react';
import _get from 'lodash.get';
import { ErrorMessage, Field } from 'formik';
import { arrayOf, bool, shape, string } from 'prop-types';

import { __ } from '../../../i18n';
import { _replace } from '../../../utils';
import { formikDataShape } from '../../../utils/propTypes';

function SelectInput({
  id,
  name,
  label,
  options,
  helpText,
  required,
  isHidden,
  formikData,
  placeholder,
  ...rest
}) {
  const {
    setFieldValue,
    formSectionId,
    setFieldTouched,
    formSectionErrors,
    formSectionTouched,
  } = formikData;
  const inputId = id || name;
  const relativeFieldName = _replace(name, formSectionId).replace('.', '');
  const hasFieldError = !!_get(formSectionErrors, relativeFieldName);
  const hasFieldTouched = !!_get(formSectionTouched, relativeFieldName);
  const hasError = hasFieldError && hasFieldTouched;

  return (
    <div className={`mt-2 form-control ${isHidden && 'hidden'}`}>
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
        as="select"
        name={name}
        id={inputId}
        placeholder={placeholder}
        className={`w-full p-2 border form-select xs:block max-w-md ${
          hasError ? 'border-dashed border-red-500' : ''
        }`}
        onChange={(event) => {
          const newValue = event.target.value;
          setFieldTouched(name, newValue);
          setFieldValue(name, newValue);
        }}
        {...rest}
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
  required: bool,
  isHidden: bool,
  helpText: string,
  placeholder: string,
  name: string.isRequired,
  label: string.isRequired,
  formikData: formikDataShape.isRequired,
  options: arrayOf(
    shape({
      value: string,
      options: string,
    })
  ),
};

SelectInput.defaultProps = {
  id: '',
  options: [],
  helpText: '',
  required: false,
  placeholder: '',
  isHidden: false,
};

export default SelectInput;
