import _get from 'lodash.get';

export default function storeConfigurationsModifier(result) {
  const storeConfig = _get(result, 'data.storeConfig', {}) || {};
  const {
    eu_countries: euCountries,
    minimum_password_length: minPasswordLength,
    required_character_classes_number: requiredCharacterSetCount,
  } = storeConfig;

  const europeCountries = (euCountries || '')
    .split(',')
    .map((country) => country.trim())
    .filter((country) => !!country);

  return {
    europeCountries,
    minPasswordLength: Number(minPasswordLength),
    requiredCharacterSetCount: Number(requiredCharacterSetCount),
  };
}
