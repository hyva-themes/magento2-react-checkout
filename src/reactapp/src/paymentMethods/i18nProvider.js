import env from '../utils/env';
import RootElement from '../utils/rootElement';
import { paymentFetcher } from './utility';

/**
 * Preparing translations from available payment methods.
 *
 * Each payment methods has its own translation file. So here we are looping
 * through each available payment methods and collecting them.
 */
export default async function i18nProvider() {
  const locale = env.language || RootElement.getLanguage();

  if (!locale) {
    return {};
  }

  const paymentMethodsTranslations = await paymentFetcher.fetchDataFromPaymentMethods(
    `i18n/${locale}.json`,
    {}
  );

  return paymentMethodsTranslations.reduce(
    (translations, item) => ({ ...translations, ...item }),
    {}
  );
}
