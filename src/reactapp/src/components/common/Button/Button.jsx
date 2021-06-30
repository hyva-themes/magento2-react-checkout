/* eslint-disable react/button-has-type */
import React from 'react';
import { bool, func, node, oneOf } from 'prop-types';

function Button({ children, click, variant, disable, size }) {
  return (
      <button
        className={`btn btn-${variant || 'primary'}  btn-size-${size || 'md'} ${
          disable && 'opacity-50 pointer-events-none'
        }`}
        type="button"
        onClick={click}
        disabled={disable}
      >
        {children}
      </button>
  );
}

Button.propTypes = {
  children: node.isRequired,
  click: func,
  disable: bool,
  big: bool,
  variant: oneOf(['success', 'warning']),
};

Button.defaultProps = {
  disable: false,
  variant: '',
  big: false,
  click: () => {},
};

export default Button;
