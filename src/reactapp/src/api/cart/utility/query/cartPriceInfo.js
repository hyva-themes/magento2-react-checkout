const cartPriceInfo = `
prices {
  grand_total {
    value
    currency
  }
  subtotal_excluding_tax {
    value
    currency
  }
  subtotal_including_tax {
    value
    currency
  }
  applied_taxes {
    label
    amount {
      currency
      value
    }
  }
  discounts {
    label
    amount {
      currency
      value
    }
  }
}
`;

export default cartPriceInfo;
