import React from 'react';

import RadioInput from '../../Common/Form/RadioInput/RadioInput';
import Button from '../../Common/Button';
import { modifyAddrObjListToArrayList } from '../../../utils/address';
import { _toString } from '../../../utils';
import useShippingAddressContext from '../../../hook/form/useShippingAddressContext';
import useShippingAddrCartContext from '../../../hook/cart/useShippingAddrCartContext';

function AddressBox() {
  const { selectedAddressId } = useShippingAddrCartContext();
  const {
    fields,
    addressList,
    setFormToEditMode,
  } = useShippingAddressContext();

  const customerAddresses = modifyAddrObjListToArrayList(addressList);

  return (
    <div className="mx-2 space-y-3">
      <div className="flex items-center justify-center mt-2">
        <span className="text-sm underline cursor-pointer">
          Create a new address
        </span>
      </div>
      <div className="flex items-center justify-center my-2 italic font-semibold">
        OR
      </div>
      {customerAddresses.map(({ id, address }) => (
        <ul
          key={id}
          className="px-4 pb-4 bg-white border-white rounded-md shadow-sm"
        >
          <li className="flex items-end justify-end">
            <RadioInput
              name={fields.selectedAddress}
              checked={_toString(selectedAddressId) === id}
              value={id}
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
                <Button click={setFormToEditMode} variant="warning">
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

export default AddressBox;
