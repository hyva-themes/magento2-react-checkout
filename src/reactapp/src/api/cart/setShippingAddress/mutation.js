import {
  prepareInputParamsForAddressMutation,
  prepareInputVariablesForAddressMutation,
} from '../utility/address';
import { CART_DATA_FRAGMENT } from '../utility/query/cartQueryInfo';

export function getShippingAddressMutation(variables) {
  const inputParams = prepareInputParamsForAddressMutation(variables);
  const addressInput = prepareInputVariablesForAddressMutation(variables);

  return `
mutation setShippingAddressMutation(${inputParams}) {
  setShippingAddressesOnCart(
    input: {
      cart_id: $cartId
      shipping_addresses: [{
      	address: {
          ${addressInput}
        }
      }]
    }
  ) {
    cart {
      ${CART_DATA_FRAGMENT}
    }
  }
}`;
}

export const SET_SHIPPING_ADDR_MUTATION = `
mutation setShippingAddress(
  $cartId: String!
  $firstname: String!
  $lastname: String!
  $company: String
  $street: [String]!
  $city: String!
  $region: String
  $regionId: Int
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
          region_id: $regionId
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
