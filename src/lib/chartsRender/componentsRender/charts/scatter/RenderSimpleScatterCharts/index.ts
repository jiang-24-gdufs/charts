import { defineAsyncComponent } from 'vue';

export const RenderSimpleScatterCharts = defineAsyncComponent(
  () => import('./RenderSimpleScatterCharts.vue')
);
export default RenderSimpleScatterCharts;
