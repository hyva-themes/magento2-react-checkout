export const GET_CHECKOUT_AGREEMENTS_QUERY = `
query {
  checkoutAgreements {
    agreement_id
    checkbox_text
    content
    content_height
    is_html
    mode
    name
  }
}
`;
