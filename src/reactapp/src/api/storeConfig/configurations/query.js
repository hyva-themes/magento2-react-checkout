export const STORE_CONFIG_QUERY_PART = `
  storeConfig {
    minimum_password_length
    required_character_classes_number
  }
`;

export const GET_STORE_CONFIG_QUERY = `
  query {
    ${STORE_CONFIG_QUERY_PART}
  }
`;
