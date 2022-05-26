import type { ExtractPropTypes, PropType } from 'vue';
import type { Layout } from '../helpers/utils';

export const gridWrapperProps = {
  layout: { type: Object as PropType<Layout>, require: true },
  colNum: { type: Number, require: false, default: 12 },
  rowHeight: { type: Number, require: false, default: 150 },
  margin: { type: Number, require: false, default: () => [10, 10] },
};
export type GridWrapperProps = Partial<ExtractPropTypes<typeof gridWrapperProps>>;
