import env from './env';
import RootElement from './rootElement';

const formatMapper =
  (currencySymbol) =>
  ({ type, value }) => {
    switch (type) {
      case 'currency':
        return currencySymbol || value;
      case 'minusSign':
        return '- ';
      case 'plusSign':
        return '+ ';
      default:
        return value;
    }
  };

export const formatPrice = (value, showSign) => {
  const { code: rootCurrencyCode, symbol: rootCurrencySymbol } =
    RootElement.getCurrency();
  const envCurrencyCode = env.currencyCode;
  const envCurrencySymbol = env.currencySymbol;

  const currencyCode = envCurrencyCode || rootCurrencyCode;
  const currencySymbol = envCurrencySymbol || rootCurrencySymbol;

  const formatter = new Intl.NumberFormat(document.documentElement.lang, {
    style: 'currency',
    currency: currencyCode,
    signDisplay: showSign ? 'always' : 'auto',
  });

  if (typeof Intl.NumberFormat.prototype.formatToParts === 'function') {
    return formatter
      .formatToParts(value)
      .map(formatMapper(currencySymbol))
      .reduce((string, part) => string + part);
  }

  return formatter.format(value);
};
