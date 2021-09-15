const i18n =
  typeof window !== 'undefined' &&
  JSON.parse(window.CHECKOUT_TRANSLATIONS || '{}');

export default function __(stringToTranslate, ...dataReplacers) {
  let stringLiteral = (i18n || {})[stringToTranslate] || stringToTranslate;

  if (!dataReplacers.length) {
    return stringLiteral;
  }

  dataReplacers.forEach((dataToReplace) => {
    stringLiteral = stringLiteral.replace('%1', __(dataToReplace));
  });

  return stringLiteral;
}
