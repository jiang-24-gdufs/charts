import type { ExtractPropTypes } from 'vue';

export const renderGridItemProps = {
  renderData: { type: Object, required: true },
};
export type RenderGridItemProps = Partial<ExtractPropTypes<typeof renderGridItemProps>>;
