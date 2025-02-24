/**
 * Here you can define your own custom validation rules which will be applied
 * to fields using field renderers.
 */
export default {
  min_text_length: (schema, minLength) =>
    schema.test(
      'minLength',
      `%1 must be atleast ${minLength} characters`,
      (value) => !(value && value.length < minLength)
    ),
  max_text_length: (schema, maxLength) =>
    schema.test(
      'maxLength',
      `%1 cannot be longer than ${maxLength} characters`,
      (value) => !(value && value.length > maxLength)
    ),
};
