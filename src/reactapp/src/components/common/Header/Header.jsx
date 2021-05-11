/* eslint-disable react/jsx-props-no-spreading */
import { node } from 'prop-types';
import React from 'react';

function Header({ children, extra, ...props }) {
  return (
    <header
      {...props}
      className="flex items-center justify-between cursor-pointer select-none"
      role="button"
      tabIndex={0}
    >
      <span className="text-base font-bold text-indigo">{children}</span>
      {extra}
    </header>
  );
}

Header.propTypes = {
  children: node.isRequired,
  extra: node,
};

Header.defaultProps = {
  extra: <></>,
};

export default Header;
