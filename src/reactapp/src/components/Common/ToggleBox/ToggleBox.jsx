import { bool, node } from 'prop-types';
import React, { useState } from 'react';
import ArrowDownIcon from '../../Icons/ArrowDown';
import ArrowUpIcon from '../../Icons/ArrowUp';
import Header from '../Header';

function ToggleBox({ children, title, show }) {
  const [open, setOpen] = useState(show);

  const arrowContent = (
    <div className="flex items-center justify-center">
      {open && <ArrowUpIcon size={16} className="w-4 h-4" />}
      {!open && <ArrowDownIcon size={16} className="w-4 h-4" />}
    </div>
  );

  return (
    <div className="">
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
