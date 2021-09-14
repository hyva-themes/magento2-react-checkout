export function prepareFields(values, sectionId) {
  const fields = {};

  Object.keys(values).forEach((fieldName) => {
    fields[fieldName] = `${sectionId}.${fieldName}`;
  });

  return fields;
}
