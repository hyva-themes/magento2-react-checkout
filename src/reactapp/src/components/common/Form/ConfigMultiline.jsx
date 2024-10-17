import React from 'react';
import { get as _get } from 'lodash-es';
import { ErrorMessage, Field } from 'formik';

import { _numberRange, _replace, classNames } from '../../../utils';
import { fieldConfigShape, formikDataShape } from '../../../utils/propTypes';

function ConfigMultiline({ formikData, config, ...rest }) {
  const {
    setFieldValue,
    formSectionId,
    setFieldTouched,
    formSectionErrors,
    formSectionValues,
    formSectionTouched,
  } = formikData;
  const {
    id,
    name,
    label,
    classes,
    helpText,
    isRequired,
    placeholder,
    fieldLength,
    wrapperClasses,
    multilineCount,
  } = config;
  const inputId = id || name;
  const relativeFieldName = _replace(name, formSectionId).replace('.', '');
  const hasFieldError = !!_get(formSectionErrors, relativeFieldName);
  const value = _get(formSectionValues, relativeFieldName) || [];
  const hasFieldTouched = !!_get(formSectionTouched, relativeFieldName);
  const hasError = hasFieldError && hasFieldTouched;

  return (
    <div className={classNames('mt-2 form-control', wrapperClasses)}>
      <div className="flex items-center justify-between">
        {label && (
          <label htmlFor={inputId} className="md:text-sm">
            {label}
            {isRequired && <sup> *</sup>}
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
      <div className="w-full space-y-2">
        {_numberRange(multilineCount).map((lineNumber) => {
          const fieldName = `${name}[${lineNumber}]`;
          const fieldId = `${inputId}-${lineNumber}`;
          const fieldPlaceholder = _get(placeholder, lineNumber) || '';
          const fieldValue = value[lineNumber] || '';

          return (
            <Field
              id={fieldId}
              key={fieldId}
              name={fieldName}
              value={fieldValue}
              placeholder={fieldPlaceholder}
              onChange={(event) => {
                const newValue = event.target.value;
                setFieldTouched(fieldName);
                setFieldValue(fieldName, newValue);
              }}
              className={classNames(
                'form-input max-w-md',
                hasError ? 'border-dashed border-red-500' : '',
                fieldLength === '100' ? 'w-full' : '',
                fieldLength === '25' ? 'w-1/4' : '',
                fieldLength === '50' ? 'w-1/2' : '',
                fieldLength === '75' ? 'w-3/4' : '',
                classes
              )}
              {...rest}
            />
          );
        })}
      </div>

      <div className="text-xs">{helpText}</div>
    </div>
  );
}

ConfigMultiline.propTypes = {
  config: fieldConfigShape.isRequired,
  formikData: formikDataShape.isRequired,
};

export default ConfigMultiline;
