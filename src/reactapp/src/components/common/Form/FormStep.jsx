import React from 'react';
import { node, string } from 'prop-types';

export default function FormStep({ children, className }) {
  return <div className={className}>{children}</div>;
}

FormStep.propTypes = {
  children: node.isRequired,
  className: string,
};

FormStep.defaultProps = {
  className: '',
};
