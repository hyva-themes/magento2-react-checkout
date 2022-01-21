import { CART_DATA_FRAGMENT } from '../utility/query/cartQueryInfo';

export const SET_CART_BILLING_ADDRESS_MUTATION = `
mutation setBillingAddress(
  $cartId: String!
  $firstname: String!
  $lastname: String!
  $company: String
  $street: [String]!
  $city: String!
  $region: String
  $zipcode: String!
  $country: String!
  $phone: String!
  $isSameAsShipping: Boolean
  $saveInBook: Boolean
) {
  setBillingAddressOnCart(
    input: {
      cart_id: $cartId
      billing_address: {
        same_as_shipping: $isSameAsShipping
      	address: {
          firstname: $firstname
          lastname: $lastname
          company: $company
          street: $street
          city: $city
          region: $region
          postcode: $zipcode
          country_code: $country
          telephone: $phone
          save_in_address_book: $saveInBook
        }
      }
    }
  ) {
    cart {
      ${CART_DATA_FRAGMENT}
    }
  }
}
`;
