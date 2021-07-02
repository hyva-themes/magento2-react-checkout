import React, { useMemo } from 'react';

import PaymentMethodMemorized from './PaymentMethodMemorized';
import { PAYMENT_METHOD_FORM } from '../../config';
import useFormikMemorizer from '../../hook/useFormikMemorizer';

/**
 * Entry point of payment method Form Section
 *
 * We are preparing any data related to formik state here and memorizing it.
 * After that, these info will be fed to all other child components.
 *
 * So child components DO NOT access formik states using `useFormikContext` hook
 * inside them unless it is totally unavoidable.
 *
 * Using useFormikContext hook render the component almost always. So use the
 * memorized data here inside the child components.
 */
function PaymentMethod() {
  const formikSectionData = useFormikMemorizer(PAYMENT_METHOD_FORM);

  const paymentFormikData = useMemo(
    () => ({
      ...formikSectionData,
      paymentValues: formikSectionData.formSectionValues,
    }),
    [formikSectionData]
  );

  return <PaymentMethodMemorized formikData={paymentFormikData} />;
}

export default PaymentMethod;
