export const COUNTRY_LIST_QUERY_PART = `
  countries {
    id
    full_name_locale
    full_name_english
    state_required
  }
`;

export const GET_COUNTRY_LIST_QUERY = `
  query {
    ${COUNTRY_LIST_QUERY_PART}
  }
`;
