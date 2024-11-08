/**
 * Here you can define your own custom validation rules which will be applied
 * to fields using field renderers.
 */
export default {
  min_text_length: (schema, minLength) => schema.min(minLength),
  max_text_length: (schema, maxLength) => schema.max(maxLength),
};
