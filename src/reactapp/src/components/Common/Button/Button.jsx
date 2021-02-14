/* eslint-disable react/button-has-type */
import React from 'react';
import { bool, func, node, oneOf, string } from 'prop-types';

function Button({ children, click, variant, disable, big, btnType }) {
  return (
    <div className="py-2">
      <button
        className={`px-2 py-1 text-white uppercase max-w-max ${variant ===
          'success' && 'bg-green-600'} ${variant === 'warning' &&
          'bg-yellow-500'} ${disable && 'opacity-50'} ${
          big
            ? 'h-12 font-bold text-lg shadow-md hover:shadow-lg'
            : 'text-sm shadow-sm hover:shadow-md'
        }`}
        type={btnType}
        onClick={click}
        disabled={disable}
      >
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  children: node.isRequired,
  click: func,
  disable: bool,
  big: bool,
  variant: oneOf(['success', 'warning']),
  btnType: string,
};

Button.defaultProps = {
  disable: false,
  variant: '',
  big: false,
  click: () => {},
  btnType: 'button',
};

export default Button;
