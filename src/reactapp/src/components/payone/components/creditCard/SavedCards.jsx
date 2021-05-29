import React from 'react';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import RadioInput from '../../../common/Form/RadioInput';
import CCForm from './CCForm';
import paymentConfig from '../../utility/paymentConfig';
import usePaymentMethodFormContext from '../../../paymentMethod/hooks/usePaymentMethodFormContext';

function formatCardExpireDate(expireDate) {
  return `${expireDate.substring(2, 4)}/${expireDate.substring(0, 2)}`;
}

function getCardImage(cardType) {
  return `https://cdn.pay1.de/cc/${cardType.toLowerCase()}/s/default.png`;
}

function SavedCards({ detectedCardType }) {
  const { values } = useFormikContext();
  const { fields } = usePaymentMethodFormContext();
  const selectedCard = _get(values, fields.selectedCard);

  return (
    <table className="w-full text-sm">
      <tbody>
        {paymentConfig.savedPaymentData.map(payment => (
          <tr
            key={payment.id}
            className="h-20 bg-white border-t border-gray-400"
          >
            <td className="pl-2">
              <RadioInput
                name={fields.selectedCard}
                checked={selectedCard === payment.payment_data.cardpan}
                value={payment.payment_data.cardpan}
              />
            </td>
            <td>
              <img
                className="w-auto h-3"
                alt={payment.payment_data.masked}
                src={getCardImage(payment.payment_data.cardtype)}
              />
            </td>
            <td>
              {`ends-${payment.payment_data.masked.substring(
                payment.payment_data.masked.length - 4
              )}`}
            </td>
            <td>{payment.payment_data.cardholder}</td>
            <td>{formatCardExpireDate(payment.payment_data.cardexpiredate)}</td>
          </tr>
        ))}

        <tr className="h-20 bg-white border-t border-gray-400">
          <td colSpan={5}>
            <>
              <div className="pl-2">
                <RadioInput
                  name={fields.selectedCard}
                  label="Add new creditcard"
                  checked={selectedCard === 'new'}
                  value="new"
                />
              </div>
              <div
                className={`px-4 py-4 ${
                  selectedCard !== 'new' ? 'hidden' : ''
                }`}
              >
                <CCForm detectedCardType={detectedCardType} />
              </div>
            </>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default SavedCards;
