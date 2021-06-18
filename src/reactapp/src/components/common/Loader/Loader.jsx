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
    <Card bg="dark" classes="overflow-hidden">
      {repeatArr.map(num => (
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
    <div className="flex flex-col max-h-screen mx-2 my-6 overflow-hidden md:mx-12 md:flex-row">
      <div className="md:w-1/4">
        <div className="mr-1 space-y-2">
          <PulseBox repeat={1} />
          <PulseBox repeat={1} />
          <PulseBox repeat={6} />
        </div>
      </div>

      <div className="md:w-2/4">
        <div className="mx-1 space-y-2">
          <PulseBox repeat={2} />
          <PulseBox repeat={2} />
          <PulseBox repeat={4} />
        </div>
      </div>

      <div className="flex-grow">
        <div className="ml-1 space-y-2">
          <PulseBox repeat={4} />
          <PulseBox repeat={4} />
        </div>
      </div>
    </div>
  );
}

export default Loader;
