export const EMAIL_CHECK_QUERY_PART = `
  products(filter: {sku: { eq: $email }}){
    total_count
  }
`;

export const EMAILCHECK_AGEVERIFY_QUERY = `
query emailCheckAgeVerify($email: String!) {
  ${EMAIL_CHECK_QUERY_PART}
}`;
