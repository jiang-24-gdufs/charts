<script lang="ts">
// @ts-nocheck
import * as echarts from 'echarts';
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
import themes from '@/lib/themes';

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

    'none';
    const renderGridItemRef = ref();
    const GridLayoutRef = ref();
    const workbenchRef = ref();
    const gridItemRef = ref();
    const containerWidth = ref<number>(0);
    const layout = computed(() => props.layout) as ComputedRef<Layout>;
    const cols = computed(() => props.colNum);
    const margin = computed(() => props.margin);
    const rowHeight = computed(() => props.rowHeight);
    const isStatic = computed(() => props.isStatic);
    const themeName = computed(() => props.themeName);
    const debugConsole = computed(() => props.debugConsole);
    const verticalCompact = computed(() => props.verticalCompact);
    const currBgcolor = computed(() => themes.find((item) => item.themeName === themeName.value)?.theme.backgroundColor);

    const deUpdateChartSize = debounce(updateChartSize, 100);
    const deOnWindowResize = debounce(onWindowResize, 100);

    const erd = elementResizeDetectorMaker({
      strategy: 'scroll', // <- For ultra performance.
    });

    validateLayout(layout.value);

    function campactLayout() {
      compact(layout.value, verticalCompact.value /* verticalCompact */);
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

      // updateHeight();

      deUpdateChartSize(l);

      if (eventName === 'resizeend') emit('layout-updated', layout.value);
    }

    function updateGridItem() {
      if (gridItemRef.value) {

        gridItemRef.value.forEach((gridItem) => {
          gridItem.createStyle();
        });
      }
    }

    function updateAllChartSize() {
      const gridItems = document.querySelectorAll('.vue-grid-item[data-grid-index]');
      [...gridItems].forEach((gridItem) => {
        if (gridItem) resizeChartByDom(gridItem);
      });
    }

    function updateChartSize(item) {
      if (item.i) {
        const gridItem = document.querySelector(`[data-grid-index="${item.i}"].vue-grid-item`);
        if (gridItem) resizeChartByDom(gridItem);
      }
    }

    /* 传入 .vue-grid-item 元素  */
    function resizeChartByDom(gridItem: HTMLElement) {
      const echartDom = gridItem.children[0];
      if (echartDom) {
        echarts.getInstanceByDom(echartDom)?.resize();
      }
    }

    function onWindowResize() {
      containerWidth.value = parseInt(getComputedStyle(workbenchRef.value).width, 10);
      nextTick(() => {
        updateAllChartSize();

      });
    }
    watch(
      () => [...margin.value],
      () => {
        campactLayout();
        updateGridItem();

        // 影响布局的全局参数
        // updateAllChartSize();
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
      campactLayout();
      updateGridItem();

      // 影响布局的全局参数
      // updateAllChartSize();
    });

    onMounted(() => {
      containerWidth.value = parseInt(getComputedStyle(workbenchRef.value).width, 10);

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
    provide('themeName', readonly(themeName));
    provide('debugConsole', readonly(debugConsole));
    provide('verticalCompact', readonly(verticalCompact));

    expose({ campactLayout });

    return {
      layout,
      containerWidth,
      currBgcolor,
      GridLayoutRef,
      workbenchRef,
      gridItemRef,
      renderGridItemRef,
      dragEvent,
      resizeEvent,
      ...toRefs(state),
    };
  },
});
</script>

<template>
  <div ref="workbenchRef" class="vue-grid-wrapper" :style="{ 'background-color': currBgcolor }">
    <!--布局容器-->
    <grid-layout ref="GridLayoutRef" style="height: 100%" :placeholder="placeholder" :is-dragging="isDragging">
      <!-- style="border: 1px dashed #17233d" -->
      <grid-item
v-for="item of layout" ref="gridItemRef" :key="item.i" :x="item.x" :y="item.y" :w="item.w" :h="item.h"
        :i="item.i" @drag-event="dragEvent" @resize-event="resizeEvent">
        <render-grid-item ref="renderGridItemRef" :render-data="item" />
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
