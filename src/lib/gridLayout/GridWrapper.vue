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
// import elementResizeDetectorMaker from 'element-resize-detector';
import { debounce } from 'lodash';
import GridLayout from '@/lib/gridLayout/GridLayout.vue';
import GridItem from '@/lib/gridLayout/GridItem.vue';
import RenderGridItem from '@/lib/gridLayout/RenderGridItem.vue';
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
    RenderGridItem,
  },

  emit: ['layout-updated'],

  props: gridWrapperProps,

  setup(props, { emit, expose }) {
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
    const isStatic = computed(() => props.isStatic);

    const deUpdateItemSize = debounce(updateItemSize, 100);
    const deOnWindowResize = debounce(onWindowResize, 100);

    validateLayout(layout.value);

    function campactLayout() {
      compact(layout.value, true /* verticalCompact */);
    }

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

      moveElement(layout.value, l, x, y, true);

      // NOTE: NOT COMPACT IN DRAG? BUT COMPACT AFTER ADDED
      campactLayout();
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
      campactLayout();
      updateGridItem();
      console.log('%cGridWrapper.vue line:125 l', 'color: #007acc;', l);

      // updateHeight();

      // updateSize
      deUpdateItemSize(l);

      // TODO: save in STORE

      if (eventName === 'resizeend') emit('layout-updated', layout.value);
    }

    function updateGridItem() {
      if (gridItemRef.value) {

        gridItemRef.value.forEach((gridItem) => {
          gridItem.createStyle();
        });
      }
    }

    function updateItemSize(item) {
      if (item.i) {
        const gridItem = document.querySelector(`[data-grid-index="${item.i}"].vue-grid-item`);
        const { width, height } = gridItem.style;
        item.initOption = {
          width: +width.slice(0, -2),
          height: +height.slice(0, -2),
        };
      }
    }

    function onWindowResize() {
      containerWidth.value = +getComputedStyle(workbenchRef.value).width.slice(0, -2);
    }
    watch(
      () => [...margin.value],
      () => {
        campactLayout();
        updateGridItem();
      }
    );

    // 监听layout的个数, 而不是深度监听Layout, 以提升性能
    watch(
      () => layout.value.length,
      () => {
        campactLayout();
        updateGridItem();
      }
    );

    watch([containerWidth, cols, rowHeight], () => {
      // moveElement(layout.value, l, x, y, true);
      campactLayout();
      updateGridItem();
    });

    onMounted(() => {
      containerWidth.value = +getComputedStyle(workbenchRef.value).width.slice(0, -2);

      nextTick(() => {
        // const erd = elementResizeDetectorMaker({
        //   strategy: 'scroll', // <- For ultra performance.
        // });
        // erd.listenTo(GridLayoutRef.value.$el, () => {
        //   updateGridItem();
        // });
      });

      window.addEventListener('resize', deOnWindowResize, false);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', deOnWindowResize);
    });

    provide('containerWidth', readonly(containerWidth));
    provide('cols', readonly(cols));
    provide('margin', readonly(margin));
    provide('rowHeight', readonly(rowHeight));
    provide('isStatic', readonly(isStatic));

    expose({ campactLayout });

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
      <!-- style="border: 1px dashed #17233d" -->
      <grid-item
        v-for="item of layout"
        ref="gridItemRef"
        :key="item.i"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        @drag-event="dragEvent"
        @resize-event="resizeEvent"
      >
        <render-grid-item ref="gridGridItemRef" :render-data="item" />
        <!-- :base-url="baseUrl"
          :reporting="data"
          :global-config="globalConfig" -->
      </grid-item>
    </grid-layout>
  </div>
</template>

<style scoped>
.vue-grid-wrapper {
  height: 100%;
  overflow: auto;
}
</style>
