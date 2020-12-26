import { bool, node } from 'prop-types';
import React, { useState } from 'react';
import ArrowDownIcon from '../../Icons/ArrowDown';
import ArrowUpIcon from '../../Icons/ArrowUp';

function ToggleBox({ children, title, show }) {
  const [open, setOpen] = useState(show);

  return (
    <div className="border-t border-b py-4">
      <header
        className="flex justify-between items-center cursor-pointer select-none"
        onClick={() => setOpen(!open)}
        onKeyPress={() => setOpen(!open)}
        role="button"
        tabIndex={0}
      >
        <span className="text-indigo font-thin text-xl">{title}</span>
        <div className="flex items-center justify-center">
          {open && <ArrowUpIcon size={16} class="h-5 w-5" />}
          {!open && <ArrowDownIcon size={16} class="h-5 w-5" />}
        </div>
      </header>
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
