/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { TruckIcon } from '@heroicons/react/solid';
import { arrayOf, func, object, shape, string } from 'prop-types';

import { __ } from '../../../i18n';
import Card from '../../common/Card';
import RadioInput from '../../common/Form/RadioInput';
import LocalStorage from '../../../utils/localStorage';
import useAppContext from '../../../hook/useAppContext';

function AddressOptions({
  title,
  options,
  actions,
  inputName,
  selectedOption,
}) {
  const [addressOptions, setAddressOptions] = useState([]);
  const [{ customerAddressList }] = useAppContext();

  /**
   * Removes a local storage address
   *
   * Since we are removing a local storage entry, it is important to keep options
   * in a state. Otherwise UI wont get updated.
   */
  const handleRecentlyUsedAddressRemoval = addressId => {
    LocalStorage.removeMostRecentlyUsedAddress(addressId);
    setAddressOptions(options.filter(({ id }) => id !== addressId));
  };

  useEffect(() => {
    setAddressOptions(options);
  }, [options]);

  return (
    <Card bg="darker" classes="card-interactive">
      <div className="flex justify-between">
        <h3 className="text-sm font-bold text-black">{title}</h3>
      </div>
      <hr />
      <div className="mt-3 space-y-2">
        {addressOptions.map(({ id, address }) => (
          <Card bg="white" key={id}>
            <div className="flex items-center justify-start">
              <div className="w-8">
                <RadioInput
                  value={id}
                  name={inputName}
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
              <div className="flex items-center justify-between h-full px-3 text-xs italic font-semibold text-secondary-lighter">
                <span>
                  {customerAddressList[id]
                    ? __('FROM ADDRESS BOOK')
                    : __('MOST RECENTLY USED')}
                </span>
                {!customerAddressList[id] && (
                  <button
                    type="button"
                    onClick={() => handleRecentlyUsedAddressRemoval(id)}
                    className="pr-2 italic font-semibold text-black underline hover:text-red-500"
                  >
                    {__('REMOVE')}
                  </button>
                )}
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

AddressOptions.propTypes = {
  title: string,
  inputName: string.isRequired,
  selectedOption: string.isRequired,
  options: arrayOf(shape({ id: string, address: object })),
  actions: shape({ handleShipToOtherOption: func, handleOptionChange: func })
    .isRequired,
};

AddressOptions.defaultProps = {
  title: '',
  options: [],
};

export default AddressOptions;
