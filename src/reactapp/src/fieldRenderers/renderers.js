import {
  ConfigMultiline,
  ConfigTextInput,
  ConfigSelectInput,
} from '../components/common/Form';
import { _emptyFunc } from '../utils';
import { FieldType } from '../utils/field';
import RegionRenderer from '../components/address/components/RegionRenderer';
import CountryRenderer from '../components/address/components/CountryRenderer';

class FieldRenderer {
  rendererList = [];

  constructor() {
    this.#registerDefaultRenderers();
  }

  register(renderer, sortOrder = 100, conditionCallback = _emptyFunc()) {
    const newRenderer = {
      renderer,
      sortOrder,
      canRenderField: conditionCallback,
    };
    this.rendererList = [...this.rendererList, newRenderer].sort(
      (renderer1, renderer2) => renderer1.sortOrder - renderer2.sortOrder
    );
  }

  getRendererForField(field) {
    // eslint-disable-next-line no-restricted-syntax
    for (const renderer of this.rendererList) {
      if (renderer.canRenderField(field)) {
        return renderer.renderer;
      }
    }

    return false;
  }

  #registerDefaultRenderers() {
    this.register(CountryRenderer, 10, (field) => field.code === 'country_id');
    this.register(RegionRenderer, 20, (field) => field.code === 'region');
    this.register(ConfigTextInput, 30, (field) => FieldType.isText(field.type));
    this.register(ConfigSelectInput, 10, (field) =>
      FieldType.isSelect(field.type)
    );
    this.register(ConfigMultiline, 10, (field) =>
      FieldType.isMultiline(field.type)
    );
  }
}

export const addressFieldRenderer = new FieldRenderer();
