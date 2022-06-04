import _get from 'lodash/get';

export default function fetchCountryListModifier(result) {
  return _get(result, 'data.countries', []).map((country) => ({
    id: country.id,
    name: country.full_name_locale,
    stateRequired: country.state_required,
  }));
}
