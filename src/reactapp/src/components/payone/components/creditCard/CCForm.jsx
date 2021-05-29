import React from 'react';
import { useFormikContext } from 'formik';

import SelectInput from '../../../common/Form/SelectInput';
import TextInput from '../../../common/Form/TextInput';
import CCIframe from './CCIframe';
import paymentConfig from '../../utility/paymentConfig';
import { PAYMENT_METHOD_FORM } from '../../../../config';
import { __ } from '../../../../i18n';

const cardTypeOptions = paymentConfig.availableCardTypes.map(
  ({ id, title }) => ({ value: id, label: title })
);

const cardTypeField = `${PAYMENT_METHOD_FORM}.additional_data.cardtype`;
const cardHolderField = `${PAYMENT_METHOD_FORM}.additional_data.cardholder`;

function CCForm({ detectedCardType }) {
  const { setFieldValue } = useFormikContext();

  const handleCardTypeChange = event => {
    const newCardTypeSelected = event.target.value;

    setFieldValue(cardTypeField, newCardTypeSelected);
    window.iframes.setCardType(newCardTypeSelected);
  };

  return (
    <div className="w-full">
      {!paymentConfig.isAutoCardtypeDetectionEnabled && (
        <SelectInput
          label={__('Card Type')}
          name={cardTypeField}
          options={cardTypeOptions}
          onChange={handleCardTypeChange}
        />
      )}
      <TextInput label="Card Holder" name={cardHolderField} />
      <CCIframe detectedCardType={detectedCardType} />
    </div>
  );
}

export default CCForm;
