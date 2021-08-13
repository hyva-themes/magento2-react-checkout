import _get from 'lodash.get';

class PaymentFetcherUtility {
  constructor() {
    this.availablePaymentMethods = null;
  }

  async getAvailablePaymentMethods() {
    if (!this.availablePaymentMethods) {
      const data = await import(
        /* webpackMode: "eager" */ '../paymentConfig.json'
      );

      this.availablePaymentMethods = _get(
        data,
        'default.availablePaymentMethods',
        []
      );
    }

    return this.availablePaymentMethods;
  }

  async fetchDataFromPaymentMethods(file, defaultValue) {
    const paymentMethods = await this.getAvailablePaymentMethods();

    const paymentMethodsData = await Promise.all(
      paymentMethods.map(async (paymentMethod) => {
        try {
          const paymentMethodFile = `../${paymentMethod}/${file}`;
          const data = await import(
            /* webpackMode: "eager" */ paymentMethodFile
          );

          return _get(data, 'default');
        } catch (error) {
          console.error(error);
          return defaultValue;
        }
      })
    );

    return paymentMethodsData;
  }
}

export const paymentFetcher = new PaymentFetcherUtility();
