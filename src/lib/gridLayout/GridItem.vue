<script lang="ts">
// @ts-nocheck
import {
  defineComponent,
  computed,
  ref,
  toRefs,
  reactive,
  watch,
  onMounted,
  inject,
  onBeforeUnmount,
} from 'vue';
import interact from 'interactjs';
import { setTopLeft, setTopRight, setTransformRtl, setTransform } from './helpers/utils';
import { offsetXYFromParentOf, createCoreData } from './helpers/draggableUtils';
import type { GridState } from './types/GridItem.types';
import { gridItemProps } from './types/GridItem.types';

export default defineComponent({
  name: 'GridItem',

  props: gridItemProps,

  emits: ['dragEvent', 'resizeEvent'],

  setup(props, { expose, emit }) {
    const containerWidth = inject<number>('containerWidth')! as number;
    const cols = inject<number>('cols')! as number;
    const rowHeight = inject<number>('rowHeight')! as number;
    const isStatic = inject<number>('isStatic')! as boolean;
    const margin = inject<[number, number]>('margin')! as [number, number];

    const interactElement = ref<HTMLElement>();
    const interactObj = ref<any>();

    const propsI = computed(() => props.i);
    const propsX = computed(() => props.x);
    const propsY = computed(() => props.y);
    const propsW = computed(() => props.w);
    const propsH = computed(() => props.h);
    const propsMinW = computed(() => props.minW);
    const propsMaxW = computed(() => props.maxW);
    const propsMinH = computed(() => props.minH);
    const propsMaxH = computed(() => props.maxH);

    const renderRtl = false;
    const classObj = computed(() => ({
      static: isStatic.value ?? false,
    }));

    const state = reactive<GridState>({
      maxRows: Infinity,
      draggable: null,
      resizable: null,
      // state: true,
      isDragging: false,
      dragging: { left: 0, top: 0 },
      isResizing: false,
      resizing: { width: 0, height: 0 },
      lastX: NaN,
      lastY: NaN,
      lastW: NaN,
      lastH: NaN,
      style: {},
      rtl: false,
      dragEventSet: false,
      resizeEventSet: false,
      previousW: 0,
      previousH: 0,
      previousX: 0,
      previousY: 0,
      innerX: 0,
      innerY: 0,
      innerW: 0,
      innerH: 0,

      useCssTransforms: true,
    });

    watch(
      [propsX, propsY, propsW, propsH],
      ([x, y, w, h]) => {
        state.innerX = x ?? state.innerX;
        state.innerY = y ?? state.innerY;
        state.innerW = w ?? state.innerW;
        state.innerH = h ?? state.innerH;
        createStyle();
      },
      {
        immediate: true,
      }
    );

    function handleDrag(event: any) {
      if (isStatic.value) return;
      // if (this.isResizing) return;
      const position = offsetXYFromParentOf(event);
      // Get the current drag point from the event. This is used as the offset.
      if (position === null) return; // not possible but satisfies flow
      const { x, y } = position;
      // let shouldUpdate = false;
      const newPosition = { top: 0, left: 0 };
      switch (event.type) {
        case 'dragstart': {
          state.previousX = state.innerX;
          state.previousY = state.innerY;
          const { offsetParent } = event.target;
          const parentRect = offsetParent.getBoundingClientRect();
          const clientRect = event.target.getBoundingClientRect();
          if (renderRtl) {
            newPosition.left = (clientRect.right - parentRect.right) * -1;
          } else {
            newPosition.left = clientRect.left - parentRect.left;
          }
          // FIX: add scrollTop to fix translate in Y
          newPosition.top = clientRect.top - parentRect.top + offsetParent.scrollTop;
          state.dragging = newPosition;
          state.isDragging = true;
          break;
        }
        case 'dragmove': {
          const coreEvent = createCoreData(state.lastX, state.lastY, x, y);
          // Add rtl support
          if (state.dragging) {
            if (renderRtl) {
              newPosition.left = state.dragging.left - coreEvent.deltaX;
            } else {
              newPosition.left = state.dragging.left + coreEvent.deltaX;
            }
            newPosition.top = state.dragging.top + coreEvent.deltaY;

            state.dragging = newPosition;
          }
          break;
        }
        case 'dragend': {
          if (!state.isDragging) return;
          const { offsetParent } = event.target;
          const parentRect = offsetParent.getBoundingClientRect();
          const clientRect = event.target.getBoundingClientRect();
          // Add rtl support
          if (renderRtl) {
            newPosition.left = (clientRect.right - parentRect.right) * -1;
          } else {
            newPosition.left = clientRect.left - parentRect.left;
          }
          // FIX: add scrollTop to fix translate in Y
          newPosition.top = clientRect.top - parentRect.top + offsetParent.scrollTop;
          state.dragging = null;
          state.isDragging = false;
          // shouldUpdate = true;
          break;
        }
      }

      const pos = calcXY(newPosition.top, newPosition.left);
      state.lastX = x;
      state.lastY = y;

      emit('dragEvent', event.type, propsI.value, pos.x, pos.y, state.innerH, state.innerW);
    }

    function handleResize(event: any) {
      if (isStatic.value) return;
      const position = offsetXYFromParentOf(event);
      // Get the current drag point from the event. This is used as the offset.
      if (position == null) return; // not possible but satisfies flow
      const { x, y } = position;
      const newSize = { width: 0, height: 0 };
      let pos;
      switch (event.type) {
        case 'resizestart': {
          state.previousW = state.innerW;
          state.previousH = state.innerH;
          pos = calcPosition(state.innerX, state.innerY, state.innerW, state.innerH);
          newSize.width = pos.width;
          newSize.height = pos.height;
          state.resizing = newSize;
          state.isResizing = true;
          break;
        }
        case 'resizemove': {
          const coreEvent = createCoreData(state.lastW, state.lastH, x, y);
          if (renderRtl) {
            newSize.width = state.resizing.width - coreEvent.deltaX;
          } else {
            newSize.width = state.resizing.width + coreEvent.deltaX;
          }
          newSize.height = state.resizing.height + coreEvent.deltaY;
          state.resizing = newSize;
          break;
        }
        case 'resizeend': {
          pos = calcPosition(state.innerX, state.innerY, state.innerW, state.innerH);
          newSize.width = pos.width;
          newSize.height = pos.height;
          state.resizing = null;
          state.isResizing = false;
          break;
        }
      }
      // Get new WH
      pos = calcWH(newSize.height, newSize.width);
      pos.w = pos.w < propsMinW.value ? propsMinW.value : pos.w;
      pos.w = pos.w > propsMaxW.value ? propsMaxW.value : pos.w;
      pos.h = pos.h < propsMinH.value ? propsMinH.value : pos.h;
      pos.h = pos.h > propsMaxH.value ? propsMaxH.value : pos.h;
      if (pos.h < 1) {
        pos.h = 1;
      }
      if (pos.w < 1) {
        pos.w = 1;
      }
      state.lastW = x;
      state.lastH = y;

      emit('resizeEvent', event.type, propsI.value, state.innerX, state.innerY, pos.h, pos.w);
    }

    function calcPosition(x: number, y: number, w: number, h: number) {
      const colWidth = calcColWidth();
      // add rtl support
      let out;
      if (renderRtl) {
        out = {
          right: Math.round(colWidth * x + (x + 1) * margin.value[0]),
          top: Math.round(rowHeight.value * y + (y + 1) * margin.value[1]),
          // 0 * Infinity === NaN, which causes problems with resize constriants;
          // Fix this if it occurs.
          // Note we do it here rather than later because Math.round(Infinity) causes deopt
          width:
            w === Infinity ? w : Math.round(colWidth * w + Math.max(0, w - 1) * margin.value[0]),
          height:
            h === Infinity
              ? h
              : Math.round(rowHeight.value * h + Math.max(0, h - 1) * margin.value[1]),
        };
      } else {
        out = {
          left: Math.round(colWidth * x + (x + 1) * margin.value[0]),
          top: Math.round(rowHeight.value * y + (y + 1) * margin.value[1]),
          // 0 * Infinity === NaN, which causes problems with resize constriants;
          // Fix this if it occurs.
          // Note we do it here rather than later because Math.round(Infinity) causes deopt
          width:
            w === Infinity ? w : Math.round(colWidth * w + Math.max(0, w - 1) * margin.value[0]),
          height:
            h === Infinity
              ? h
              : Math.round(rowHeight.value * h + Math.max(0, h - 1) * margin.value[1]),
        };
      }
      return out;
    }

    function createStyle() {
      if (propsX.value + propsW.value > cols.value) {
        state.innerX = 0;
        state.innerW = propsW.value > cols.value ? cols.value : propsW.value;
      } else {
        state.innerX = propsX.value;
        state.innerW = propsW.value;
      }
      const pos = calcPosition(state.innerX, state.innerY, state.innerW, state.innerH);
      if (state.isDragging) {
        pos.top = state.dragging.top;
        // Add rtl support
        if (renderRtl) {
          pos.right = state.dragging.left;
        } else {
          pos.left = state.dragging.left;
        }
      }
      if (state.isResizing) {
        pos.width = state.resizing.width;
        pos.height = state.resizing.height;
      }

      let style;
      // CSS Transforms support (default)
      if (state.useCssTransforms) {
        // Add rtl support
        if (renderRtl) {
          style = setTransformRtl(pos.top, pos.right, pos.width, pos.height);
        } else {
          style = setTransform(pos.top, pos.left, pos.width, pos.height);
        }
      } else {
        // top,left (slow)
        // Add rtl support
        if (renderRtl) {
          style = setTopRight(pos.top, pos.right, pos.width, pos.height);
        } else {
          style = setTopLeft(pos.top, pos.left, pos.width, pos.height);
        }
      }
      state.style = style;
    }

    // Helper for generating column width
    function calcColWidth() {
      const colWidth = (containerWidth.value - margin.value[0] * (cols.value + 1)) / cols.value;
      return colWidth;
    }

    // TODO check if this function needs change in order to support rtl.
    function calcXY(top, left) {
      const colWidth = calcColWidth();
      // left = colWidth * x + margin * (x + 1)
      // l = cx + m(x+1)
      // l = cx + mx + m
      // l - m = cx + mx
      // l - m = x(c + m)
      // (l - m) / (c + m) = x
      // x = (left - margin) / (coldWidth + margin)
      let x = Math.round((left - margin.value[0]) / (colWidth + margin.value[0]));
      let y = Math.round((top - margin.value[1]) / (rowHeight.value + margin.value[1]));
      // Capping
      x = Math.max(Math.min(x, cols.value - state.innerW), 0);
      y = Math.max(Math.min(y, state.maxRows - state.innerH), 0);
      return { x, y };
    }

    /**
     * Given a height and width in pixel values, calculate grid units.
     * @param  {Number} height Height in pixels.
     * @param  {Number} width  Width in pixels.
     * @return {Object} w, h as grid units.
     */
    function calcWH(height: number, width: number) {
      const colWidth = calcColWidth();
      // width = colWidth * w - (margin * (w - 1))
      // ...
      // w = (width + margin) / (colWidth + margin)
      let w = Math.round((width + margin.value[0]) / (colWidth + margin.value[0]));
      let h = Math.round((height + margin.value[1]) / (rowHeight.value + margin.value[1]));
      // Capping
      w = Math.max(Math.min(w, cols.value - state.innerX), 0);
      h = Math.max(Math.min(h, state.maxRows - state.innerY), 0);

      return { w, h };
    }

    function createInteractObj() {
      if (isStatic.value) return;
      interactObj.value = interact(interactElement.value!);

      interactObj.value.draggable({
        ignoreFrom: 'a, button',
      });
      interactObj.value.on('dragstart dragmove dragend', (event) => {
        handleDrag(event);
      });

      interactObj.value.resizable({
        edges: {
          top: false,
          left: false,
          bottom: '.vue-resizable-handle',
          right: '.vue-resizable-handle',
        },
        listeners: {
          move: function (event) {
            let { x, y } = event.target.dataset;

            x = (parseFloat(x) || 0) + event.deltaRect.left;
            y = (parseFloat(y) || 0) + event.deltaRect.top;

            Object.assign(event.target.style, {
              width: `${event.rect.width}px`,
              height: `${event.rect.height}px`,
              transform: `translate(${x}px, ${y}px)`,
            });

            Object.assign(event.target.dataset, { x, y });
          },
        },
      });
      interactObj.value.on('resizestart resizemove resizeend', (event) => {
        handleResize(event);
      });
    }

    onMounted(() => {
      createInteractObj();
    });

    onBeforeUnmount(() => {
      if (!isStatic.value) interactObj.value.unset();
    });

    expose({ createStyle });

    return {
      ...toRefs(state),
      // ...{ propsI, propsX, propsY, propsW, propsH }, // NOTE: FOR DEBUG
      propsI,
      isStatic,
      classObj,
      interactElement,
      interactObj,
    };
  },
});
</script>

<template>
  <div
    ref="interactElement"
    class="vue-grid-item"
    :class="classObj"
    :style="style"
    :data-grid-index="propsI"
  >
    <slot></slot>
    <span ref="dragHandle" class="vue-resizable-handle"></span>
  </div>
</template>

<style scoped>
@import url('./styles/grid-item.css');
</style>
