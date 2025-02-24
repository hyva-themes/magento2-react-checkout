import { _keys } from '../../../utils';

const mutationInputTypeMapper = {
  city: 'String!',
  company: 'String',
  country_code: 'String!',
  fax: 'String',
  firstname: 'String!',
  lastname: 'String!',
  middlename: 'String',
  postcode: 'String',
  prefix: 'String',
  region: 'String',
  region_id: 'Int',
  save_in_address_book: 'Boolean',
  street: '[String]!',
  suffix: 'String',
  telephone: 'String',
  vat_id: 'String',
  cartId: 'String!',
};

const variableToAddressInputMapper = {
  city: 'city',
  company: 'company',
  country_id: 'country_code',
  fax: 'fax',
  firstname: 'firstname',
  lastname: 'lastname',
  middlename: 'middlename',
  postcode: 'postcode',
  prefix: 'prefix',
  region: 'region',
  regionId: 'region_id',
  saveInBook: 'save_in_address_book',
  street: 'street',
  suffix: 'suffix',
  telephone: 'telephone',
  vat_id: 'vat_id',
  cartId: 'cartId',
};

export function prepareInputParamsForAddressMutation(variables) {
  return _keys(variables).reduce((accumulator, variable) => {
    const inputName = variableToAddressInputMapper[variable];

    if (!inputName) {
      return accumulator;
    }

    // eslint-disable-next-line no-param-reassign
    accumulator =
      `${accumulator}\n` +
      `$${variable}: ${mutationInputTypeMapper[inputName]}`;

    return accumulator;
  }, '');
}

export function prepareInputVariablesForAddressMutation(variables) {
  return _keys(variables).reduce((accumulator, variable) => {
    const inputName = variableToAddressInputMapper[variable];

    if (!inputName || variable === 'cartId') {
      return accumulator;
    }

    // eslint-disable-next-line no-param-reassign
    accumulator = `${accumulator}\n${inputName}: $${variable}`;

    return accumulator;
  }, '');
}
