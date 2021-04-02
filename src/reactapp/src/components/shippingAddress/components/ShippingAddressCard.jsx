import React from 'react';

import Button from '../../Common/Button';
import RadioInput from '../../Common/Form/RadioInput/RadioInput';
import useShippingAddressFormikContext from '../hooks/useShippingAddressFormikContext';
import useShippingAddressWrapper from '../hooks/useShippingAddressWrapper';

function ShippingAddressCard({
  address: { id, address },
  isSelected,
  actions,
}) {
  const { fields } = useShippingAddressFormikContext();
  const { setToEditMode } = useShippingAddressWrapper();

  return (
    <ul className="px-4 pb-4 bg-white border-white rounded-md shadow-sm">
      <li className="flex items-end justify-end">
        <RadioInput
          name={fields.selectedAddress}
          checked={isSelected}
          value={id}
          onChange={() => actions.performAddressSwitching(id)}
        />
      </li>

      {address.map(addrAttr => (
        <li key={`${id}_${addrAttr}`} className="text-sm italic">
          {addrAttr}
        </li>
      ))}

      {isSelected && (
        <li>
          <div className="flex items-center justify-center mt-2">
            <Button click={setToEditMode} variant="warning">
              edit
            </Button>
          </div>
        </li>
      )}
    </ul>
  );
}

export default ShippingAddressCard;
