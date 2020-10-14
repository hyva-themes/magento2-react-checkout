import {cartQueryResponse} from "./cartQueryResponse";

export const getCustomerCartQuery = `query {
  customerCart {
    ${cartQueryResponse}
  }
}`;
