/* eslint-disable no-underscore-dangle */
import fetchTranslation from './fetchTranslation';

let i18n;

// self invoking function that populates the translation string object
(async () => {
  i18n = await fetchTranslation();
})();

/**
 * translation helper function which can be used inside components to get the
 * translated string based on the language
 */
export default function __(stringToTranslate, ...dataReplacers) {
  let stringLiteral = (i18n || {})[stringToTranslate] || stringToTranslate;

  if (!dataReplacers.length) {
    return stringLiteral;
  }

  dataReplacers.forEach(dataToReplace => {
    stringLiteral = stringLiteral.replace('{}', dataToReplace);
  });

  return stringLiteral;
}
