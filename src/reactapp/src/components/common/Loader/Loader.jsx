import React from 'react';
import { number } from 'prop-types';

import Card from '../Card';

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
          <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
          <div className="flex-1 py-1 space-y-4">
            <div className="w-3/4 h-4 bg-gray-400 rounded"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-400 rounded"></div>
              <div className="w-5/6 h-4 bg-gray-400 rounded"></div>
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
    <div className="z-20 backdrop flex-col items-center justify-center">
      <div
        className="animate-spin rounded-full border-4 border-t-4 border-white h-12 w-12 mb-4"
        style={{ borderTopColor: '#3498db' }}
      ></div>
      <h2 className="text-center text-white text-xl font-semibold">
        Loading...
      </h2>
    </div>
  );
}

export default Loader;
