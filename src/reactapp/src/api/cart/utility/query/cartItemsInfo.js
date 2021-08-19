const cartItemsInfo = `
items {
  id
  quantity
  prices {
    price {
      value
      currency
    }
    row_total {
      value
      currency
    }
    row_total_including_tax {
      value
      currency
    }
    total_item_discount {
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
