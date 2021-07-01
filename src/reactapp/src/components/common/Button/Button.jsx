/* eslint-disable react/button-has-type */
import React from 'react';
import { bool, func, node, oneOf, string } from 'prop-types';

function Button({ children, click, variant, disable, size }) {
  return (
    <button
      className={`btn btn-${variant || 'primary'}  btn-size-${size ||
        'md'} ${disable && 'opacity-50 pointer-events-none'}`}
      type="button"
      onClick={click}
      disabled={disable}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  click: func,
  size: string,
  disable: bool,
  children: node.isRequired,
  variant: oneOf(['success', 'warning', 'primary', 'secondary']),
};

Button.defaultProps = {
  size: 'md',
  variant: '',
  disable: false,
  click: () => {},
};

export default Button;
