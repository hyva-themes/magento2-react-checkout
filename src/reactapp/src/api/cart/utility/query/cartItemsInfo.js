const cartItemsInfo = `
items {
  id
  product_type
  quantity
  prices {
    price {
      value
      currency
    },
    row_total {
      value
      currency
    }
  }
  product {
    id
    name
    sku
    small_image {
      label
      url
    }
    url_key
  }
  ...on ConfigurableCartItem {
    configurable_options {
      id
      option_label
      value_label
    }
  }
}`;

export default cartItemsInfo;
