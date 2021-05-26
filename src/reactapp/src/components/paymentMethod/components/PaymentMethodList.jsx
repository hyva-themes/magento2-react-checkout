import React from 'react';
import { object } from 'prop-types';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import RadioInput from '../../common/Form/RadioInput';
import usePaymentMethodCartContext from '../hooks/usePaymentMethodCartContext';
import usePaymentMethodFormContext from '../hooks/usePaymentMethodFormContext';
import { _objToArray } from '../../../utils';
import { PAYMENT_METHOD_FORM } from '../../../config';

function PaymentMethodList({ methodRenderers }) {
  const { fields } = usePaymentMethodFormContext();
  const { values, setFieldValue, setFieldTouched } = useFormikContext();
  const { methodList } = usePaymentMethodCartContext();
  const selectedPaymentMethod = _get(values, PAYMENT_METHOD_FORM);

  const handlePaymentMethodSelection = event => {
    const methodSelected = _get(methodList, event.target.value);

    if (methodSelected) {
      setFieldValue(fields.code, methodSelected.code);
      setFieldTouched(fields.code, true);
    }
  };

  return (
    <div className="py-4">
      <ul>
        {_objToArray(methodList).map(method => {
          const MethodRenderer = methodRenderers[method.code];
          return (
            <li key={method.code} className="flex">
              {MethodRenderer ? (
                <MethodRenderer
                  method={method}
                  selected={selectedPaymentMethod}
                  actions={{ change: handlePaymentMethodSelection }}
                />
              ) : (
                <RadioInput
                  label={method.title}
                  name="paymentMethod"
                  value={method.code}
                  onChange={handlePaymentMethodSelection}
                  checked={method.code === selectedPaymentMethod.code}
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

PaymentMethodList.propTypes = {
  methodRenderers: object,
};

PaymentMethodList.defaultProps = {
  methodRenderers: {},
};

export default PaymentMethodList;
