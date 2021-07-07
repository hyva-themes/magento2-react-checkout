/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { Field } from 'formik';
import { bool, string } from 'prop-types';

function Checkbox({
  id,
  name,
  label,
  helpText,
  required,
  isChecked,
  placeholder,
  ...rest
}) {
  const inputId = id || name;

  return (
    <div className="mt-2 form-control">
      <Field
        {...rest}
        name={name}
        id={inputId}
        type="checkbox"
        checked={isChecked}
        className="form-checkbox"
      />
      <label htmlFor={inputId} className="inline pl-2 cursor-pointer">
        {label}
      </label>

      <div className="text-xs" id={`${inputId}-help`} tabIndex="-1">
        {helpText}
      </div>
    </div>
  );
}

Checkbox.propTypes = {
  id: string,
  required: bool,
  isChecked: bool,
  helpText: string,
  placeholder: string,
  name: string.isRequired,
  label: string.isRequired,
};

Checkbox.defaultProps = {
  id: '',
  helpText: '',
  required: false,
  placeholder: '',
  isChecked: false,
};

export default Checkbox;
