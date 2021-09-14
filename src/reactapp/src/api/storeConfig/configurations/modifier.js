import _get from 'lodash.get';

export default function storeConfigurationsModifier(result) {
  const storeConfig = _get(result, 'data.storeConfig') || {};
  const {
    minimum_password_length: minPasswordLength,
    required_character_classes_number: requiredCharacterSetCount,
  } = storeConfig;

  return {
    minPasswordLength: Number(minPasswordLength),
    requiredCharacterSetCount: Number(requiredCharacterSetCount),
  };
}
