import _get from 'lodash.get';

export default function fetchCountryStateListModifier(response) {
  const countryId = _get(response, 'data.country.id');
  const regions = _get(response, 'data.country.available_regions', []) || [];

  return regions.map(({ code, name, id }) => ({
    id,
    code,
    name,
    countryId,
  }));
}
