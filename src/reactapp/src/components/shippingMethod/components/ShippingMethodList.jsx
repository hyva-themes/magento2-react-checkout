import React from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import RadioInput from '../../common/Form/RadioInput';
import useShippingMethodFormContext from '../hooks/useShippingMethodFormContext';
import useShippingMethodCartContext from '../hooks/useShippingMethodCartContext';
import { _objToArray } from '../../../utils';
import { SHIPPING_METHOD } from '../../../config';
import { __ } from '../../../i18n';

function ShippingMethodList() {
  const { values, setFieldValue, setFieldTouched } = useFormikContext();
  const { methodsAvailable, methodList } = useShippingMethodCartContext();
  const { fields, submitHandler } = useShippingMethodFormContext();
  const selectedMethod = _get(values, SHIPPING_METHOD, {});
  const selectedMethodId = `${selectedMethod.carrierCode}__${selectedMethod.methodCode}`;

  const handleShippingMethodSelection = async event => {
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
        {_objToArray(methodList).map(method => {
          const { id: methodId, carrierTitle, methodTitle, price } = method;
          const methodName = `${carrierTitle} (${methodTitle}): `;

          return (
            <li key={methodId} className="flex">
              <RadioInput
                label={methodName}
                name="shippingMethod"
                value={methodId}
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
