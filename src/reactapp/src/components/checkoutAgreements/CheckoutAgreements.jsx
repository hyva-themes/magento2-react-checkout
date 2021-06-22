import React, { useEffect } from 'react';
import Card from '../common/Card';
import Header from '../common/Header';
import { __ } from '../../i18n';
import useCartContext from '../../hook/useCartContext';
import Checkbox from '../common/Form/Checkbox';

function CheckoutAgreements() {
  const {
    getCheckoutAgreements,
    checkoutAgreements,
    changeCheckoutAgreement,
  } = useCartContext();

  useEffect(() => {
    getCheckoutAgreements();
  }, [getCheckoutAgreements]);

  if (!checkoutAgreements || checkoutAgreements.length < 1) {
    return null;
  }

  return (
    <div>
      <Card>
        <Header>{__('Checkout Agreements')}</Header>
        {checkoutAgreements.map(agreement => (
          <Checkbox
            label={agreement.checkbox_text}
            name={`agreement-${agreement.agreement_id}`}
            required
            isChecked={agreement.checked}
            onChange={e => {
              changeCheckoutAgreement(agreement.agreement_id, e.target.checked);
            }}
          />
        ))}
      </Card>
    </div>
  );
}

export default CheckoutAgreements;
