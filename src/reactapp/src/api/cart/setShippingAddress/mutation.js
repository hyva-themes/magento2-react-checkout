import cartShippingAddrInfo from '../utility/query/cartShippingAddrInfo';

export const SET_SHIPPING_ADDR_MUTATION = `
mutation setShippingAddress(
  $cartId: String!,
  $firstname: String!,
  $lastname: String!,
  $company: String,
  $street: [String]!,
  $city: String!,
  $region: String,
  $zipcode: String!,
  $country: String!,
  $phone: String!
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
          save_in_address_book: false
        }
      }]
    }
  ) {
    cart {
      ${cartShippingAddrInfo}
    }
  }
}`;
