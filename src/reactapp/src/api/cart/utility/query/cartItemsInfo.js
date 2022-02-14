const cartItemsInfo = `
items {
  id
  product_type
  quantity
  prices {
    row_total_incl_tax {
      value
    }
    price_incl_tax {
      value
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
