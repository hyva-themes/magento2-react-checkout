import {
  ConfigMultiline,
  ConfigTextInput,
  ConfigSelectInput,
} from '../components/common/Form';
import { _emptyFunc } from '../utils';
import { FieldType } from '../utils/field';

export class FieldRenderer {
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
    this.register(ConfigTextInput, 350, (field) =>
      FieldType.isText(field.type)
    );
    this.register(ConfigSelectInput, 400, (field) =>
      FieldType.isSelect(field.type)
    );
    this.register(ConfigMultiline, 300, (field) =>
      FieldType.isMultiline(field.type)
    );
  }
}
