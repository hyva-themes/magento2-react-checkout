export const GET_COUNTRY_LIST_QUERY = `query {
  countries {
    id
    full_name_locale
    full_name_english
    state_required
  }
}`;
