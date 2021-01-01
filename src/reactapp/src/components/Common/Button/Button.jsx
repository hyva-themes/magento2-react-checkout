import { bool, func, node, oneOf } from 'prop-types';
import React from 'react';

function Button({ children, click, variant, disable }) {
  return (
    <div className="py-2">
      <button
        className={`px-2 py-1 text-white uppercase text-sm shadow-sm max-w-max hover:shadow-md ${variant ===
          'success' && 'bg-green-600'} ${variant === 'warning' &&
          'bg-yellow-500'} ${disable && 'opacity-50'}`}
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
  variant: oneOf(['success', 'warning']),
};

Button.defaultProps = {
  disable: false,
  variant: '',
  click: () => {},
};

export default Button;
