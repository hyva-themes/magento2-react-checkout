export const GENERATE_CUSTOMER_TOKEN_MUTATION = `
  mutation generateToken($email: String!, $password: String!) {
    generateCustomerToken(email: $email, password: $password) {
      token
    }
  }
`;
