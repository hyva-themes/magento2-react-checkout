/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { useField } from 'formik';
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
  const [field] = useField(name) || [];

  return (
    <div className="mt-2 form-control">
      <input
        className="form-radio"
        type="radio"
        id={inputId}
        name={name}
        checked={checked}
        aria-describedby={`${inputId}-feedback ${inputId}-help`}
        {...field}
        {...rest}
      />
      <label htmlFor={inputId} className="pl-2">
        {label}
      </label>

      <div className="text-xs" id={`${inputId}-help`} tabIndex="-1">
        {helpText}
      </div>
    </div>
  );
}

RadioInput.propTypes = {
  id: string,
  name: string.isRequired,
  label: string,
  helpText: string,
  placeholder: string,
  required: bool,
  checked: bool,
};

RadioInput.defaultProps = {
  id: '',
  helpText: '',
  required: false,
  placeholder: '',
  checked: false,
  label: '',
};

export default RadioInput;
