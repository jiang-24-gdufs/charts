import { defineAsyncComponent } from 'vue';

export const RenderSimpleBarCharts = defineAsyncComponent(
  () => import('./RenderSimpleBarCharts.vue')
);
export default RenderSimpleBarCharts;
