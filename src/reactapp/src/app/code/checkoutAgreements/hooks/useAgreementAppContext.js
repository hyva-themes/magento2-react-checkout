import { useAppContext } from '../../../../hooks';

export default function useAgreementAppContext() {
  const { checkoutAgreements, changeCheckoutAgreement } = useAppContext();

  return { checkoutAgreements, changeCheckoutAgreement };
}
