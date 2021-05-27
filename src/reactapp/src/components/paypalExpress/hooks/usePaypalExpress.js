import { useCallback, useContext, useEffect, useState } from 'react';
import AppContext from '../../../context/App/AppContext';
import createCustomerToken from '../../../api/paypalExpress/createCustomerToken';
import { _objToArray } from '../../../utils';
import { __ } from '../../../i18n';
import setPaymentMethodPaypalExpress from '../../../api/paypalExpress/setPaymentMethod';
import placeOrder from '../../../api/cart/placeOrder';
import useShippingMethodCartContext from '../../shippingMethod/hooks/useShippingMethodCartContext';
import LocalStorage from '../../../utils/localStorage';
import { config } from '../../../config';
import usePaymentMethodCartContext from '../../paymentMethod/hooks/usePaymentMethodCartContext';
import useBillingAddressCartContext from '../../billingAddress/hooks/useBillingAddressCartContext';

export default function usePaypalExpress() {
  const [, appActions] = useContext(AppContext);
  const { setErrorMessage, setPageLoader } = appActions;
  const { selectedMethod } = useShippingMethodCartContext();
  const { cartBillingAddress } = useBillingAddressCartContext();
  const query = window.location.href.split('?')[1];
  const [processPaymentEnable, setProcessPaymentEnable] = useState(false);
  const { selectedPaymentMethod, methodList } = usePaymentMethodCartContext();
  const cartId = LocalStorage.getCartId();

  /*
   Check if is possible to proceed on placing the order.
   */
  useEffect(() => {
    if (
      query &&
      selectedMethod?.methodCode &&
      (selectedPaymentMethod?.code === '' ||
        selectedPaymentMethod?.code === 'paypal_express')
    )
      setProcessPaymentEnable(true);
  }, [query, setProcessPaymentEnable, selectedMethod, selectedPaymentMethod]);

  useEffect(() => {
    const processPaypalExpress = async () => {
      setProcessPaymentEnable(false);
      /*
       Get paypal express required data from response query
       */
      const { token, PayerID: payerId } = getTokenPayerId(query);
      const paymentMethod = _objToArray(methodList).find(
        method => method.code === 'paypal_express'
      );

      if (
        !token ||
        !payerId ||
        !cartId ||
        !selectedMethod ||
        !paymentMethod ||
        !cartBillingAddress
      ) {
        return;
      }

      /*
       Set payment method on cart and place the order
       */
      try {
        setPageLoader(true);
        await setPaymentMethodPaypalExpress({ payerId, token });
        const response = await placeOrder();
        if (response && response.order_number) {
          LocalStorage.clearCheckoutStorage();
          window.location.replace(
            `${config.baseUrl}/checkout/onepage/success/`
          );
        }
      } catch (error) {
        setPageLoader(false);
        setErrorMessage(
          __(
            'Something went wrong while adding the payment method to the quote.'
          )
        );
      }
    };
    if (processPaymentEnable) {
      processPaypalExpress(cartId, methodList);
    }
  }, [
    cartId,
    methodList,
    processPaymentEnable,
    query,
    selectedMethod,
    setErrorMessage,
    setPageLoader,
    cartBillingAddress,
  ]);

  /*
   Get the customer token from the BE and redirect to paypal.
   */
  const authorizeUser = useCallback(async () => {
    if (!selectedMethod?.carrierCode || !cartBillingAddress?.firstname) {
      setErrorMessage(__('Please complete all the required data.'));
      return;
    }

    setPageLoader(true);
    const response = await createCustomerToken({
      returnUrl: `checkout/index/index`,
      cancelUrl: `checkout/index/index`,
    });

    if (response) {
      const paypalExpressUrl =
        response.createPaypalExpressToken?.paypal_urls.start;
      if (!paypalExpressUrl) {
        setErrorMessage('Paypal Error');
        return;
      }
      window.location.href = paypalExpressUrl;
    }
  }, [selectedMethod, setErrorMessage, setPageLoader, cartBillingAddress]);

  return {
    authorizeUser,
  };
}

/*
 Utility to get the token and the payer id from the URL
 */
const getTokenPayerId = query => {
  const queryStringObj = {};
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i += 1) {
    const pair = vars[i].split('=');
    queryStringObj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }

  return queryStringObj;
};
