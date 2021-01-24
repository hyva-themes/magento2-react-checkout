import React, { useCallback } from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import useCartContext from '../../../hook/useCartContext';
import useShippingMethodFormContext from '../../../hook/useShippingMethodFormContext';
import Button from '../../Common/Button';
import Card from '../../Common/Card';
import RadioInput from '../../Common/Form/RadioInput';
import Header from '../../Common/Header';
import { SHIPPING_METHOD } from '../../../config';

function ShippingMethods() {
  const { selectedShippingMethods } = useCartContext();
  const { fields, submitHandler } = useShippingMethodFormContext();
  const {
    setFieldValue,
    setFieldTouched,
    touched,
    values,
  } = useFormikContext();
  const shippingMethod = _get(values, SHIPPING_METHOD);
  const buttonDisable =
    !_get(touched, fields.carrierCode) || !_get(touched, fields.methodCode);

  const handleShippingMethodSelection = useCallback(
    event => {
      const methodSelected = _get(selectedShippingMethods, event.target.value);

      if (methodSelected) {
        setFieldValue(fields.carrierCode, methodSelected.carrierCode);
        setFieldValue(fields.methodCode, methodSelected.methodCode);
        setFieldTouched(fields.carrierCode, true);
        setFieldTouched(fields.methodCode, true);
      }
    },
    [selectedShippingMethods, fields, setFieldValue, setFieldTouched]
  );

  return (
    <Card bg="dark">
      <Header>Shipping Methods</Header>
      <div className="py-4">
        <ul>
          {selectedShippingMethods.map(
            (
              { carrierCode, methodCode, carrierTitle, methodTitle, price },
              index
            ) => {
              const shippingMethodKey = `${carrierCode}_${methodCode}`;
              const shippingMethodName = `${carrierTitle} (${methodTitle}): `;
              const shippingCheckedIndex = selectedShippingMethods.findIndex(
                sm =>
                  sm.methodCode === shippingMethod.methodCode &&
                  sm.carrierCode === shippingMethod.carrierCode
              );

              return (
                <li key={shippingMethodKey} className="flex">
                  <RadioInput
                    label={shippingMethodName}
                    name="shippingMethod"
                    value={index}
                    checked={index === shippingCheckedIndex}
                    onChange={handleShippingMethodSelection}
                  />
                  <span className="pt-2 pl-3 font-semibold">{`Price: ${price}`}</span>
                </li>
              );
            }
          )}
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
    </Card>
  );
}

export default ShippingMethods;
