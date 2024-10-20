import { _objToArray } from '../../../utils';
import { FieldConfig } from '../../../utils/field';
import { getAddressConfigByFormId } from '../../../utils/address';
import { addressFieldRenderer } from '../../../fieldRenderers/renderers';

export default function useAddressFieldRenderer(addressFormId) {
  const addressTypeConfig = getAddressConfigByFormId(addressFormId);
  console.log({ addressTypeConfig });

  const addressFields = _objToArray(addressTypeConfig)
    .sort((field1, field2) => field1.sortOrder - field2.sortOrder)
    .map((field) => ({
      config: FieldConfig.create(field, addressFormId),
      FieldRenderer: addressFieldRenderer.getRendererForField(field),
    }))
    .filter((field) => !!field.FieldRenderer);

  return addressFields;
}
