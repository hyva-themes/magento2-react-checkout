import { bool, func, node, oneOf } from 'prop-types';
import React from 'react';

function Button({ children, click, variant, disable, big }) {
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
        type="button"
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
};

Button.defaultProps = {
  disable: false,
  variant: '',
  big: false,
  click: () => {},
};

export default Button;
