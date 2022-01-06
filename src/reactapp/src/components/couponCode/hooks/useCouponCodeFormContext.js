import { useContext } from 'react';

import { CouponCodeFormikContext } from '../context';

export default function useCouponCodeFormContext() {
  return useContext(CouponCodeFormikContext);
}
