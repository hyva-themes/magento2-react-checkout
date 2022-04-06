import React, { useMemo } from 'react';
import { Form } from 'formik';
import { node } from 'prop-types';
import { string as YupString } from 'yup';

import { COUPON_CODE_FORM } from '../../../config';
import { CouponCodeFormikContext } from '../context';
import useFormSection from '../../../hook/useFormSection';
import { formikDataShape } from '../../../utils/propTypes';

const initialValues = {
  couponCode: '',
};

const validationSchema = {
  code: YupString().nullable(),
};

function CouponCodeFormikManager({ children, formikData }) {
  const formSubmit = () => {};

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
