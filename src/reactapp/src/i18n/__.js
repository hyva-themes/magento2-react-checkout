/* eslint-disable no-underscore-dangle */
import fetchAppTranslation from './fetchTranslation';
import fetchPaymentMethodsTranslations from '../paymentMethods/i18nProvider';

let i18n;

/**
 * Preparing the translations
 *
 * There are app translations which you can find inside public/i18n directory.
 * Also, there will be translations available from the custom payment methods.
 * Both translations are fetching and merging them here.
 */
(async () => {
  const appTranslations = () => fetchAppTranslation();
  const paymentMethodsTranslations = () => fetchPaymentMethodsTranslations();

  const translationCollection = await Promise.all([
    appTranslations(),
    paymentMethodsTranslations(),
  ]);

  i18n = translationCollection.reduce(
    (translations, item) => ({ ...translations, ...item }),
    {}
  );
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
