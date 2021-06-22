import { useEffect, useState } from 'react';
import useCartContext from '../../../hook/useCartContext';

export default function useCheckoutAgreements() {
  const { checkoutAgreements } = useCartContext();
  const [allAgreementsChecked, setAllAgreementsChecked] = useState(false);
  const [hasAgreements, setHasAgreements] = useState(false);
  const [agreementIds, setAgreementIds] = useState([]);

  useEffect(() => {
    setHasAgreements(checkoutAgreements.length > 0);
    setAllAgreementsChecked(
      checkoutAgreements.every(agreement => agreement.checked)
    );
    setAgreementIds(
      checkoutAgreements.map(
        agreement => agreement.checked && agreement.agreement_id
      )
    );
  }, [checkoutAgreements]);

  return {
    allAgreementsChecked,
    agreementIds,
    hasAgreements,
  };
}
