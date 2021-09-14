export const COUNTRY_STATE_LIST_QUERY_PART = `
  country(id: $countryId){
    id
    available_regions {
      code
      id
      name
    }
  }
`;

export const GET_COUNTRY_STATE_LIST_QUERY = `
query getCountryStateListQuery($countryId: String!) {
  ${COUNTRY_STATE_LIST_QUERY_PART}
}`;
