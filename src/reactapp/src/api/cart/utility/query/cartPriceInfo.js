const cartPriceInfo = `
prices {
  grand_total {
    value
    currency
  }
  subtotal_including_tax {
    value
    currency
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
