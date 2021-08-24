const i18n =
  typeof window !== 'undefined' &&
  JSON.parse(window.CHECKOUT_TRANSLATIONS || '{}');

export default function __mt(stringToTranslate, ...dataReplacers) {
  let stringLiteral = (i18n || {})[stringToTranslate] || stringToTranslate;

  if (!dataReplacers.length) {
    return stringLiteral;
  }

  dataReplacers.forEach((dataToReplace) => {
    stringLiteral = stringLiteral.replace('%1', __mt(dataToReplace));
  });

  return stringLiteral;
}
