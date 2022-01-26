import { CART_DATA_FRAGMENT } from '../utility/query/cartQueryInfo';

export const SET_SHIPPING_ADDR_MUTATION = `
mutation setShippingAddress(
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
  $saveInBook: Boolean
) {
  setShippingAddressesOnCart(
    input: {
      cart_id: $cartId
      shipping_addresses: [{
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
      }]
    }
  ) {
    cart {
      ${CART_DATA_FRAGMENT}
    }
  }
}`;
