import React, { useCallback } from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import useCartContext from '../../../hook/useCartContext';
import Button from '../../Common/Button';
import Card from '../../Common/Card';
import RadioInput from '../../Common/Form/RadioInput';
import Header from '../../Common/Header';
import usePaymentMethodFormContext from '../../../hook/usePaymentMethodFormContext';
import { _objToArray } from '../../../utils';

function PaymentMethods() {
  const { paymentMethodList } = useCartContext();
  const { touched, setFieldValue, setFieldTouched } = useFormikContext();
  const { fields } = usePaymentMethodFormContext();
  const buttonDisable = !_get(touched, fields.code);

  const handlePaymentMethodSelection = useCallback(
    event => {
      const methodSelected = _get(paymentMethodList, event.target.value);

      if (methodSelected) {
        setFieldValue(fields.code, methodSelected.code);
        setFieldTouched(fields.code, true);
      }
    },
    [paymentMethodList, fields, setFieldValue, setFieldTouched]
  );

  return (
    <Card bg="dark">
      <Header>Payment Methods</Header>
      <div className="py-4">
        <ul>
          {_objToArray(paymentMethodList).map(method => {
            return (
              <li key={method.code} className="flex">
                <RadioInput
                  label={method.title}
                  name="paymentMethod"
                  value={method.code}
                  onChange={handlePaymentMethodSelection}
                />
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

export default PaymentMethods;
