import { get as _get } from 'lodash-es';

import { _numberRange } from './index';

export function createFieldConfig(fieldData, formId) {
  const {
    id,
    code,
    type,
    label,
    classes,
    options,
    helpText,
    isRequired,
    placeholder,
    wrapperClasses,
    multilineCount,
    length: fieldLength,
  } = fieldData;

  const fieldName = `${formId}.${code}`;
  const fieldId = id ? `${formId}.${id}` : fieldName;

  const config = {
    code,
    type,
    id: fieldId,
    name: fieldName,
    label: label || '',
    classes: classes || '',
    helpText: helpText || '',
    isRequired: !!isRequired,
    wrapperClasses: wrapperClasses || '',
    length: (fieldLength || 100).toString(),
    placeholder: placeholder || label || '',
    multilineCount: Number(multilineCount) || 1,
    fieldLength: (fieldLength || 100).toString(),
  };

  if (type === 'multiline') {
    config.multilineCount = Number(multilineCount) || 1;
    config.label = [config.label];
    config.placeholder = [config.placeholder];

    if (config.multilineCount > 1) {
      config.label = _numberRange(config.multilineCount - 1).map(
        (lineIndex) => _get(config.label, lineIndex) || ''
      );
      config.placeholder = _numberRange(config.multilineCount - 1).map(
        (lineIndex) => _get(config.placeholder, lineIndex) || ''
      );
    }
  }

  if (type === 'select') {
    config.options = options || [];
  }

  return config;
}
