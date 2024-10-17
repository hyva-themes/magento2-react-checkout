import React from 'react';
import { get as _get } from 'lodash-es';
import { ErrorMessage, Field } from 'formik';

import { __ } from '../../../i18n';
import { _replace, classNames } from '../../../utils';
import { fieldConfigShape, formikDataShape } from '../../../utils/propTypes';

function ConfigSelectInput({ config, formikData, ...rest }) {
  const {
    setFieldValue,
    formSectionId,
    setFieldTouched,
    formSectionErrors,
    formSectionTouched,
  } = formikData;
  const {
    id,
    name,
    label,
    classes,
    options,
    helpText,
    isRequired,
    placeholder,
    fieldLength,
    wrapperClasses,
  } = config;
  const inputId = id || name;
  const relativeFieldName = _replace(name, formSectionId).replace('.', '');
  const hasFieldError = !!_get(formSectionErrors, relativeFieldName);
  const hasFieldTouched = !!_get(formSectionTouched, relativeFieldName);
  const hasError = hasFieldError && hasFieldTouched;

  return (
    <div className={classNames('mt-2 form-control', wrapperClasses)}>
      <div className="flex items-center justify-between">
        <label htmlFor={inputId} className="md:text-sm">
          {label}
          {isRequired && <sup> *</sup>}
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
        className={classNames(
          'p-2 border form-select xs:block max-w-md',
          hasError ? 'border-dashed border-red-500' : '',
          fieldLength === '100' ? 'w-full' : '',
          fieldLength === '25' ? 'w-1/4' : '',
          fieldLength === '50' ? 'w-1/2' : '',
          fieldLength === '75' ? 'w-3/4' : '',
          classes
        )}
        onChange={(event) => {
          const newValue = event.target.value;
          setFieldTouched(name);
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

ConfigSelectInput.propTypes = {
  config: fieldConfigShape.isRequired,
  formikData: formikDataShape.isRequired,
};
export default ConfigSelectInput;
