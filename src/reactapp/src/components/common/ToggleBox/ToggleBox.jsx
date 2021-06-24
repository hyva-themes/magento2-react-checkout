import React, { useState } from 'react';
import { bool, node } from 'prop-types';
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/outline';

import Header from '../Header';

function ToggleBox({ children, title, show }) {
  const [open, setOpen] = useState(show);

  const arrowContent = (
    <div className="flex items-center justify-center">
      {open && <ArrowSmUpIcon className="w-6 h-6" />}
      {!open && <ArrowSmDownIcon className="w-6 h-6" />}
    </div>
  );

  return (
    <div>
      <Header
        extra={arrowContent}
        onClick={() => setOpen(!open)}
        onKeyPress={() => setOpen(!open)}
      >
        {title}
      </Header>
      <div style={{ display: open ? 'block' : 'none' }}>{children}</div>
    </div>
  );
}

ToggleBox.propTypes = {
  show: bool,
  title: node.isRequired,
  children: node.isRequired,
};

ToggleBox.defaultProps = {
  show: false,
};

export default ToggleBox;
