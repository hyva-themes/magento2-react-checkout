/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { bool, node } from 'prop-types';

function Header({ children, extra, small, ...props }) {
  return (
    <header
      {...props}
      role="button"
      className="flex items-center justify-between cursor-pointer select-none"
    >
      <span
        className={`font-bold text-indigo ${small ? 'text-sm' : 'text-base'}`}
      >
        {children}
      </span>
      {extra}
    </header>
  );
}

Header.propTypes = {
  extra: node,
  small: bool,
  children: node.isRequired,
};

Header.defaultProps = {
  small: false,
  extra: <></>,
};

export default Header;
