export const UPDATE_CUSTOMER_ADDRESS_MUTATION = `
  mutation updateCustomerAddressMutation(
    $id: Int!
    $customerAddress: CustomerAddressInput
  ) {
    updateCustomerAddress(
      id: $id
      input: $customerAddress
    ) {
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
