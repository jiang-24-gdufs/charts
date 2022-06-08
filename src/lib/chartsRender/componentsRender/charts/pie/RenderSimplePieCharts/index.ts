import { defineAsyncComponent } from 'vue';

export const RenderSimplePieCharts = defineAsyncComponent(
  () => import('./RenderSimplePieCharts.vue')
);
export default RenderSimplePieCharts;
