import React from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import Button from '../../Common/Button';
import RadioInput from '../../Common/Form/RadioInput';
import useShippingMethodFormContext from '../hooks/useShippingMethodFormContext';
import useShippingMethodCartContext from '../hooks/useShippingMethodCartContext';
import { _objToArray } from '../../../utils';
import { SHIPPING_METHOD } from '../../../config';

function ShippingMethodList() {
  const { fields, submitHandler } = useShippingMethodFormContext();
  const {
    values,
    touched,
    setFieldValue,
    setFieldTouched,
  } = useFormikContext();
  const selectedMethod = _get(values, SHIPPING_METHOD, {});
  const selectedMethodId = `${selectedMethod.carrierCode}__${selectedMethod.methodCode}`;
  const { methodsAvailable, methodList } = useShippingMethodCartContext();
  const buttonDisable =
    !_get(touched, fields.carrierCode) || !_get(touched, fields.methodCode);

  const handleShippingMethodSelection = event => {
    const methodSelected = methodList[event.target.value];
    const { carrierCode, methodCode } = methodSelected;

    if (methodSelected) {
      setFieldValue(SHIPPING_METHOD, { carrierCode, methodCode });
      setFieldTouched(fields.carrierCode, true);
      setFieldTouched(fields.methodCode, true);
    }
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
                {`Price: ${price}`}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center justify-center mt-2">
        <Button
          click={() => submitHandler(values)}
          variant="success"
          disable={buttonDisable}
        >
          UPDATE
        </Button>
      </div>
    </div>
  );
}

export default ShippingMethodList;
