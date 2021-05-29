import React, { useCallback, useEffect, useState } from 'react';
import { func, shape, string } from 'prop-types';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import RadioInput from '../../../common/Form/RadioInput';
import CCForm from './CCForm';
import CCIframe from './CCIframe';
import SavedCards from './SavedCards';
import usePayoneCC from './hooks/usePayoneCC';
import useCheckoutFormContext from '../../../../hook/useCheckoutFormContext';
import usePaymentMethodFormContext from '../../../paymentMethod/hooks/usePaymentMethodFormContext';
import paymentConfig from '../../utility/paymentConfig';
import { PAYMENT_METHOD_FORM } from '../../../../config';

const cardTypeField = `${PAYMENT_METHOD_FORM}.additional_data.cardtype`;

function CreditCard({ method, selected, actions }) {
  const [cardTypeDetected, setCardTypeDetected] = useState('');
  const savedData = paymentConfig.useSavedData();
  const isSelected = method.code === selected.code;
  const { setFieldValue } = useFormikContext();
  const { fields } = usePaymentMethodFormContext();
  const { registerPaymentAction } = useCheckoutFormContext();
  const selectedCardField = fields.selectedCard;
  const { handleCreditcardCheckThenPlaceOrder } = usePayoneCC();

  const paymentSubmitHandler = useCallback(
    async values => {
      await handleCreditcardCheckThenPlaceOrder(values);
      return false;
    },
    [handleCreditcardCheckThenPlaceOrder]
  );

  useEffect(() => {
    registerPaymentAction(method.code, paymentSubmitHandler);
  }, [method, registerPaymentAction, paymentSubmitHandler]);

  // initializing payone iframe
  useEffect(() => {
    if (isSelected) {
      if (paymentConfig.fieldConfig.autoCardtypeDetection) {
        paymentConfig.fieldConfig.autoCardtypeDetection.callback = newCardTypeDetected => {
          setFieldValue(cardTypeField, newCardTypeDetected.toUpperCase());
          setCardTypeDetected(newCardTypeDetected.toUpperCase());
        };

        const initialCardType = _get(
          paymentConfig,
          'fieldConfig.autoCardtypeDetection.supportedCardtypes.0'
        );

        setFieldValue(cardTypeField, initialCardType);
        setCardTypeDetected(initialCardType);
      }

      window.iframes = new window.Payone.ClientApi.HostedIFrames(
        paymentConfig.fieldConfig,
        paymentConfig.request
      );
      window.iframes.setCardType('V');
    }
  }, [isSelected, setFieldValue]);

  // if saved cards available for customer, then should show card list in the content
  useEffect(() => {
    if (isSelected && savedData) {
      const defaultSavedCard = paymentConfig.savedPaymentData.find(
        payment => Number(payment.is_default) === 1
      );

      if (defaultSavedCard) {
        setFieldValue(selectedCardField, defaultSavedCard.payment_data.cardpan);
      }
    }
  }, [savedData, isSelected, setFieldValue, selectedCardField]);

  if (!isSelected) {
    return (
      <>
        <RadioInput
          label={method.title}
          name="paymentMethod"
          value={method.code}
          onChange={actions.change}
          checked={isSelected}
        />
        <div className="hidden">
          <CCIframe detectedCardType={cardTypeDetected} />
        </div>
      </>
    );
  }

  if (savedData) {
    return (
      <div className="w-full">
        <RadioInput
          label={method.title}
          name="paymentMethod"
          value={method.code}
          onChange={actions.change}
          checked={isSelected}
        />
        <div className="mt-4 ml-4">
          <SavedCards detectedCardType={cardTypeDetected} />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div>
        <RadioInput
          label={method.title}
          name="paymentMethod"
          value={method.code}
          onChange={actions.change}
          checked={isSelected}
        />
      </div>
      <CCForm detectedCardType={cardTypeDetected} />
    </div>
  );
}

const methodShape = shape({
  title: string.isRequired,
  code: string.isRequired,
});

CreditCard.propTypes = {
  method: methodShape.isRequired,
  selected: methodShape.isRequired,
  actions: shape({ change: func }),
};

export default CreditCard;
