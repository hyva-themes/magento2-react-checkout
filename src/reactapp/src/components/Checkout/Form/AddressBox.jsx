import React from 'react';

import useAppContext from '../../../hook/useAppContext';
import RadioInput from '../../Common/Form/RadioInput/RadioInput';
import { modifyAddrObjListToArrayList } from '../../../utils/address';

function AddressBox() {
  const [{ customerAddressList, defaultShippingAddress }] = useAppContext();
  const customerAddresses = modifyAddrObjListToArrayList(customerAddressList);

  return (
    <div className="mx-2 space-y-3">
      {customerAddresses.map(({ id, address }) => (
        <ul
          key={id}
          className="px-4 pb-4 bg-white border-white rounded-md shadow-sm"
        >
          <li className="flex items-end justify-end">
            <RadioInput name="test" checked={defaultShippingAddress === id} />
          </li>
          {address.map(addrAttr => (
            <li key={`${id}_${addrAttr}`} className="text-sm italic">
              {addrAttr}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default AddressBox;
