/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { Field } from 'formik';
import { bool, string } from 'prop-types';

function RadioInput({
  id,
  name,
  label,
  checked,
  helpText,
  required,
  placeholder,
  ...rest
}) {
  const inputId = `${id || name}_${rest.value}`;

  return (
    <div className="mt-2 form-control">
      <Field
        name={name}
        type="radio"
        id={inputId}
        checked={checked}
        className="form-radio"
        {...rest}
      />
      {label && (
        <label htmlFor={inputId} className="inline-block pl-2">
          {label}
        </label>
      )}

      <div className="text-xs" id={`${inputId}-help`} tabIndex="-1">
        {helpText}
      </div>
    </div>
  );
}

RadioInput.propTypes = {
  id: string,
  label: string,
  checked: bool,
  required: bool,
  helpText: string,
  placeholder: string,
  name: string.isRequired,
};

RadioInput.defaultProps = {
  id: '',
  label: '',
  helpText: '',
  checked: false,
  required: false,
  placeholder: '',
};

export default RadioInput;
