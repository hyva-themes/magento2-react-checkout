import { func, node, oneOf } from 'prop-types';
import React from 'react';

function Button({ children, click, variant }) {
  return (
    <div className="py-2">
      <button
        className={`px-2 py-1 text-white uppercase text-sm shadow-sm max-w-max hover:shadow-md ${variant ===
          'success' && 'bg-green-600'} ${variant === 'warning' &&
          'bg-yellow-500'}`}
        type="button"
        onClick={click}
      >
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  children: node.isRequired,
  click: func,
  variant: oneOf(['success', 'warning']),
};

Button.defaultProps = {
  variant: '',
  click: () => {},
};

export default Button;
