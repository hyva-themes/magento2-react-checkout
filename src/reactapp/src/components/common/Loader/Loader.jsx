import React from 'react';
import { number } from 'prop-types';

import Card from '../Card';
import { __ } from '../../../i18n';

function PulseBox({ repeat }) {
  const repeatArr = [];
  const repeatTimes = repeat === 'fill-height' ? 6 : repeat;

  for (let i = 1; i <= repeatTimes; i += 1) {
    repeatArr.push(i);
  }

  return (
    <Card classes="overflow-hidden">
      {repeatArr.map((num) => (
        <div key={num} className="flex space-x-4 animate-pulse">
          <div className="w-12 h-12 bg-slate-400 rounded-full" />
          <div className="flex-1 py-1 space-y-4">
            <div className="w-3/4 h-4 bg-slate-400 rounded" />
            <div className="space-y-2">
              <div className="h-4 bg-slate-400 rounded" />
              <div className="w-5/6 h-4 bg-slate-400 rounded" />
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
}

PulseBox.propTypes = {
  repeat: number.isRequired,
};

function Loader() {
  return (
    <div className="z-20 flex-col items-center justify-center backdrop">
      <div
        className="w-12 h-12 mb-4 border-4 border-t-4 border-white rounded-full animate-spin"
        style={{ borderTopColor: '#3498db' }}
      />
      <h2 className="text-xl font-semibold text-center text-white">
        {__('Loading...')}
      </h2>
    </div>
  );
}

export default Loader;
