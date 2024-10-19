import {
  ConfigMultiline,
  ConfigTextInput,
  ConfigSelectInput,
} from '../../common/Form';
import { _objToArray } from '../../../utils';
import { createFieldConfig } from '../../../utils/field';
import RegionRenderer from '../components/RegionRenderer';
import CountryRenderer from '../components/CountryRenderer';
import { getAddressConfigByFormId } from '../../../utils/address';

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
  const addressTypeConfig = getAddressConfigByFormId(addressFormId);
  console.log({ addressTypeConfig });

  const addressFields = _objToArray(addressTypeConfig)
    .sort((field1, field2) => field1.sortOrder - field2.sortOrder)
    .map((field) => ({
      config: createFieldConfig(field, addressFormId),
      FieldRenderer: getAddressFieldRendererComponent(field),
    }))
    .filter((field) => !!field.FieldRenderer);

  return addressFields;
}
