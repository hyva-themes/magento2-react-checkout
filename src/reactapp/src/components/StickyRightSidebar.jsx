import React from 'react';
import useAppContext from '../hook/useAppContext';

function StickyRightSidebar({ children }) {
  const [{ message }] = useAppContext();

  return (
    <div
      className="sticky self-start w-full lg:w-2/5"
      style={{ top: message ? '100px' : '0px' }}
    >
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
}

export default StickyRightSidebar;
