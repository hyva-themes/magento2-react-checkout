import React, { useEffect, useMemo, useState } from 'react';
import { Form } from 'formik';
import { node } from 'prop-types';
import { string as YupString } from 'yup';

import { _emptyFunc } from '../../../../../utils';
import { CouponCodeFormikContext } from '../context';
import { COUPON_CODE_FORM } from '../../../../../config';
import { formikDataShape } from '../../../../../utils/propTypes';
import { useCheckoutFormContext, useFormSection } from '../../../../../hooks';

const defaultValues = {
  couponCode: '',
  appliedCode: '',
};

const validationSchema = {
  couponCode: YupString()
    .nullable()
    // Enforcing this validation in order to avoid placing order upon pressing "enter"
    .test('makeFormInvalidIfInputPresent', '', (value, context) => {
      if (!value) {
        return true;
      }
      const appliedCode = (context?.parent.appliedCode || '').toLowerCase();
      return appliedCode === value;
    }),
};

const formSubmit = _emptyFunc();

function CouponCodeFormikManager({ children, formikData }) {
  const [initialValues, setInitialValues] = useState(defaultValues);
  const { aggregatedData } = useCheckoutFormContext();

  // Update initialvalues based on the initial cart data fetch.
  useEffect(() => {
    if (aggregatedData) {
      const { appliedCoupon: appliedCode } = aggregatedData?.cart || {};
      setInitialValues({
        ...defaultValues,
        couponCode: appliedCode,
        appliedCode: (appliedCode || '').toLowerCase(),
      });
    }
  }, [aggregatedData]);

  const formContext = useFormSection({
    formikData,
    initialValues,
    validationSchema,
    id: COUPON_CODE_FORM,
    submitHandler: formSubmit,
  });

  const context = useMemo(
    () => ({ ...formContext, ...formikData, formikData }),
    [formContext, formikData]
  );

  return (
    <CouponCodeFormikContext.Provider value={context}>
      <Form id={COUPON_CODE_FORM}>{children}</Form>
    </CouponCodeFormikContext.Provider>
  );
}

CouponCodeFormikManager.propTypes = {
  children: node.isRequired,
  formikData: formikDataShape.isRequired,
};

export default CouponCodeFormikManager;
