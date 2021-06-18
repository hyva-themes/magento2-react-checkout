import React, { useEffect } from 'react';
import _get from 'lodash.get';

import useAppContext from '../../../hook/useAppContext';
import { _emptyFunc } from '../../../utils';

function Message() {
  const [{ message }, { setMessage }] = useAppContext();
  const msgType = _get(message, 'type');
  const msg = _get(message, 'message');

  // auto-disappear message after some time.
  useEffect(() => {
    if (!message) {
      return _emptyFunc();
    }

    const timer = setTimeout(() => {
      setMessage(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [message, setMessage]);

  if (!message) {
    return <></>;
  }

  return (
    <div className="mx-8 my-4">
      <div
        className={`relative px-6 py-2 my-4 text-white border-0 rounded ${
          msgType === 'error' ? 'bg-red-400' : ''
        } ${msgType === 'success' ? 'bg-green-500' : ''}`}
      >
        <span className="inline-block mr-8 align-middle">{msg}</span>
        <button
          type="button"
          className="absolute top-0 right-0 mt-2 mr-6 text-2xl font-semibold leading-none bg-transparent outline-none focus:outline-none"
          onClick={() => setMessage(false)}
        >
          <span>×</span>
        </button>
      </div>
    </div>
  );
}

export default Message;
