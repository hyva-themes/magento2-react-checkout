export const CHECKOUT_AGREEMENTS_QUERY_PART = `
  checkoutAgreements {
    agreement_id
    checkbox_text
    content
    content_height
    is_html
    mode
    name
  }
`;

export const GET_CHECKOUT_AGREEMENTS_QUERY = `
  query getCheckoutAgreementsQuery {
    ${CHECKOUT_AGREEMENTS_QUERY_PART}
  }
`;
