import { get as _get } from 'lodash-es';

import {
  ConfigMultiline,
  ConfigTextInput,
  ConfigSelectInput,
} from '../../common/Form';
import { _objToArray } from '../../../utils';
import RootElement from '../../../utils/rootElement';
import { createFieldConfig } from '../../../utils/field';
import RegionRenderer from '../components/RegionRenderer';
import CountryRenderer from '../components/CountryRenderer';
import { BILLING_ADDR_FORM, SHIPPING_ADDR_FORM } from '../../../config';

const checkoutConfig = RootElement.getCheckoutConfig();
const addressConfig = checkoutConfig.address || {};

const addressTypeMapper = {
  [BILLING_ADDR_FORM]: 'billing',
  [SHIPPING_ADDR_FORM]: 'shipping',
};

function getAddressFieldRendererComponent(field) {
  if (field.code === 'country_id') {
    return CountryRenderer;
  }

  if (field.code === 'region') {
    return RegionRenderer;
  }

  if (field.type === 'text') {
    return ConfigTextInput;
  }

  if (field.type === 'select') {
    return ConfigSelectInput;
  }

  if (field.type === 'multiline') {
    return ConfigMultiline;
  }

  return null;
}

export default function useAddressFieldRenderer(addressFormId) {
  const addressType = _get(addressTypeMapper, addressFormId);
  const addressTypeConfig = _get(addressConfig, addressType) || {};
  console.log({ addressTypeConfig });

  const addressFields = _objToArray(addressTypeConfig)
    .sort((field1, field2) => field1.sortOrder - field2.sortOrder)
    .map((field) => ({
      config: createFieldConfig(field),
      FieldRenderer: getAddressFieldRendererComponent(field),
    }))
    .filter((field) => !!field.FieldRenderer);

  return addressFields;
}
