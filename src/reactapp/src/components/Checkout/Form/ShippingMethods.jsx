import React, { useCallback } from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import useCartContext from '../../../hook/useCartContext';
import useShippingMethodFormContext from '../../../hook/useShippingMethodFormContext';
import Button from '../../Common/Button';
import Card from '../../Common/Card';
import RadioInput from '../../Common/Form/RadioInput';
import Header from '../../Common/Header';

function ShippingMethods() {
  const { selectedShippingMethods } = useCartContext();
  const { fields } = useShippingMethodFormContext();
  const { setFieldValue, setFieldTouched, touched } = useFormikContext();
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
    [selectedShippingMethods, setFieldValue]
  );

  return (
    <Card bg="dark">
      <Header>Shipping Methods</Header>
      <div className="py-4">
        <ul>
          {selectedShippingMethods.map((method, index) => {
            const shippingMethodKey = `${method.carrierCode}_${method.methodCode}`;
            const shippingMethodName = `${method.carrierTitle} (${method.methodTitle}): `;

            return (
              <li key={shippingMethodKey} className="flex">
                <RadioInput
                  label={shippingMethodName}
                  name="shippingMethod"
                  value={index}
                  onChange={handleShippingMethodSelection}
                />
                <span className="pt-2 pl-3 font-semibold">{`Price: ${method.price}`}</span>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-center mt-2">
          <Button click={() => {}} variant="success" disable={buttonDisable}>
            UPDATE
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default ShippingMethods;
