/* eslint-disable jsx-a11y/label-has-associated-control */
import { TruckIcon } from '@heroicons/react/solid';
import React from 'react';
import useAppContext from '../../../hook/useAppContext';
import { __ } from '../../../i18n';
import Card from '../../common/Card';
import RadioInput from '../../common/Form/RadioInput';

function AddressOptions({ options, inputName, title, selectedOption, actions }) {
  const [{ customerAddressList }] = useAppContext();
  return (
    <Card bg="darker" classes="card-interactive">
      <div className="flex justify-between">
        <h3 className="text-sm font-bold text-black">{title}</h3>
      </div>
      <hr />
      <div className="mt-3 space-y-2">
        {options.map(({ id, address }) => (
          <Card bg="white" key={id}>
            <div className="flex items-center justify-start">
              <div className="w-8">
                <RadioInput
                  name={inputName}
                  value={id}
                  checked={selectedOption === id}
                  onChange={actions.handleOptionChange}
                />
              </div>
              <label
                htmlFor={`${inputName}_${id}`}
                className="inline-block pl-2 text-sm cursor-pointer"
              >
                {address.join(', ')}
              </label>
            </div>
            <div className="h-8 mt-2 -mx-4 -mb-4 bg-container">
              <div className="flex items-center h-full px-3 text-xs italic font-semibold text-secondary-lighter">
                {customerAddressList[id]
                  ? __('FROM ADDRESS BOOK')
                  : __('MOST RECENTLY USED')}
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex items-center justify-end mt-3">
        <button
          type="button"
          disabled={!selectedOption}
          onClick={actions.handleShipToOtherOption}
          className={`flex items-center px-2 py-1 btn-secondary btn ${!selectedOption &&
            'opacity-50 pointer-events-none'}`}
        >
          <TruckIcon className="w-6 h-6 pr-1" />
          <span className="text-xs">{__('Ship Here')}</span>
        </button>
      </div>
    </Card>
  );
}

export default AddressOptions;
