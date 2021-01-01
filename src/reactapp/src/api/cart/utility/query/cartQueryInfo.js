const cartQueryInfo = `
  email
  id
  is_virtual
  billing_address {
    city
    country {
      code
      label
    }
    company
    firstname
    lastname
    postcode
    region {
      code
      label
    }
    street
    telephone
  }
  total_quantity
  items {
    id
    prices {
      price {
        value
      },
      row_total {
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
    ... on VirtualCartItem {
      customizable_options {
        label
        values {
          id
          label
          value
        }
        id
      }
    }
    quantity
  }
  available_payment_methods {
    code
    title
  }
  selected_payment_method {
    code
    title
  }
  applied_coupons {
    code
  }
  prices {
    grand_total {
      value
      currency
    }
    subtotal_excluding_tax {
      value
      currency
    }
  }
`;

export default cartQueryInfo;
