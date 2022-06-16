import { get as _get } from 'lodash-es';

export default function fetchCountryListModifier(result) {
  return _get(result, 'data.countries', []).map((country) => ({
    id: country.id,
    name: country.full_name_locale,
    stateRequired: country.state_required,
  }));
}
