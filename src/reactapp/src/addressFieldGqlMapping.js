/**
 * Here it maps field config data with graphql data.
 *
 * If you have custom fields, then most probably you need to pass this data
 * via graphql (using custom implementation) and then if it is a part of graphql
 * repsonse `cart.billing_address` or `cart.shipping_address[0]`, then you can
 * add the corresponding mapping here.
 *
 * Key ==> Field config reference
 * Value ==> Graphql reference.
 */
export default {
  city: 'city',
  street: 'street',
  company: 'company',
  lastname: 'lastname',
  postcode: 'postcode',
  region: 'region.code',
  firstname: 'firstname',
  telephone: 'telephone',
  country_id: 'country.code',
  // vat_id: 'vat_id',
};
