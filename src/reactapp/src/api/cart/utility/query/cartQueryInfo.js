import cartBillingAddrInfo from './cartBillingAddrInfo';
import cartItemsInfo from './cartItemsInfo';
import cartPaymentMethodsInfo from './cartPaymentMethodsInfo';
import cartPriceInfo from './cartPriceInfo';
import cartShippingAddrInfo from './cartShippingAddrInfo';

export const CART_DATA_FRAGMENT = `
  id
  email
  applied_coupons {
    code
  }
  ${cartItemsInfo}
  ${cartBillingAddrInfo}
  ${cartShippingAddrInfo}
  ${cartPriceInfo}
  ${cartPaymentMethodsInfo}
`;

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
    quantity
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
