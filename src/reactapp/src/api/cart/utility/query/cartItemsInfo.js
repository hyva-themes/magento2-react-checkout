const cartItemsInfo = `
items {
  id
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
}`;

export default cartItemsInfo;
