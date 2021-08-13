import React from 'react';

import RadioInput from '../../common/Form/RadioInput';
import useShippingMethodFormContext from '../hooks/useShippingMethodFormContext';
import useShippingMethodCartContext from '../hooks/useShippingMethodCartContext';
import { _objToArray } from '../../../utils';
import { SHIPPING_METHOD } from '../../../config';
import { __ } from '../../../i18n';

function ShippingMethodList() {
  const {
    fields,
    submitHandler,
    setFieldValue,
    selectedMethod,
    setFieldTouched,
  } = useShippingMethodFormContext();
  const { methodsAvailable, methodList } = useShippingMethodCartContext();
  const { carrierCode: methodCarrierCode, methodCode: methodMethodCode } =
    selectedMethod || {};
  const selectedMethodId = `${methodCarrierCode}__${methodMethodCode}`;

  const handleShippingMethodSelection = async (event) => {
    const methodSelected = methodList[event.target.value];
    const { carrierCode, methodCode, id: methodId } = methodSelected;

    if (methodId === selectedMethodId) {
      return;
    }

    setFieldValue(SHIPPING_METHOD, { carrierCode, methodCode });
    setFieldTouched(fields.carrierCode, true);
    setFieldTouched(fields.methodCode, true);
    await submitHandler({ carrierCode, methodCode });
  };

  if (!methodsAvailable) {
    return <></>;
  }

  return (
    <div className="py-4">
      <ul>
        {_objToArray(methodList).map((method) => {
          const { id: methodId, carrierTitle, methodTitle, price } = method;
          const methodName = `${carrierTitle} (${methodTitle}): `;

          return (
            <li key={methodId} className="flex">
              <RadioInput
                value={methodId}
                label={methodName}
                name="shippingMethod"
                checked={selectedMethodId === methodId}
                onChange={handleShippingMethodSelection}
              />
              <span className="pt-2 pl-3 font-semibold">
                {__('Price: {}', price)}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ShippingMethodList;
