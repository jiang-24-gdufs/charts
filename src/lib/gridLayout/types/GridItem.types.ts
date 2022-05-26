import type { ExtractPropTypes } from 'vue';

export interface GridState {
  maxRows: number;
  draggable: null;
  resizable: null;
  // state: true,
  isDragging: boolean;
  dragging: { left: number; top: number };
  isResizing: boolean;
  resizing: { width: number; height: number };
  lastX: number;
  lastY: number;
  lastW: number;
  lastH: number;
  style: any;
  rtl: boolean;
  dragEventSet: boolean;
  resizeEventSet: boolean;
  previousW: number /* null */;
  previousH: number /* null */;
  previousX: number /* null */;
  previousY: number /* null */;
  innerX: number /* propsX */;
  innerY: number /* propsY */;
  innerW: number /* propsW */;
  innerH: number /* this.h */;

  useCssTransforms: boolean;
}

export const gridItemProps = {
  i: { type: [String, Number], require: true },
  x: { type: Number, require: true },
  y: { type: Number, require: true },
  w: { type: Number, require: true },
  h: { type: Number, require: true },
  minW: { type: Number, require: false, default: 1 },
  maxW: { type: Number, require: false, default: Infinity },
  minH: { type: Number, require: false, default: 1 },
  maxH: { type: Number, require: false, default: Infinity },
};
export type GridItemProps = Partial<ExtractPropTypes<typeof gridItemProps>>;
