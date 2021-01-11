export const GET_COUNTRY_STATE_LIST_QUERY = `
query getCountryStateListQuery($countryId: String!) {
  country(id: $countryId){
    id
    available_regions {
      code
      id
      name
    }
  }
}`;
