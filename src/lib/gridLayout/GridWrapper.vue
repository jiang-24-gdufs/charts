<script lang="ts">
// @ts-nocheck
import type { ComputedRef } from 'vue';
import {
  onMounted,
  ref,
  provide,
  reactive,
  toRefs,
  defineComponent,
  nextTick,
  onBeforeUnmount,
  readonly,
  watch,
  computed,
} from 'vue';
import elementResizeDetectorMaker from 'element-resize-detector';
import GridLayout from '@/lib/gridLayout/GridLayout.vue';
import GridItem from '@/lib/gridLayout/GridItem.vue';
import type { Layout } from '@/lib/gridLayout/helpers/utils';
import {
  // bottom, // TODO: update height when drag out from the bottom border
  compact,
  getLayoutItem,
  moveElement,
  validateLayout,
} from '@/lib/gridLayout/helpers/utils';
import { gridWrapperProps } from './types/GridWrapper.types';

export default defineComponent({
  name: 'GridWrapper',
  components: {
    GridLayout,
    GridItem,
  },

  emit: ['layout-updated'],

  props: gridWrapperProps,

  setup(props, { emit }) {
    const state = reactive({
      placeholder: {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        i: '-1',
      },
      isDragging: false,
    });
    const GridLayoutRef = ref();
    const workbenchRef = ref();
    const gridItemRef = ref();
    const containerWidth = ref<number>(0);
    const layout = computed(() => props.layout) as ComputedRef<Layout>;
    const cols = computed(() => props.colNum);
    const margin = computed(() => props.margin);
    const rowHeight = computed(() => props.rowHeight);

    validateLayout(layout.value);

    function dragEvent(eventName, id, x, y, h, w) {
      if (eventName === 'dragmove' || eventName === 'dragstart') {
        state.placeholder.x = x;
        state.placeholder.y = y;
        state.placeholder.w = w;
        state.placeholder.h = h;
        nextTick(() => {
          state.isDragging = true;
        });
        // state.eventBus.$emit('updateWidth', state.width);
      } else {
        nextTick(() => {
          state.isDragging = false;
        });
      }
      let l = getLayoutItem(layout.value, id);
      // GetLayoutItem sometimes returns null object
      if (l === undefined || l === null) {
        l = { x: 0, y: 0 };
      }
      l.x = x;
      l.y = y;
      // Move the element to the dragged location.
      /* layout.value =  */ moveElement(layout.value, l, x, y, true);
      compact(layout.value, true /* verticalCompact */);
      // needed because vue can't detect changes on array element properties
      updateGridItem();

      // this.updateHeight();
      if (eventName === 'dragend') emit('layout-updated', layout.value);
    }

    function resizeEvent(eventName, id, x, y, h, w) {
      if (eventName === 'resizestart' || eventName === 'resizemove') {
        state.placeholder.x = x;
        state.placeholder.y = y;
        state.placeholder.w = w;
        state.placeholder.h = h;
        nextTick(() => {
          state.isDragging = true;
        });
      } else {
        nextTick(() => {
          state.isDragging = false;
        });
      }
      let l = getLayoutItem(layout.value, id);
      // GetLayoutItem sometimes return null object
      if (l === undefined || l === null) {
        l = { h: 0, w: 0 };
      }
      l.h = h;
      l.w = w;

      // if (this.responsive) {
      //   this.responsiveGridLayout();
      // } else {
      compact(layout.value, true /* verticalCompact */);
      updateGridItem();

      // updateHeight();

      if (eventName === 'resizeend') emit('layout-updated', layout.value);
    }

    function updateGridItem() {
      gridItemRef.value.forEach((gridItem) => {
        gridItem.createStyle();
      });
    }

    function onWindowResize() {
      containerWidth.value = +getComputedStyle(workbenchRef.value).width.slice(0, -2);
    }

    watch(
      () => [...margin.value],
      () => {
        compact(layout.value, true /* verticalCompact */);
        updateGridItem();
      }
    );

    watch([containerWidth, cols, () => [...margin.value], rowHeight], () => {
      // moveElement(layout.value, l, x, y, true);
      compact(layout.value, true /* verticalCompact */);
      updateGridItem();
    });

    onMounted(() => {
      containerWidth.value = +getComputedStyle(workbenchRef.value).width.slice(0, -2);

      nextTick(() => {
        const erd = elementResizeDetectorMaker({
          strategy: 'scroll', // <- For ultra performance.
        });
        erd.listenTo(GridLayoutRef.value.$el, () => {
          updateGridItem();
        });
      });

      window.addEventListener('resize', onWindowResize, false);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', onWindowResize);
    });

    provide('containerWidth', readonly(containerWidth));
    provide('cols', readonly(cols));
    provide('margin', readonly(margin));
    provide('rowHeight', readonly(rowHeight));

    return {
      layout,
      containerWidth,
      GridLayoutRef,
      workbenchRef,
      gridItemRef,
      dragEvent,
      resizeEvent,
      ...toRefs(state),
    };
  },
});
</script>

<template>
  <div ref="workbenchRef" class="vue-grid-wrapper">
    <!--布局容器-->
    <grid-layout
      ref="GridLayoutRef"
      style="height: 100%"
      :layout="layout"
      :placeholder="placeholder"
      :is-dragging="isDragging"
    >
      <grid-item
        v-for="(item, index) in layout"
        ref="gridItemRef"
        :key="index"
        style="border: 1px dashed #17233d"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        @drag-event="dragEvent"
        @resize-event="resizeEvent"
      />
    </grid-layout>
  </div>
</template>

<style scoped>
.vue-grid-wrapper {
  height: 100%;
  overflow: auto;
}
</style>
