/* eslint-disable no-param-reassign */
import _get from 'lodash.get';
import { config } from '../../../config';
import { modifyBillingAddressData } from '../setBillingAddress/modifier';
import {
  modifyShippingAddressList,
  modifyShippingMethods,
} from '../setShippingAddress/modifier';

function modifyCartItemsData(cartItems) {
  return cartItems.reduce((cartItemsInfo, item) => {
    const { id, quantity, prices, product } = item;
    const currencySymbol =
      config.currencySymbols[_get(prices, 'price.currency')];
    const priceAmount = _get(prices, 'price.value');
    const price = `${currencySymbol}${priceAmount}`;
    const rowTotalAmount = _get(prices, 'row_total.value');
    const rowTotal = `${currencySymbol}${rowTotalAmount}`;
    const productId = _get(product, 'id');
    const productSku = _get(product, 'sku');
    const productName = _get(product, 'name');
    const productUrl = _get(product, 'url_key');
    const productSmallImgUrl = _get(product, 'small_image.url');

    cartItemsInfo[id] = {
      id,
      quantity,
      priceAmount,
      price,
      rowTotal,
      rowTotalAmount,
      productId,
      productSku,
      productName,
      productUrl,
      productSmallImgUrl,
    };

    return cartItemsInfo;
  }, {});
}

function modifyCartPricesData(cartPrices) {
  const grandTotal = _get(cartPrices, 'grand_total', {});
  const subTotal = _get(cartPrices, 'subtotal_including_tax', {});
  const currencySymbol = config.currencySymbols[_get(grandTotal, 'currency')];
  const grandTotalAmount = _get(grandTotal, 'value');
  const subTotalAmount = _get(subTotal, 'value');

  return {
    subTotal: `${currencySymbol}${subTotalAmount}`,
    subTotalAmount,
    grandTotal: `${currencySymbol}${grandTotalAmount}`,
    grandTotalAmount,
  };
}

export default function fetchGuestCartModifier(result) {
  const cartData = _get(result, 'data.cart', {});
  const shippingAddresses = _get(cartData, 'shipping_addresses', []);
  const billingAddress = _get(cartData, 'billing_address', {});
  const cartItems = _get(cartData, 'items', []);
  const cartPrices = _get(cartData, 'prices', {});

  return {
    email: cartData.email,
    items: modifyCartItemsData(cartItems),
    billing_address: modifyBillingAddressData(billingAddress),
    shipping_addresses: modifyShippingAddressList(shippingAddresses),
    shipping_methods: modifyShippingMethods(shippingAddresses),
    prices: modifyCartPricesData(cartPrices),
  };
}
