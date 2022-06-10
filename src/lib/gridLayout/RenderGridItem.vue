<script lang="ts">
// @ts-nocheck
import {
  computed,
  defineComponent,
  provide,
  reactive,
  toRefs,
  nextTick,
  onMounted,
  onBeforeUnmount,
  getCurrentInstance,
  readonly,
} from 'vue';
import { debounce } from 'lodash';
import { renderGridItemProps } from './types/RenderGridItem.types';

export default defineComponent({
  name: 'RenderGridItem',
  components: {},

  props: renderGridItemProps,

  setup(props) {
    const renderData = computed(() => props.renderData);
    const state = reactive({
      prepare: false,
      style: {},
      parentEl: null,
    });
    const internalInstance = getCurrentInstance();

    const style = {
      height: '100%',
      width: '100%'
    };

    // function handleUpdate(elm, refresh = false) {

    // }

    // 延迟执行, 等待父级元素更新后进行尺寸重置
    // const deOnWindowResize = debounce(() => setTimeout(() => handleUpdate(state.parentEl)), 100);

    onMounted(() => {
      const elm = internalInstance.ctx.$parent.$el;
      state.parentEl = elm;
      // handleUpdate(elm);
      // 监听Resize
      // window.addEventListener('resize', deOnWindowResize);
    });

    onBeforeUnmount(() => {
      // window.removeEventListener('resize', deOnWindowResize);
    });

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
