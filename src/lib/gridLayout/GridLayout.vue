<script lang="ts">
// @ts-nocheck
import { computed, defineComponent, inject, reactive, toRefs } from 'vue';

import GridItem from './GridItem.vue';
import { gridLayoutProps } from './types/GridLayout.types';

export default defineComponent({
  name: 'GridLayout',
  components: {
    GridItem,
  },

  props: gridLayoutProps,

  setup(props) {
    const isDragging = computed(() => props.isDragging);
    const placeholder = computed(() => props.placeholder);
    const containerWidth = inject('containerWidth');

    const state = reactive({
      // width: null,
      mergedStyle: {},
      // lastLayoutLength: 0,
      // isDragging: false,
      // layouts: {}, // array to store all layouts from different breakpoints
      // lastBreakpoint: null, // store last active breakpoint
      // originalLayout: null, // store original Layout
    });

    return {
      ...toRefs(state),
      isDragging,
      placeholder,
      containerWidth,
    };
  },
});
</script>

<template>
  <div ref="item" class="vue-grid-layout" :style="mergedStyle">
    <slot></slot>
    <!-- 占位符 -->
    <grid-item
      v-show="isDragging"
      class="vue-grid-placeholder"
      :x="placeholder.x"
      :y="placeholder.y"
      :w="placeholder.w"
      :h="placeholder.h"
      :i="placeholder.i"
      :container-width="containerWidth"
    />
  </div>
</template>

<style scoped>
@import url('./styles/grid-layout.css');
</style>
