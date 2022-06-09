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
    const style = computed(() => ({
      height: renderData.value.initOption ? `${renderData.value.initOption.height}px` : 0,
      width: renderData.value.initOption ? `${renderData.value.initOption.width}px` : 0,
      // boxSizing: 'border-box',
    }));

    function handleUpdate(elm, refresh = false) {
      debugger;
      if (state.prepare) {
        nextTick(() => {
          handleAppendInitOptions(elm);
        });
      } else {
        // 第一次渲染，等待动画结束
        window.setTimeout(() => {
          handleAppendInitOptions(elm);
          state.prepare = true;
        });
      }
      if (state.prepare && refresh) {
        // state.handleRefresh();
      }
    }

    /**
     * 添加宽高
     * @param height
     * @param width
     */
    // provide methods to change;
    function handleAppendInitOptions(elm: HTMLElement | null) {
      if (elm) {
        const { offsetHeight, offsetWidth } = elm;
        renderData.value.initOption = {
          /* -2 是上下左右虚线1px */
          width: offsetWidth - 2,
          height: offsetHeight - 2,
        };
      }
    }

    // 延迟执行, 等待父级元素更新后进行尺寸重置
    const deOnWindowResize = debounce(() => setTimeout(() => handleUpdate(state.parentEl)), 100);

    onMounted(() => {
      const elm = internalInstance.ctx.$parent.$el;
      state.parentEl = elm;
      handleUpdate(elm);
      // 监听Resize
      window.addEventListener('resize', deOnWindowResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', deOnWindowResize);
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
  <!-- <div ref="item">
    render-grid-item
    <p>{{ JSON.stringify(renderData) }}</p>
  </div> -->
  <component :is="renderData.renderComponent" :style="style" />
</template>

<style scoped>
@import url('./styles/grid-layout.css');
</style>
