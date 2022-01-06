import React from 'react';
import { Form } from 'formik';
import { node } from 'prop-types';
import { string as YupString } from 'yup';

import { __ } from '../../../i18n';
import { COUPON_CODE_FORM } from '../../../config';
import { CouponCodeFormikContext } from '../context';
import useFormSection from '../../../hook/useFormSection';
import { formikDataShape } from '../../../utils/propTypes';

const initialValues = {
  couponCode: '',
};

const requiredMessage = __('Required');

const validationSchema = {
  code: YupString().required(requiredMessage),
};

function CouponCodeFormikManager({ children, formikData }) {
  const formSubmit = () => {};

  const context = useFormSection({
    formikData,
    initialValues,
    validationSchema,
    id: COUPON_CODE_FORM,
    submitHandler: formSubmit,
  });

  return (
    <CouponCodeFormikContext.Provider
      value={{ ...context, ...formikData, formikData }}
    >
      <Form id={COUPON_CODE_FORM}>{children}</Form>
    </CouponCodeFormikContext.Provider>
  );
}

CouponCodeFormikManager.propTypes = {
  children: node.isRequired,
  formikData: formikDataShape.isRequired,
};

export default CouponCodeFormikManager;
