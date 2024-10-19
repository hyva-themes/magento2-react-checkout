import { get as _get } from 'lodash-es';
import {
  bool as YupBool,
  array as YupArray,
  string as YupString,
  number as YupNumber,
} from 'yup';

import { __ } from '../i18n';

const requiredMessage = __('%1 is required');

export const yupSchemaByFieldType = {
  text: YupString(),
  multiline: YupArray(),
  boolean: YupBool(),
  number: YupNumber(),
};

/**
 * Bult-in support of rule mapping.
 * It maps magento validation rules with corresponding yup rule here.
 */
export const yupValidationRules = {
  required: (schema) => schema.required(requiredMessage),
  nullable: (schema) => schema.nullable(),
  multiRequired: (schema, ruleConfig) =>
    schema.test(
      `${ruleConfig.field}${ruleConfig.index}Required`,
      requiredMessage,
      (value, context) =>
        !!_get(context, `parent.${ruleConfig.field}.${ruleConfig.index}`)
    ),
  min_text_length: (schema, minLength) => schema.min(minLength),
  max_text_length: (schema, maxLength) => schema.max(maxLength),
  email: (schema) => schema.email(),
  url: (schema) => schema.url(),
  date: (schema) => schema.date(),
};
