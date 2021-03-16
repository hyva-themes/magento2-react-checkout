/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { arrayOf, bool, func, object, shape, string } from 'prop-types';

import Button from '../../Common/Button';
import RadioInput from '../../Common/Form/RadioInput/RadioInput';
import { _emptyFunc, _toString } from '../../../utils';

function AddressBox({
  isLoggedIn,
  addressList,
  selectedAddressId,
  fields,
  actions,
}) {
  return (
    <div className="mx-2 space-y-3">
      {isLoggedIn && (
        <>
          <div className="flex items-center justify-center mt-2">
            <span
              className="text-sm underline cursor-pointer"
              onClick={() => actions.newAddressClick()}
            >
              Create a new address
            </span>
          </div>
          <div className="flex items-center justify-center my-2 italic font-semibold">
            OR
          </div>
        </>
      )}
      {addressList.map(({ id, address }) => (
        <ul
          key={id}
          className="px-4 pb-4 bg-white border-white rounded-md shadow-sm"
        >
          <li className="flex items-end justify-end">
            <RadioInput
              name={fields.selectedAddress}
              checked={_toString(selectedAddressId) === id}
              value={id}
              onChange={event => actions.addressSwitching(event)}
            />
          </li>

          {address.map(addrAttr => (
            <li key={`${id}_${addrAttr}`} className="text-sm italic">
              {addrAttr}
            </li>
          ))}

          {_toString(selectedAddressId) === id && (
            <li>
              <div className="flex items-center justify-center mt-2">
                <Button
                  click={() => actions.editAddresClick()}
                  variant="warning"
                >
                  edit
                </Button>
              </div>
            </li>
          )}
        </ul>
      ))}
    </div>
  );
}

AddressBox.propTypes = {
  isLoggedIn: bool,
  fields: object,
  selectedAddressId: string,
  addressList: arrayOf(
    shape({
      id: string,
      address: arrayOf(string),
    })
  ),
  actions: shape({
    newAddressClick: func,
    editAddresClick: func,
    addressSwitching: func,
  }),
};

AddressBox.defaultProps = {
  isLoggedIn: false,
  fields: {},
  selectedAddressId: '',
  addressList: [],
  actions: {
    newAddressClick: _emptyFunc(),
    editAddresClick: _emptyFunc(),
    addressSwitching: _emptyFunc(),
  },
};

export default AddressBox;
