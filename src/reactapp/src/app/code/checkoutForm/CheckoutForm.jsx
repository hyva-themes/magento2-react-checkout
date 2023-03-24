import React, { useEffect, useState } from 'react';

import MedicalHighlightsTheme from '../../themes/medicalHighlights/Index';
import { config } from '../../../config';
import { aggregatedQueryRequest } from '../../../api';
import { useCheckoutFormContext } from '../../../hooks';
import useCheckoutFormAppContext from './hooks/useCheckoutFormAppContext';
import useCheckoutFormCartContext from './hooks/useCheckoutFormCartContext';

function CheckoutForm() {
  const [isRequestSent, setIsRequestSent] = useState(false);
  const { storeAggregatedFormStates } = useCheckoutFormContext();
  const { orderId, storeAggregatedCartStates } = useCheckoutFormCartContext();
  const { appDispatch, setPageLoader, storeAggregatedAppStates } =
    useCheckoutFormAppContext();

  /**
   * Collect App, Cart data when the page loads.
   */
  useEffect(() => {
    if (isRequestSent) {
      return;
    }

    (async () => {
      try {
        setPageLoader(true);
        setIsRequestSent(true);
        const data = await aggregatedQueryRequest(appDispatch);
        storeAggregatedCartStates(data);
        storeAggregatedAppStates(data);
        storeAggregatedFormStates(data);
      } catch (error) {
        console.error(error);
      } finally {
        setPageLoader(false);
      }
    })();
  }, [
    appDispatch,
    isRequestSent,
    setPageLoader,
    storeAggregatedAppStates,
    storeAggregatedCartStates,
    storeAggregatedFormStates,
  ]);

  if (orderId && config.isDevelopmentMode) {
    return (
      <div className="flex flex-col items-center justify-center mx-10 my-10">
        <h1 className="text-2xl font-bold">Order Details</h1>
        <div className="flex flex-col items-center justify-center mt-4 space-y-3">
          <div>Your order is placed.</div>
          <div>{`Order Number: #${orderId}`}</div>
        </div>
      </div>
    );
  }

  return <MedicalHighlightsTheme />;
}

export default CheckoutForm;
