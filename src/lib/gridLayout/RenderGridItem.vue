<script lang="ts">
// @ts-nocheck
import {
  computed,
  defineComponent,
  provide,
  reactive,
  toRefs,
  readonly,
} from 'vue';
import { renderGridItemProps } from './types/RenderGridItem.types';

export default defineComponent({
  name: 'RenderGridItem',
  components: {},

  props: renderGridItemProps,

  // TODO: 延迟渲染图表

  setup(props) {
    const renderData = computed(() => props.renderData);
    const state = reactive({
      prepare: false,
      style: {},
    });

    const style = {
      height: '100%',
      width: '100%'
    };

    // 从渲染组件开始分发配置数据
    provide('renderData', readonly(renderData));

    return {
      ...toRefs(state),
      renderData,
      style,
    };
  },
});
</script>

<template>
  <component :is="renderData.renderComponent" :style="style"/>
</template>

<style scoped>
@import url('./styles/grid-layout.css');
</style>
