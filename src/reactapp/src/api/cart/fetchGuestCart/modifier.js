import { get as _get } from 'lodash-es';

import {
  modifyShippingMethods,
  modifyShippingAddressList,
  modifySelectedShippingMethod,
} from '../setShippingAddress/modifier';
import { _isArrayEmpty } from '../../../utils';
import { formatPrice } from '../../../utils/price';
import { modifyBillingAddressData } from '../setBillingAddress/modifier';

function modifyCartItemsData(cartItems) {
  return cartItems.reduce((accumulator, item) => {
    const { id, quantity, prices, product, product_type: productType } = item;
    const priceAmount = _get(prices, 'price_incl_tax.value');
    const price = formatPrice(priceAmount);
    const rowTotalAmount = _get(prices, 'row_total_incl_tax.value');
    const rowTotal = formatPrice(rowTotalAmount);
    const productId = _get(product, 'id');
    const productSku = _get(product, 'sku');
    const productName = _get(product, 'name');
    const productUrl = _get(product, 'url_key');
    const productSmallImgUrl = _get(product, 'small_image.url');
    const selectedConfigOptions = (
      _get(item, 'configurable_options') || []
    ).map((configOption) => {
      const {
        id: optionId,
        value_label: value,
        option_label: option,
      } = configOption;
      return {
        optionId,
        value,
        option,
        label: `${option}: ${value}`,
      };
    });

    accumulator[id] = {
      id,
      productType,
      quantity,
      isConfigurable: productType === 'configurable',
      priceAmount,
      price,
      rowTotal,
      rowTotalAmount,
      productId,
      productSku,
      productName,
      productUrl,
      productSmallImgUrl,
      selectedConfigOptions,
    };

    return accumulator;
  }, {});
}

function modifyCartPricesData(cartPrices) {
  const grandTotal = _get(cartPrices, 'grand_total', {});
  const subTotalIncl = _get(cartPrices, 'subtotal_including_tax', {});
  const subTotalExcl = _get(cartPrices, 'subtotal_excluding_tax', {});
  const discountPrices = _get(cartPrices, 'discounts', []) || [];
  const discounts = discountPrices.map((discount) => ({
    label: discount.label,
    price: formatPrice(-discount.amount.value, true),
    amount: discount.amount.value,
  }));
  const appliedTaxAmounts = _get(cartPrices, 'applied_taxes', []) || [];
  const appliedTaxes = appliedTaxAmounts.map((tax) => ({
    label: tax.label,
    price: formatPrice(tax.amount.value),
    amount: tax.amount.value,
  }));
  const grandTotalAmount = _get(grandTotal, 'value');
  const subTotalInclAmount = _get(subTotalIncl, 'value');
  const subTotalExclAmount = _get(subTotalExcl, 'value');

  return {
    discounts,
    hasDiscounts: !_isArrayEmpty(discountPrices),
    appliedTaxes,
    hasAppliedTaxes: !_isArrayEmpty(appliedTaxAmounts),
    subTotalIncl: formatPrice(subTotalInclAmount),
    subTotalInclAmount,
    subTotalExcl: formatPrice(subTotalExclAmount),
    subTotalExclAmount,
    grandTotal: formatPrice(grandTotalAmount),
    grandTotalAmount,
  };
}


function modifyPaymentMethodsData(paymentMethods) {
  return paymentMethods.reduce((accumulator, method) => {
    accumulator[method.code] = method;
    return accumulator;
  }, {});
}

export default function fetchGuestCartModifier(result, dataMethod) {
  const cartData = _get(result, `data.${dataMethod || 'cart'}`) || {};
  const cartItems = _get(cartData, 'items', []);
  const cartPrices = _get(cartData, 'prices', {});
  const shippingAddresses = _get(cartData, 'shipping_addresses', []);
  const billingAddress = _get(cartData, 'billing_address', {}) || {};
  const appliedCoupon = _get(cartData, 'applied_coupons[0].code') || '';
  const paymentMethods = _get(cartData, 'available_payment_methods', []);
  const selectedPaymentMethod = _get(cartData, 'selected_payment_method', {});

  return {
    id: cartData.id,
    email: cartData.email,
    isVirtualCart: cartData.is_virtual,
    appliedCoupon,
    items: modifyCartItemsData(cartItems),
    billing_address: modifyBillingAddressData(billingAddress),
    shipping_address: modifyShippingAddressList(shippingAddresses),
    shipping_methods: modifyShippingMethods(shippingAddresses),
    selected_shipping_method: modifySelectedShippingMethod(shippingAddresses),
    prices: modifyCartPricesData(cartPrices),
    available_payment_methods: modifyPaymentMethodsData(paymentMethods),
    selected_payment_method: selectedPaymentMethod,
  };
}
