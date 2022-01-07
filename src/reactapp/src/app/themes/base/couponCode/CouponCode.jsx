import React from 'react';

import CouponCodeMemorized from './CouponCodeMemorized';
import { COUPON_CODE_FORM } from '../../../../config';
import { useFormikMemorizer } from '../../../../hooks';

function CouponCode() {
  const couponCodeFormikData = useFormikMemorizer(COUPON_CODE_FORM);

  return <CouponCodeMemorized formikData={couponCodeFormikData} />;
}

export default CouponCode;
