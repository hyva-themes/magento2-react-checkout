import React, { useEffect, useState } from 'react';

import Button from '../../common/Button';
import TextInput from '../../common/Form/TextInput';
import {
  useCouponCodeAppContext,
  useCouponCodeFormContext,
  useCouponCodeCartContext,
} from '../hooks';
import { __ } from '../../../i18n';

function CouponCodeForm() {
  const [codeChecked, setCodeChecked] = useState('');
  const { fields, formikData, setFieldError, setFieldTouched, setFieldValue } =
    useCouponCodeFormContext();
  const { setPageLoader, setSuccessMessage, setErrorMessage } =
    useCouponCodeAppContext();
  const { appliedCoupon, applyCouponCode, removeCouponCode } =
    useCouponCodeCartContext();
  const couponCode = formikData?.formSectionValues?.couponCode;

  const handleApplyCoupon = async (code) => {
    try {
      setPageLoader(true);

      const result = await applyCouponCode(code);

      if (result?.appliedCoupon) {
        setFieldValue(fields.appliedCode, result?.appliedCoupon.toLowerCase());
      }

      setCodeChecked(code);
      setSuccessMessage(
        __('Coupon code: %1 is applied successfully.', couponCode)
      );
    } catch (error) {
      console.error(error);
      setCodeChecked(code);
      setErrorMessage(
        error?.message || __('Coupon code: %1 is invalid.', couponCode)
      );
    } finally {
      setPageLoader(false);
    }
  };

  const handleRemoveCoupon = async () => {
    try {
      setPageLoader(true);
      await removeCouponCode();
      setFieldValue(fields.couponCode, '');
      setFieldValue(fields.appliedCode, '');
      setCodeChecked('');
      setSuccessMessage(
        __('Coupon code: %1 is removed successfully.', couponCode)
      );
    } catch (error) {
      console.error(error);
      setErrorMessage(error?.message);
    } finally {
      setPageLoader(false);
    }
  };

  const submitHandler = async () => {
    if (!couponCode) {
      await setFieldTouched(fields.couponCode);
      await setFieldError(fields.couponCode, __('Required'));
      return;
    }

    if (appliedCoupon) {
      await handleRemoveCoupon();
    } else {
      await handleApplyCoupon(couponCode);
    }
  };

  useEffect(() => {
    if (appliedCoupon) {
      setCodeChecked(appliedCoupon);
    }
  }, [appliedCoupon]);

  return (
    <>
      <div className="py-2">
        <TextInput
          formikData={formikData}
          name={fields.couponCode}
          disabled={!!appliedCoupon}
          placeholder={__('Enter your discount code')}
        />
      </div>

      <div className="mt-2">
        <Button
          click={submitHandler}
          variant={appliedCoupon ? 'danger' : 'primary'}
          disable={appliedCoupon ? false : codeChecked === couponCode}
        >
          {appliedCoupon ? __('Remove Coupon Code') : __('Apply Discount')}
        </Button>
      </div>
    </>
  );
}

export default CouponCodeForm;
