import customRenderers from './customRenderers';
import { FieldRenderer } from './FieldRenderer';

export const addressFieldRenderer = new FieldRenderer();

/**
 * Here adds custom field renderers for address form.
 */
customRenderers.forEach((customrenderer) => {
  const { renderer, sortOrder, condition } = customrenderer;
  addressFieldRenderer.register(renderer, sortOrder, condition);
});
