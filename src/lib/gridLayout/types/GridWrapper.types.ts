import type { ExtractPropTypes, PropType } from 'vue';
import type { Layout } from '../helpers/utils';

export const gridWrapperProps = {
  layout: { type: Object as PropType<Layout>, require: true },
  isStatic: { type: Boolean, require: false, default: false },
  verticalCompact: { type: Boolean, require: false, default: true },
  debugConsole: { type: Boolean, require: false, default: false },
  colNum: { type: Number, require: false, default: 12 },
  rowHeight: { type: Number, require: false, default: 150 },
  margin: { type: Array, require: false, default: () => [10, 10] },
  themeName: { type: [String, null], require: false, default: null }
};
export type GridWrapperProps = Partial<ExtractPropTypes<typeof gridWrapperProps>>;
