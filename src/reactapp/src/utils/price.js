import RootElement from './rootElement';

export const formatPrice = (value, showSign) => {
  const {
    code: currencyCode,
    symbol: currencySymbol,
  } = RootElement.getCurrency();

  var formatter = new Intl.NumberFormat(document.documentElement.lang, {
    style: 'currency',
    currency: currencyCode,
    signDisplay: showSign ? 'always' : 'auto',
  });

  return typeof Intl.NumberFormat.prototype.formatToParts === 'function'
    ? formatter
        .formatToParts(value)
        .map(({ type, value }) => {
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
        })
        .reduce((string, part) => string + part)
    : formatter.format(value);
};
