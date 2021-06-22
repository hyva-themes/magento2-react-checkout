export function getCheckoutAgreements(state, checkoutAgreements) {
  return {
    ...state,
    cart: {
      ...state.cart,
      checkout_agreements: checkoutAgreements,
    },
  };
}

export function changeCheckoutAgreements(state, props) {
  const { agreementId, value } = props;

  const newAgreementsArray = state.cart.checkout_agreements.map(
    agreementElement =>
      agreementId === agreementElement.agreement_id
        ? { ...agreementElement, checked: value }
        : agreementElement
  );

  return {
    ...state,
    cart: {
      ...state.cart,
      checkout_agreements: newAgreementsArray,
    },
  };
}
