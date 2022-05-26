import type { ExtractPropTypes } from 'vue';

export const gridLayoutProps = {
  placeholder: {
    type: Object,
    required: false,
    default: () => ({
      x: 0,
      y: 0,
      w: 0,
      h: 0,
    }),
  },
  isDragging: { type: Boolean, require: true, default: false },
};
export type GridLayoutProps = Partial<ExtractPropTypes<typeof gridLayoutProps>>;
