export const GET_CUSTOMER_ADDRESS_LIST_QUERY = `
query {
  customer {
    default_billing
    default_shipping
    email
    addresses {
      id
      city
      company
      country_code
      default_billing
      default_shipping
      firstname
      lastname
      middlename
      postcode
      region {
        region
        region_code
        region_id
      }
      region_id
      street
      telephone
    }
  }
}
`;
