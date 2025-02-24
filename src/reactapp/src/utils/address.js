import { get as _get } from 'lodash-es';
import { bool as YupBool, array as YupArray } from 'yup';

import env from './env';
import { __ } from '../i18n';
import RootElement from './rootElement';
import LocalStorage from './localStorage';
import { prepareFullName } from './customer';
import { FieldConfig, FieldType } from './field';
import { _keys, _isNumber, _toString, _cleanObjByKeys } from './index';
import { yupSchemaByFieldType, yupValidationRules } from './validation';
import { BILLING_ADDR_FORM, config, SHIPPING_ADDR_FORM } from '../config';

const checkoutConfig = RootElement.getCheckoutConfig();

export const initialCountry =
  env.defaultCountry ||
  RootElement.getDefaultCountryId() ||
  config.defaultCountry;

export const CART_SHIPPING_ADDRESS = 'cart_shipping_address';

export const billingSameAsShippingField = `${BILLING_ADDR_FORM}.isSameAsShipping`;

export const addressConfig = checkoutConfig.address || {};

export const addressTypeMapper = {
  [BILLING_ADDR_FORM]: 'billing',
  [SHIPPING_ADDR_FORM]: 'shipping',
};

export function isCartAddressValid(address) {
  return !!(
    address &&
    address.firstname &&
    (address.country_id || address.country?.code)
  );
}

export function isValidCustomerAddressId(addressId) {
  // Number.isNaN should not use here. both functions works differently.
  // eslint-disable-next-line no-restricted-globals
  return addressId && !isNaN(addressId);
}

export function formatAddressListToCardData(addressList, stateList) {
  return addressList.map((addr) => {
    const {
      id,
      city = '',
      telephone = '',
      street = [],
      region = '',
      postcode = '',
      company = '',
      country_id: countryId = '',
      firstname = '',
      lastname = '',
      regionLabel = '',
      countryCode = '',
    } = addr;
    const countryRegions = _get(stateList, `${countryId}`, []);
    const countryRegion = countryRegions.find((state) => state.code === region);
    return {
      id: _toString(id),
      address: [
        prepareFullName({ firstname, lastname }),
        company,
        ...street,
        __('%1 %2', postcode, city),
        regionLabel || _get(countryRegion, 'name'),
        countryCode || countryId,
        __('Phone: %1', telephone),
      ].filter((i) => !!i),
    };
  });
}

export function addressInitValues(formId) {
  const fieldsConfig = addressConfig[addressTypeMapper[formId]];

  return _keys(fieldsConfig).reduce((accumulator, fieldCode) => {
    accumulator[fieldCode] = FieldType.getInitialValue(fieldsConfig[fieldCode]);

    return accumulator;
  }, {});
}

export function getAddressConfigByFormId(formId) {
  const addressType = _get(addressTypeMapper, formId);

  return _get(addressConfig, addressType) || {};
}

function applyValidationRulesToSchema(fieldSchema, fieldValidationRules) {
  return _keys(fieldValidationRules).reduce((schema, ruleName) => {
    if (yupValidationRules[ruleName]) {
      // eslint-disable-next-line no-param-reassign
      schema = yupValidationRules[ruleName](
        schema,
        fieldValidationRules[ruleName]
      );
    }

    return schema;
  }, fieldSchema);
}

function applyMultilineValidationRules(fieldConfig) {
  const multiFieldSchema = {};
  const { validationRules } = fieldConfig;

  // Declare multile line field as array schema
  multiFieldSchema[fieldConfig.code] = YupArray();

  // Define string schema for each line with availabled validation rules
  fieldConfig.lineNumberArray.forEach((lineNumber) => {
    multiFieldSchema[`${fieldConfig.code}[${lineNumber}]`] =
      applyValidationRulesToSchema(
        yupSchemaByFieldType.text,
        validationRules[lineNumber]
      );
  });

  // Give label for each line
  (fieldConfig.label || []).forEach((label, lineNumber) => {
    multiFieldSchema[`${fieldConfig.code}[${lineNumber}]`] =
      multiFieldSchema[`${fieldConfig.code}[${lineNumber}]`].label(label);
  });

  return multiFieldSchema;
}

function withAdditionalInitalSchema(schema) {
  const additionalSchema = {
    isSameAsShipping: YupBool(),
    saveInBook: YupBool(),
  };

  return { ...schema, ...additionalSchema };
}

export function initialAddressValidationShemaFromFieldConfig(addressFormId) {
  const addressTypeConfig = getAddressConfigByFormId(addressFormId);

  const addressValidationSchema = _keys(addressTypeConfig).reduce(
    (accumulator, fieldCode) => {
      const fieldConfig = FieldConfig.create(
        addressTypeConfig[fieldCode],
        addressFormId
      );
      let fieldSchema = yupSchemaByFieldType[fieldConfig.type];
      const fieldValidationRules = fieldConfig.validationRules || [];

      // If no schema available for the field type, then return early.
      if (!fieldSchema) {
        return accumulator;
      }

      // Multiline schema rule construction is complex; So deal it separately.
      if (fieldConfig.isMultilineField()) {
        return {
          ...accumulator,
          ...applyMultilineValidationRules(fieldConfig),
        };
      }

      // Give label for error messages. It will be used in the error message.
      // eslint-disable-next-line no-const-assign
      fieldSchema = fieldSchema.label(fieldConfig.label);

      // Prepare validation schema for the field.
      accumulator[fieldCode] = applyValidationRulesToSchema(
        fieldSchema,
        fieldValidationRules
      );

      return accumulator;
    },
    {}
  );

  return withAdditionalInitalSchema(addressValidationSchema);
}

export function addressInitialValidationSchema(formId) {
  return {
    ...initialAddressValidationShemaFromFieldConfig(formId),
    isSameAsShipping: YupBool(),
    saveInBook: YupBool(),
  };
}

export function prepareFormAddressFromCartAddress(address, selectedAddressId) {
  const newAddress = { ...address };
  const { countryCode, regionCode } = address;

  if (countryCode) {
    newAddress.country = countryCode;
  }
  if (regionCode) {
    newAddress.region = regionCode;
  }
  if (selectedAddressId) {
    newAddress.selectedAddress = selectedAddressId;
  }

  const keysToRemove = [
    'fullName',
    'middlename',
    'regionCode',
    'countryCode',
    'regionLabel',
    'isDefaultBilling',
    'isDefaultShipping',
  ];

  return {
    ...addressInitValues,
    ..._cleanObjByKeys(newAddress, keysToRemove),
  };
}

export function isMostRecentAddress(addressId) {
  const recentAddressList = LocalStorage.getMostRecentlyUsedAddressList();

  return !!recentAddressList[addressId];
}

export function prepareAddressForSaving(addressToSave, regionData) {
  // Region code some times can be integer instead of string eg: FR
  // In those cases, use "region_id" instead of "region" input in GQL in order
  // to update the address data.
  if (_isNumber(regionData?.code)) {
    return {
      ...addressToSave,
      region: '',
      regionId: regionData?.id,
    };
  }

  return addressToSave;
}
