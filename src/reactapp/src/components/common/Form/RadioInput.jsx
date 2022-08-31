import React from 'react';
import { Field } from 'formik';
import { bool, node, string } from 'prop-types';

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
      <div className="flex items-center">
        <Field
          name={name}
          type="radio"
          id={inputId}
          checked={checked}
          className="form-radio"
          {...rest}
        />
        {label && !React.isValidElement(label) ? (
          <label htmlFor={inputId} className="inline-block pl-2 cursor-pointer">
            {label}
          </label>
        ) : (
          label
        )}
      </div>

      <div className="text-xs" id={`${inputId}-help`} tabIndex="-1">
        {helpText}
      </div>
    </div>
  );
}

RadioInput.propTypes = {
  id: string,
  label: node,
  checked: bool,
  required: bool,
  helpText: node,
  placeholder: node,
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
