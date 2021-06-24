import React, { useState } from 'react';
import { bool, node } from 'prop-types';

import Header from '../Header';
import {ArrowSmDownIcon, ArrowSmUpIcon} from "@heroicons/react/outline";

function ToggleBox({ children, title, show, classes }) {
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
  children: node.isRequired,
  title: node.isRequired,
  show: bool,
};

ToggleBox.defaultProps = {
  show: false,
};

export default ToggleBox;
