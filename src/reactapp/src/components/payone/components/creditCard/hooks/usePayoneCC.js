import { useCallback, useContext } from 'react';
import _get from 'lodash.get';
import _set from 'lodash.set';

import paymentConfig from '../../../utility/paymentConfig';
import { __ } from '../../../../../i18n';
import useAppContext from '../../../../../hook/useAppContext';
import CartContext from '../../../../../context/Cart/CartContext';
import LocalStorage from '../../../../../utils/localStorage';
import {
  config,
  GUEST_EMAIL_FORM,
  PAYMENT_METHOD_FORM,
} from '../../../../../config';

const cardTypeField = `${PAYMENT_METHOD_FORM}.additional_data.cardtype`;
const cardHolderField = `${PAYMENT_METHOD_FORM}.additional_data.cardholder`;
const selectedCardField = `${PAYMENT_METHOD_FORM}.selectedCard`;

function getSelectedSavedCard(values) {
  const { savedPaymentData = [] } = paymentConfig;
  const selectedCardPan = _get(values, selectedCardField);
  return savedPaymentData.find(
    card => card.payment_data.cardpan === selectedCardPan
  );
}

function isInt(value) {
  return value.length > 0 && typeof value === 'number';
}

function isMinValidityCorrect(sExpireDate) {
  if (isInt(paymentConfig.ccMinValidity)) {
    const oExpireDate = new Date(
      parseInt(`20${parseInt(sExpireDate.substring(0, 2), 10)}`, 10),
      parseInt(sExpireDate.substring(2, 4), 10),
      1,
      0,
      0,
      0
    );
    oExpireDate.setSeconds(oExpireDate.getSeconds() - 1);

    const oMinValidDate = new Date();
    oMinValidDate.setDate(
      parseInt(oMinValidDate.getDate().toString(), 10) +
        parseInt(paymentConfig.ccMinValidity, 10)
    );

    if (oExpireDate < oMinValidDate) {
      return false;
    }
  }

  return true;
}

function isCardholderDataValid(sCardholder) {
  if (sCardholder.search(/[^a-zA-ZÄäÖöÜüß\- ]+/) === -1) {
    return true;
  }
  return false;
}

function validate(values) {
  if (!paymentConfig.isSavedPaymentDataUsed(values)) {
    const cardType = _get(values, cardTypeField);
    const cardholder = _get(values, cardHolderField);

    if (!cardType) {
      return {
        isValid: false,
        message: __('Please choose the creditcard type.'),
      };
    }

    if (!cardholder) {
      return {
        isValid: false,
        message: __('Please provide cardholder information'),
      };
    }

    if (cardholder.length > 50) {
      return {
        isValid: false,
        message: __('The cardholder information entered is too long.'),
      };
    }

    if (!isCardholderDataValid(cardholder)) {
      return {
        isValid: false,
        message: __('The cardholder information contains invalid characters.'),
      };
    }
  } else {
    const selectedSavedCard = getSelectedSavedCard(values);

    if (
      selectedSavedCard &&
      !isMinValidityCorrect(selectedSavedCard.payment_data.cardexpiredate)
    ) {
      return {
        isValid: false,
        message: __(
          'This transaction could not be performed. Please select another payment method.'
        ),
      };
    }
  }

  return { isValid: true };
}

export default function usePayoneCC() {
  const [cartData, { setRestPaymentMethod }] = useContext(CartContext);
  const [, { setErrorMessage, setPageLoader }] = useAppContext();
  const cartId = _get(cartData, 'cart.id');

  const placeOrder = useCallback(
    async (response, values) => {
      const email = _get(values, `${GUEST_EMAIL_FORM}.email`);
      const payment = _get(values, PAYMENT_METHOD_FORM);
      const cardholder = _get(payment, 'additional_data.cardholder');
      const saveData = Number(!!_get(payment, 'additional_data.saveData'));
      const selectedCardPan = _get(values, selectedCardField);
      const isLoggedIn = !!LocalStorage.getCustomerToken();
      const {
        truncatedcardpan,
        pseudocardpan,
        cardtype,
        cardexpiredate,
      } = response;

      const paymentMethod = {
        paymentMethod: {
          method: 'payone_creditcard',
          additional_data: {
            cardholder,
            truncatedcardpan,
            pseudocardpan,
            cardtype,
            cardexpiredate,
          },
        },
      };

      if (isLoggedIn) {
        const additionalData = 'paymentMethod.additional_data';

        if (selectedCardPan !== 'new') {
          const selectedSavedCard = getSelectedSavedCard(values);
          if (selectedSavedCard && selectedSavedCard.payment_data) {
            _set(paymentMethod, additionalData, selectedSavedCard.payment_data);
          }
        }
        _set(paymentMethod, 'cartId', cartId);
        _set(paymentMethod, `${additionalData}.saveData`, saveData);
        _set(paymentMethod, `${additionalData}.cardholder`, cardholder);
        _set(paymentMethod, `${additionalData}.selectedData`, selectedCardPan);
      } else {
        _set(paymentMethod, 'email', email);
      }

      setPageLoader(true);

      const result = await setRestPaymentMethod(paymentMethod, isLoggedIn);

      setPageLoader(false);

      if (result && result.redirectUrl) {
        LocalStorage.clearCheckoutStorage();
        window.location.replace(`${config.baseUrl}${result.redirectUrl}`);
      }
    },
    [setRestPaymentMethod, setPageLoader, cartId]
  );

  const processPayoneResponseCCHosted = useCallback(
    async (response, values) => {
      if (response.status === 'VALID') {
        if (!isMinValidityCorrect(response.cardexpiredate)) {
          setErrorMessage(__('Invalid expiration date.'));
          setPageLoader(false);
          return;
        }
        await placeOrder(response, values);
      } else if (response.status === 'INVALID') {
        setErrorMessage(__(response.errormessage));
        setPageLoader(false);
      } else if (response.status === 'ERROR') {
        setErrorMessage(__(response.errormessage));
        setPageLoader(false);
      }
    },
    [setErrorMessage, setPageLoader, placeOrder]
  );

  const handleCreditcardCheckThenPlaceOrder = useCallback(
    async values => {
      const { isValid, message } = validate(values);

      if (!isValid) {
        setErrorMessage(message);
        setPageLoader(false);
        return false;
      }

      if (paymentConfig.isSavedPaymentDataUsed(values)) {
        await placeOrder({}, values);
        return false;
      }

      // PayOne Request if the data is valid
      if (window.iframes.isComplete()) {
        setPageLoader(true);
        window.processPayoneResponseCCHosted = async response => {
          await processPayoneResponseCCHosted(response, values);
        };
        return window.iframes.creditCardCheck('processPayoneResponseCCHosted');
      }
      return true;
    },
    [processPayoneResponseCCHosted, setErrorMessage, setPageLoader, placeOrder]
  );

  return {
    handleCreditcardCheckThenPlaceOrder,
  };
}
