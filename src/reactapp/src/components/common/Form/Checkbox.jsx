import React from 'react';
import { Field } from 'formik';
import { bool, string } from 'prop-types';

function Checkbox({ id, name, label, helpText, isChecked, ...rest }) {
  const inputId = id || name;

  return (
    <div className="mt-2 form-control">
      <Field
        name={name}
        id={inputId}
        type="checkbox"
        checked={isChecked}
        className="form-checkbox"
        {...rest}
      />
      <label htmlFor={inputId} className="inline pl-2 text-sm cursor-pointer">
        {label}
      </label>

      <div className="text-xs" id={`${inputId}-help`}>
        {helpText}
      </div>
    </div>
  );
}

Checkbox.propTypes = {
  id: string,
  isChecked: bool,
  helpText: string,
  name: string.isRequired,
  label: string.isRequired,
};

Checkbox.defaultProps = {
  id: '',
  helpText: '',
  isChecked: false,
};

export default Checkbox;
