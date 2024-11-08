import RegionRenderer, { regionRendererCondition } from './regionRenderer';
import CountryRenderer, { countryRendererCondition } from './countryRenderer';

/**
 * Holds custom renderers.
 *
 * renderer: React component that will be used to render the field.
 *
 * sortOrder: This defines the priority of the renderer component. All registered
 *     components have a sort order associated with it. When a field looks for
 *     a renderer, it loops through all the registered renderers and find a
 *     suitable renderer that can render the field based on the "condition".
 *     Lower the sort order, higher the chance to use the renderer.
 *
 * condition: This is a callback which determines whether the renderer can be
 *     used to render the field.
 */
export default [
  {
    renderer: CountryRenderer,
    sortOrder: 100,
    condition: countryRendererCondition,
  },
  {
    renderer: RegionRenderer,
    sortOrder: 200,
    condition: regionRendererCondition,
  },
];
