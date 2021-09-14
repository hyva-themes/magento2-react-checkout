export const CUSTOMER_ADDRESS_LIST_QUERY_PART = `
  customer {
    email
    firstname
    lastname
    default_billing
    default_shipping
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
`;

export const GET_CUSTOMER_ADDRESS_LIST_QUERY = `
  query getCustomerInfoWithAddressQuery {
    ${CUSTOMER_ADDRESS_LIST_QUERY_PART}
  }
`;
